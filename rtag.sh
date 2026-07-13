#!/bin/bash

# 删除远程仓库中指定提交之后的所有提交
# 用法: ./rtag.sh <commit-hash>
# 示例: ./rtag.sh 7929f6a

set -e

REMOTE="origin"
TARGET_COMMIT="${1}"

if [ -z "$TARGET_COMMIT" ]; then
    echo "错误: 请指定目标提交哈希"
    echo "用法: $0 <commit-hash>"
    echo "示例: $0 7929f6a"
    exit 1
fi

echo "目标提交: $TARGET_COMMIT"

# 1. 获取所有远程分支
echo "=== 获取远程信息 ==="
git fetch --all --prune

# 2. 找到包含该提交的所有远程分支
echo "=== 查找包含目标提交的分支 ==="
BRANCHES=$(git branch -r --contains "$TARGET_COMMIT" | grep -v "HEAD" | sed 's|origin/||' | sed 's|^[ ]*||')

if [ -z "$BRANCHES" ]; then
    echo "错误: 提交 $TARGET_COMMIT 不在任何远程分支中"
    exit 1
fi

echo "找到分支: $BRANCHES"

# 3. 对每个分支，重置到目标提交
for BRANCH in $BRANCHES; do
    echo ""
    echo "=== 处理分支: $BRANCH ==="
    
    # 切换到本地分支（如果不存在则创建）
    if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
        git checkout "$BRANCH"
    else
        git checkout -b "$BRANCH" "$REMOTE/$BRANCH"
    fi
    
    # 获取该分支在目标提交之后的所有提交
    echo "查找 $TARGET_COMMIT 之后的提交..."
    COMMITS_AFTER=$(git log --oneline "$TARGET_COMMIT..HEAD" | wc -l | tr -d ' ')
    
    if [ "$COMMITS_AFTER" -eq 0 ]; then
        echo "分支 $BRANCH 在目标提交之后没有新提交"
        continue
    fi
    
    echo "找到 $COMMITS_AFTER 个提交在目标提交之后"
    
    # 显示将要删除的提交
    echo "将要删除的提交:"
    git log --oneline "$TARGET_COMMIT..HEAD"
    
    # 重置到目标提交
    echo "重置到 $TARGET_COMMIT..."
    git reset --hard "$TARGET_COMMIT"
    
    # 强制推送到远程
    echo "强制推送到远程..."
    git push "$REMOTE" "$BRANCH" --force-with-lease
    
    echo "分支 $BRANCH 已重置到 $TARGET_COMMIT"
done

echo ""
echo "=== 完成 ==="
echo "所有分支已重置到提交 $TARGET_COMMIT"
echo "注意: 如果其他开发者已经拉取了这些提交，他们需要重新同步"