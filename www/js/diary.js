
// 页面唯一标识
WI=window.I=crypto.randomUUID()

window.IX={
	name:'diary',
	observer:{},
	K:cordova.plugin.koofr,
	S:cordova.plugin.sqlite,

	ftime:ts=>{
		const wd=['日','一','二','三','四','五','六'],mc=['正月','二月','三月','四月','五月','六月','七月','八月','九月','十月','冬月','腊月']
		let d=new Date(parseInt(ts)),y=d.getFullYear(),m=d.getMonth(),w=d.getDay(),t=d.toTimeString().slice(0,8)
		return{w:'星期'+wd[w],y,m:mc[m],d:d.getDate(),t}
	},

	statistics:async(me)=>{ // 统计
		'diary_tab'.sc(me.ga('v'))
		$O.$$('tab>*').forEach(_=>_[_!=me?'da':'sa']('c'))
		const gbox=$O.$('grid').html('')

		// 总条数和平均字数
		let s=await IX.S.select('O',{cs:['content','at'],oy:'id DESC'}),count=s.length
		const days=count<1?0:new Set(s.map(r=>new Date(parseInt(r.at)).toLocaleDateString())).size
		const lavg=count<1?0:Math.round(s.reduce((x,r)=>x+(r.content||'').length,0)/count*10)/10
		const peak=count<1?0:Math.round(s.reduce((x,r)=>x+new Date(parseInt(r.at)).getHours(),0)/count*10)/10

		// 图片/文件去重 - 只查有数据的
		const si=new Set(),sf=new Set(),dm=new Map()
		s=await IX.S.select('O',{cs:['imgs'],w:{imgs:{ne:'[]'}}})
		s.forEach(r=>r.imgs&&JSON.parse(r.imgs).forEach(v=>si.add(v)))
		s=await IX.S.select('O',{cs:['files'],w:{files:{ne:'[]'}}})
		s.forEach(r=>r.files&&JSON.parse(r.files).forEach(v=>sf.add(v)))

		// 连续天数 - 只查不同日期
		s=await IX.S.select('O',{cs:['at']})
		s.forEach(r=>{let d=new Date(r.at).toLocaleDateString();dm.set(d,true)})
		s=[...dm.keys()].sort().reverse()
		let streak=0,today=new Date().toLocaleDateString()
		for(let i=0;i<s.length;i++){
			if(i==0&&s[i]!=today)break
			if(i==0||(new Date(s[i-1])-new Date(s[i]))/864e5==1)streak++
			else break
		}
		gbox.html(`
		<grid-c summary>
			<div streak x='当前持续天数：'>${streak}</div><div days x='记录总天数：'>${days}</div><div count x='记录总数：'>${count}</div>
			<div icount x='图片总数：'>${si.size}</div><div fcount x='附件总数：'>${sf.size}</div>
			<div lavg x='平均字数：'>${lavg}</div><div peak x='最活跃时段：'>${peak}点</div>
		</grid-c>`)
	},

	list:async(me,go)=>{ // 列表
		let gbox=$O.$('grid')
		if(!_T(me,'int')){
			IX.stop=false
			gbox=gbox.html('')
			'diary_tab'.sc(me.ga('v'))
			$O.$$('tab>*').forEach(_=>_[me!=_?'da':'sa']('c'))
			IX.page=me=1
		}else if(IX.stop)return go&&go(true)

		const s=await IX.S.page('O',{p:me,z:30,oy:'at DESC'}).then(_=>_.rows)
		if(s.length<30)IX.stop=true
		for(let d,m,y,i=0;i<s.length;i++){
			const x=IX.ftime(s[i].at)
			if(i===0||x.m!=m||x.y!=y){
				y=x.y
				m=x.m
				if(i===0)d=x.d
				gbox.append($O.node('grid-c',{my:''},`${m} ${y}`))
				gbox.append($O.node('grid-c',{dr:''},`<div I='${s[i].id}'><div L><div>${x.w}</div>${x.d}</div><div R><button onclick='run("IX","remove",WI)(this)'>删除</button><div F><div>${s[i].title}</div><div>${s[i].content}</div><div>${x.t}</div></div></div></div>`))
				continue
			}
			gbox.$(':scope>grid-c[dr]:last-child').append($O.node('div',{I:s[i].id},`<div L><div>${x.w}</div>${x.d}</div><div R><button onclick='run("IX","remove",WI)(this)'>删除</button><div F><div>${s[i].title}</div><div>${s[i].content}</div><div>${x.t}</div></div></div>`))
		}
		go&&go(true)
	},

	remove:async(me)=>{ // 删除记录
		if(!confirm('你确定删除此记录吗？'))return
		const $=me.closest('div[I]').sa('wait'),$p=$.closest('grid-c[dr]')
		const id=$.ga('I'),s=await IX.S.select('O',{cs:['imgs','files'],w:id}).then(_=>{
			const o=[]
			o.push(...(_.files||[]).filter(_=>_.startsWith('/tyan/files/')))
			o.push(...(_.imgs||[]).filter(_=>_.startsWith('/tyan/files/')))
			return o
		})
		s.push(id+'.json')
		log('线上文件，待删清单',s)
		let o=await IX.K.remove('tyan',s).catch(_=>{
			log('线上删除，操作失败',_)
			return null
		})
		if(!o)return
		o=await IX.S.remove('O',id)
		if(o<1){
			log('本地数据，删除失败，请刷新重试')
			return
		}
		$.remove()
		if($p.children.length>0)return
		const x=$p.previousElementSibling
		if(x.ha('my'))x.remove()
		$p.remove()
	},

	calendar:async(me)=>{ // 日历
		'diary_tab'.sc(me.ga('v'))
		$O.$$('tab>*').forEach(_=>_[_!=me?'da':'sa']('c'))
		
		log('开始转屏')
		// cordova.plugin.orient.set('H')
		log('已经转屏')

		await cordova.plugin.badge.set(5)
		log('设置成功')

	},

	add:async()=>{ // 新增

		await cordova.plugin.badge.clear()
		log('清除成功')

		const title='挖掘客户举报检测方法关系还记得盖好'
		const content='顾虑感觉刚放假你好哥哥很多地方个非常喜欢好看'
		const address='中国.黑龙江.漠河',location='45.89666,86.88556'
		const mood='said',tags='徐',imgs=['https://pixabay.com/zh/images/download/x-10222434_1920.jpg']
		let o=await IX.S.insert('O',{title,content,address,location,mood,tags,imgs,files:[]},true,true)
		if(!o||!o.id||o.id<1){
			log('添加失败','error')
			return
		}
		log('已添数据',o)

		const id=o.id,uo=await IX.K.upload('tyan',`${o.id}.json`,Array.from(new Uint8Array(new TextEncoder().encode(JSON.stringify(o)))))
		log('已传数据',uo.o.name+' '+uo.o.hash)

		if('diary_tab'.gc()!='list')return

		o=await IX.S.select('O',{cs:'at',w:id})
		const {y,m,d,w,t}=IX.ftime(o.at)
		if(!$O.$('grid-c'))$O.$('grid').append($O.node('grid-c',{my:''},`${m} ${y}`))
		if(!$O.$('grid-c[dr]'))$O.$('grid').append($O.node('grid-c',{dr:''},`<div I='${id}'><div L><div>${w}</div>${d}</div><div R><button onclick='run("IX","remove",WI)(this)'>删除</button><div F><div>${title}</div><div>${content}</div><div>${t}</div></div></div></div>`))
		else $O.$('grid>grid-c[dr]:last-child').append($O.node('div',{I:id},`<div L><div>${w}</div>${d}</div><div R><button onclick='run("IX","remove",WI)(this)'>删除</button><div F><div>${title}</div><div>${content}</div><div>${t}</div></div></div>`))
	},

	watch:()=>{
		let opened=null,wait=false
		const bind=f=>{
			if(f.ha('bind'))return
			f.sa('bind')
			let sx=0,sy=0
			f.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},false)
			f.addEventListener('touchmove',e=>{
				let dx=e.touches[0].clientX-sx,dy=e.touches[0].clientY-sy
				if(Math.abs(dx)>Math.abs(dy)&&dx<-10){
					e.preventDefault()
					if(opened&&opened!==f)opened.da('S')
					f.sa('S');opened=f
				}
			},false)
		}
		$O.addEventListener('click',e=>{
			if(!e.target.closest('grid-c[dr]>[I]>[R]>[F]')&&opened&&!opened.ha('wait'))opened.da('S')
		},false)
		IX.observer.load_more=new IntersectionObserver((s,o)=>{
			let last=null
			s.forEach(e=>{if(e.target.nodeName==='GRID-C'&&e.intersectionRatio>=0.7)last=e.target})
			if(!last||last.ha('wait'))return
			last.sa('wait')
			IX.list(++IX.page,_=>{if(_)o?.unobserve(last);last.da('wait')})
		},{threshold:0.7})
		IX.observer.get_nodes=new MutationObserver(s=>{
			s.forEach(e=>e.addedNodes.forEach(n=>{
				if(n.nodeType!==1)return
				if(n.nodeName==='GRID-C'){n.$$('[F]').forEach(f=>bind(f));const l=n.lastElementChild;if(l)IX.observer.load_more?.observe(l)}
				if(n.ha('I')&&n.closest('grid-c[dr]'))bind(n.$('[F]'))
			}))
		})
		IX.observer.get_nodes.observe($O.body,{subtree:true,childList:true})
	},

	run:async()=>{ // 启动执行
		log('进入页面，自定义样式')
		$O.$('head>style[ix]').innerHTML=`
body{display:flex!important;flex-direction:column!important}

grid-c{float:left;display:block;width:calc(100vw - 20px);height:auto}

grid-c[summary]{margin-top:12px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;height:600px;color:rgba(0,0,0,.6);font-size:40px;font-weight:800;gap:10px}
body[dark] grid-c[summary]{color:rgba(255,255,255,.6)}
grid-c[summary]>*{display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.06);border-radius:6px}
body[dark] grid-c[summary]>*{background:rgba(255,255,255,.06)}
grid-c[summary]>*::before{content:attr(x);display:block;position:absolute;top:12px;left:10px;font-size:20px}
grid-c[summary]>[streak]{grid-column:1;grid-row:1/3}
grid-c[summary]>[days]{grid-column:2;grid-row:1}
grid-c[summary]>[const]{grid-column:2;grid-row:2}
grid-c[summary]>[icount]{grid-column:1;grid-row:3}
grid-c[summary]>[fcount]{grid-column:2;grid-row:3}
grid-c[summary]>[lavg]{grid-column:1;grid-row:4}
grid-c[summary]>[peak]{grid-column:2;grid-row:4}

grid-c[my]{background:rgba(0,0,0,0);color:black;font-size:26px;line-height:40px;color:black;padding:0}
body[dark] grid-c[my]{color:white}

grid-c[dr]{display:flex;flex-direction:column;border-radius:14px;background:rgba(0,0,0,.04);overflow:hidden;margin-bottom:5px}
body[dark] grid-c[dr]{background:rgba(255,255,255,.04)}
grid-c[dr]:last-child{margin-bottom:36px}
grid-c[dr]>[I]{display:flex;margin-bottom:1px;overflow:hidden;padding-left:6px}
grid-c[dr]>[I]:last-child{margin-bottom:0}
grid-c[dr]>[I]>[L]{flex-shrink:0;width:19%;aspect-ratio:3/3.5;padding:0 8px;background:#eee;transition:background .2s}
body[dark] grid-c[dr]>[I]>[L]{background:#2a2a2a}
grid-c[dr]>[I]:first-child>[L]{z-index:4;background:translate;text-align:center;font-size:22px}
grid-c[dr]>[I]:first-child>[L]::after{content:'';display:block;position:absolute;top:6%;left:15%;z-index:10;width:70%;height:88%;background:rgba(0,0,0,.2);border-radius:24px}
body[dark] grid-c[dr]>[I]:first-child>[L]::after{background:rgba(255,255,255,.2)}
grid-c[dr]>[I]:first-child>[L]>div{font-size:12px;margin:20px auto 4px auto}
grid-c[dr]>[I]:not(:first-child)>[L]{z-index:0;color:rgba(0,0,0,0)}
grid-c[dr]>[I]:not(:first-child)>[L] *{color:rgba(0,0,0,0)}

grid-c[dr]>[I]>[R]{flex:1;min-width:0}
grid-c[dr]>[I]>[R]>button{position:absolute;right:0;top:0;width:18.5%;height:100%;background:#e74c3c;color:#fff;border:none;font-size:18px;font-weight:500;display:flex;align-items:center;justify-content:center;z-index:1}
grid-c[dr]>[I]>[R]>[F]{width:100%;height:100%;overflow:hidden;z-index:2;background:#f9f9f9;display:flex;flex-direction:column;padding:6px 4px 6px 0;transition:transform .25s}
body[dark] grid-c[dr]>[I]>[R]>[F]{background:#2a2a2a}
grid-c[dr]>[I]>[R]>[F][S]{transform:translateX(-19%)}
grid-c[dr]>[I]>[R]>[F]>*:first-child{font-size:16px;color:#222;padding-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
grid-c[dr]>[I]>[R]>[F]>*:nth-child(2){flex:1;font-size:13px;line-height:1.84;height:30px;color:rgba(0,0,0,.8);padding-bottom:3px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all}
grid-c[dr]>[I]>[R]>[F]>*:last-child{font-size:10px;color:rgba(0,0,0,.6)}
body[dark] grid-c[dr]>[I]>[R]>[F]>*:first-child{color:#fff}
body[dark] grid-c[dr]>[I]>[R]>[F]>*:nth-child(2){color:rgba(255,255,255,.8)}
body[dark] grid-c[dr]>[I]>[R]>[F]>*:last-child{color:rgba(255,255,255,.5)}
`
		log('渲染页面，构建 DOM 树')
		$O.$$('body>*:not(#w_logs)').forEach(_=>_.remove())
		$O.body.html(`
		<tab>
			<div v='statistics' onclick='run("IX","statistics",WI)(this)'>🟡🟢</div>
			<div v='list' onclick='run("IX","list",WI)(this)'>列表</div>
			<div v='calendar' onclick='run("IX","calendar",WI)(this)'>日历</div>
			<div onclick='run("IX","add",WI)(this)'>╋ 新条目</div>
			<div onclick='run("IX","sync",WI)(this)'>同步</div>
		</tab><grid></grid><modal hide><mbox><modal-t><title></title>
		<icc onclick='run("IX","modal_close",WI)()'>╳</icc>
		</modal-t><modal-c><textarea IT></textarea><textarea IC></textarea></modal-c></mbox></modal>`+($O.$('#w_logs')?.html(true)||''))

		/*
		let e=await IX.S.exist('O')
		log(e?"yes":"no")
		if(e)await IX.S.clear('O')
		await IX.S.create('O',{
			cs:[
				{n:'id',tp:'INTEGER',pk:true,ai:true},
				{n:'title',tp:'TEXT',nn:true},
				{n:'content',tp:'TEXT'},
				{n:'address',tp:'TEXT'},
				{n:'location',tp:'TEXT'},
				{n:'imgs',tp:'TEXT',df:'[]'},
				{n:'files',tp:'TEXT',df:'[]'},
				{n:'mood',tp:'TEXT'},
				{n:'tags',tp:'TEXT',df:'[]'}
			],ec:['title','content','imgs','files']
		})
		e=await IX.S.exist('O')
		log(e?"yes":"no")
		const s=await IX.K.list('tyan').then(_=>_.o.files.map(_=>_.name.endsWith('.json')?_.name:null).filter(Boolean)).catch(_=>[])
		log('线上数据，文件清单',s)
		for(let _ of s){
			let o=await IX.K.download('tyan',_).then(_=>JSON.parse(_.o)).catch(_=>null)
			if(!o)continue
			log(`线上数据，原文 ${_} 内容: `,o)
			o=await IX.S.insert('O',o,false,true)
			log(`线上数据，存储 ${_} 内容: `,o)
		}
		*/
		log('绑定事件，节点监听')
		IX.watch()
		log('获取缓存，点击 TAB')
		let tab=$O.$(`tab>[v='${'diary_tab'.gc('statistics')}']`)
		if(!tab)tab=$O.$(`tab>[v='statistics']`)
		tab.click()
	},
}
