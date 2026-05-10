// const fs=require('fs'),p=require('path')

module.exports=function(ctx){
	const b=p.join(ctx.opts.projectRoot,'platforms','android','app')
	const m=p.join(b,'src','main','AndroidManifest.xml')
	const r=p.join(b,'src','main','res','xml')

	// 网络配置
	fs.mkdirSync(r,{recursive:true})
	fs.writeFileSync(p.join(r,'cors.xml'),`<?xml version="1.0" encoding="utf-8"?>
<network-security-config><base-config cleartextTrafficPermitted="true">
<trust-anchors><certificates src="system"/><certificates src="user"/></trust-anchors>
</base-config></network-security-config>`)

	// 读取manifest
	let s=fs.readFileSync(m,'utf8')

	// 注入 networkSecurityConfig
	if(!s.includes('networkSecurityConfig'))s=s.replace('<application','<application android:networkSecurityConfig="@xml/cors"')

	// 注入 uses-feature (TV适配)
	if(!s.includes('android.software.leanback'))s=s.replace('<application','<uses-feature android:name="android.software.leanback" android:required="false"/>\n<uses-feature android:name="android.hardware.touchscreen" android:required="false"/>\n<application')

	// 注入 LEANBACK_LAUNCHER（追加，不替换）
	if(!s.includes('LEANBACK_LAUNCHER'))s=s.replace(/<category android:name="android.intent.category.LAUNCHER" \/>/,'<category android:name="android.intent.category.LAUNCHER" />\n                <category android:name="android.intent.category.LEANBACK_LAUNCHER" />')

	fs.writeFileSync(m,s)

	// Kotlin版本 + ABI过滤
	fs.writeFileSync(p.join(b,'build-extras.gradle'),`configurations.all {
 resolutionStrategy {
  force 'org.jetbrains.kotlin:kotlin-stdlib:1.9.22'
 }
}

android {
 defaultConfig {
  if (project.hasProperty('targetAbi')) {
   ndk {
    abiFilters project.getProperty('targetAbi')
   }
  }
 }
}
`)

	// 清理
	try{fs.unlinkSync(p.join(r,'config.xml'))}catch(_){}
	try{fs.unlinkSync(p.join(b,'..','res','xml','config.xml'))}catch(_){}
}