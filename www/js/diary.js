
// 页面唯一标识
WI=window.I=crypto.randomUUID()

window.IX={
	name:'diary',observer:{},

	FM:'data:image/svg+xml,%3Csvg%20fill%3D%22%23fff%22%20width%3D%22500px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-153.6%20-153.6%20819.20%20819.20%22%3E%3Cpath%20d%3D%22M256%2C0C114.842%2C0%2C0%2C114.842%2C0%2C256s114.842%2C256%2C256%2C256s256-114.842%2C256-256S397.158%2C0%2C256%2C0z%20M256%2C474.537%20c-120.501%2C0-218.537-98.036-218.537-218.537S135.499%2C37.463%2C256%2C37.463S474.537%2C135.499%2C474.537%2C256S376.501%2C474.537%2C256%2C474.537z%22%2F%3E%3Ctext%20x%3D%22256%22%20y%3D%22256%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%20font-size%3D%22140%22%20font-weight%3D%22bold%22%20font-family%3D%22Arial%2C%20sans-serif%22%3E?%3C%2Ftext%3E%3C%2Fsvg%3E',
	IH:'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDBweCIgdmlld0JveD0iLTggLTggNDguMDAgNDguMDAiPgo8Y2lyY2xlIGZpbGw9IiM1RjVCNUJDRiIgY3g9IjE2IiBjeT0iMTYiIHI9IjE2Ii8+PGcgZmlsbD0iI2ZmZiI+CjxwYXRoIGQ9Ik0xNi4wOTIgMjMuMTk2QzEwLjUxOCAyMy4xOTYgNiAyMS41ODYgNiAxOS40MjhjMC0xLjEyNiAxLjIzLTIuMTQgMy4yLTIuODU2IDEuNTM4Ljk4NyA0LjExNyAxLjQ5MyA3LjA0MiAxLjQ5MyAyLjg1NiAwIDUuMzgtLjYxNyA2LjkzLTEuNTYyIDEuODU5LjcwNyAzLjAxMyAxLjY5NCAzLjAxMyAyLjc4MiAwIDIuMTYxLTQuNTE4IDMuOTExLTEwLjA5MyAzLjkxMXoiLz4KPHBhdGggZD0iTTE2LjE1MiAxNy41OGMtNC4yMjYgMC03LjY1Mi0xLjMyNS03LjY1Mi0yLjk2IDAtLjkwNiAxLjA1Ni0xLjcxOCAyLjcxMi0yLjI1OSAxLjE4Mi42MTcgMi45NTMgMS4wMTEgNC45NCAxLjAxMSAxLjk4NyAwIDMuNzU4LS4zOTQgNC45NC0xLjAxIDEuNjU5LjU0MyAyLjcxMiAxLjM1MiAyLjcxMiAyLjI1OC4wMDMgMS42MzUtMy40MjQgMi45Ni03LjY1MiAyLjk2eiIvPgo8cGF0aCBkPSJNMTYuMTI0IDEyLjg4Yy0zLjI2NyAwLTUuOTE2LTEuMDk0LTUuOTE2LTIuNDQgMC0xLjM0NSAyLjY1LTIuNDQgNS45MTYtMi40NCAzLjI2NiAwIDUuOTE2IDEuMDk1IDUuOTE2IDIuNDQgMCAxLjM0Ni0yLjY1IDIuNDQtNS45MTYgMi40NHoiLz4KPC9nPjwvc3ZnPg==',
	MS:['普通','开心','伤心','崩溃','愤怒','压抑','恐惧','惊讶','感动','期待','紧张','抓狂','满足','疲惫','慵懒','绝望'],
	ME:{'image/jpeg':'JPG','image/png':'PNG','image/gif':'GIF','image/svg+xml':'SVG','image/webp':'WEBP','image/bmp':'BMP','video/mp4':'MP4','video/webm':'WEBM','video/3gpp':'3GP','audio/mpeg':'MP3','audio/wav':'WAV','audio/ogg':'OGG','audio/aac':'AAC','application/pdf':'PDF','application/msword':'DOC','application/vnd.openxmlformats-officedocument.wordprocessingml.document':'DOCX','application/vnd.ms-excel':'XLS','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':'XLSX','application/vnd.ms-powerpoint':'PPT','application/vnd.openxmlformats-officedocument.presentationml.presentation':'PPTX','text/plain':'TXT','text/html':'HTML','text/css':'CSS','application/javascript':'JS','application/json':'JSON','application/xml':'XML','application/zip':'ZIP','application/vnd.android.package-archive':'APK','text/markdown':'MD','text/csv':'CSV','text/yaml':'YAML'},
	loader:`<svg viewBox='0 0 100 100' width='40' height='40'><style>path{fill:#fff}path:nth-child(1){animation:r1 2s linear infinite;transform-origin:50px 50px}path:nth-child(2){animation:r2 1s linear infinite;transform-origin:50px 50px}path:nth-child(3){animation:r1 2s linear infinite;transform-origin:50px 50px}@keyframes r1{to{transform:rotate(360deg)}}@keyframes r2{to{transform:rotate(-360deg)}}</style><path d='M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z'/><path d='M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z'/><path d='M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5L82,35.7z'/></svg>`,

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
		let s=await UP.sql_gt('diary',{cs:['content','at'],oy:'id DESC'}),count=s.length
		const days=count<1?0:new Set(s.map(r=>new Date(parseInt(r.at)).toLocaleDateString())).size
		const lavg=count<1?0:Math.round(s.reduce((x,r)=>x+(r.content||'').length,0)/count*10)/10
		const peak=count<1?0:Math.round(s.reduce((x,r)=>x+new Date(parseInt(r.at)).getHours(),0)/count*10)/10

		// 图片/文件去重 - 只查有数据的
		const si=new Set(),sf=new Set(),dm=new Map()
		s=await UP.sql_gt('diary',{cs:['imgs'],w:{imgs:{ne:'[]'}}})
		s.forEach(r=>r.imgs&&r.imgs.forEach(v=>si.add(v)))
		s=await UP.sql_gt('diary',{cs:['files'],w:{files:{ne:'[]'}}})
		s.forEach(r=>r.files&&r.files.forEach(v=>sf.add(v)))

		// 连续天数 - 只查不同日期
		s=await UP.sql_gt('diary',{cs:['at']})
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

		const s=await UP.sql_pg('diary',{p:me,z:30,oy:'at DESC'}).then(_=>_.rows)
		if(s.length<30)IX.stop=true
		for(let d,m,y,i=0;i<s.length;i++){
			const x=IX.ftime(s[i].at)
			log(i,s[i])
			if(i===0||x.m!=m||x.y!=y){
				y=x.y
				m=x.m
				if(i===0)d=x.d
				gbox.append($O.node('grid-c',{my:''},`${m} ${y}`))
				gbox.append($O.node('grid-c',{dr:''},`<div I='${s[i].id}' onclick='run("IX","add",WI)(this)'><div L><div>${x.w}</div>${x.d}</div><div R><button onclick='event.stopPropagation();run("IX","remove",WI)(this)'>删除</button><div F><div>${s[i].title}</div><div>${s[i].content}</div><div>${x.t}</div></div></div></div>`))
				continue
			}
			gbox.$(':scope>grid-c[dr]:last-child').append($O.node('div',{I:s[i].id,onclick:'run("IX","add",WI)(this)'},`<div L><div>${x.w}</div>${x.d}</div><div R><button onclick='event.stopPropagation();run("IX","remove",WI)(this)'>删除</button><div F><div>${s[i].title}</div><div>${s[i].content}</div><div>${x.t}</div></div></div>`))
		}
		go&&go(true)
	},
	remove:async(me)=>{ // 删除记录
		if(IX.wait||!confirm('你确定删除此记录吗？'))return
		IX.wait=true
		const $=me.sa('wait').closest('div[I]'),$p=$.closest('grid-c[dr]')
		$.$('[F]').sa('wait')
		$.$('button').html(IX.loader)
		const o=await UP.sql_rm('diary',$.ga('I'),true).then(_=>true).catch(_=>{
			log(_,'error')
			return false
		})
		if(!o)return
		setTimeout(()=>{
			$.remove()
			if($p.children.length>0)return
			const x=$p.previousElementSibling
			if(x.ha('my'))x.remove()
			IX.wait=false
			$p.remove()
		},1000)
	},

	calendar:async(me)=>{ // 日历
		'diary_tab'.sc(me.ga('v'))
		$O.$$('tab>*').forEach(_=>_[_!=me?'da':'sa']('c'))
		
		await UP.ntf_st({t:'看考场',m:'刚刚好的方法媳妇儿',num:4,page:'hj'})
		log('设置成功')

	},

	add:async(me)=>{ // 新增
		if(IX.wait)return
		const K=IX.key=crypto.randomUUID()
		const mbox=$O.$('modal-c').html(''),id=IX.id=parseInt(me?.ga('I')||0)
		if(id>0)mbox.html(`<sk pt30 f fv g12><sk f g12 h80></sk><sk f g12 h180></sk><sk f h60><sk q w60 h60></sk><sk q w60 h60></sk><sk q w60 h60></sk></sk><sk q h40></sk><sk q h30></sk></sk>`)
		$O.body.sa('ns')
		$O.$('grid').da('a')
		$O.$('modal').da('hide').$('modal-t>title').html((id>0?'编辑':'添加')+'日记')
		const {title,content,weather,address,location,mood,tags,imgs,files}=id>0?await UP.sql_gt('diary',id):{},[lng,lat]=location?.split(',')||['','']
		if(id>0&&!title)return IX.modal_close()
		mbox.html(`
		<div x='title'><textarea placeholder=' '>${title||''}</textarea><label>日志标题</label></div>
		<div x='content'><textarea placeholder=' '>${content||''}</textarea><label>日志内容</label></div>
		<div x='mood' ph='当前心情'>${IX.MS.map(_=>`<span${!mood&&_=='普通'||mood==_?' c':''} onclick='run("IX","mood",WI)(this)'>${_}</span>`).join('')}</div>
		<div x='tags'><input placeholder=' ' value='${(tags||[]).join(' ')}'/><label>日志标签，空格分割</label></div>
		<div x='address'><input placeholder=' ' value='${address||''}'/><label>当前地址，手动输入/自动定位</label><span onclick='run("IX","location",WI)(this)'>🎯</span></div>
		<div xx><div x='lng'><input readonly placeholder=' ' value='${lng||''}'/><label>当前经度</label></div><div x='lat'><input readonly placeholder=' ' value='${lat||''}'/><label>当前纬度</label></div></div>
		<div x='weather'><input readonly placeholder=' ' value='${weather||''}'/><label>当前天气</label></div>
		<div x='imgs' ph='日志图片'>${imgs&&imgs.length>0?imgs.map(_=>`<img onclick='run("IX","preview",WI)(this)' ondblclick='this.remove()' v='${_}' src='${_.startsWith('/')&&_.includes('/files/')?IX.IH:_}'/>`).join(''):''}<div onclick='run("IX","upload",WI)(this)'>╋</div></div>
		<div x='files' ph='日志附件'>${files&&files.length>0?files.map(_=>`<img ondblclick='this.remove()' v='${_}' src='${IX.FM.replace('?',_.split('.').pop())}'/>`).join(''):''}<div onclick='run("IX","upload",WI)(this,"file")'>╋</div></div>
		<button onclick='run("IX","save",WI)(this)'>保存</button>`)
	},
	save:async(me)=>{
		if(IX.wait)return
		IX.wait=true
		me.html(IX.loader).sa('wait')
		const id=IX.id,title=$O.$(`modal-c [x='title']>textarea`).value.trim()
		if(!title){
			log('日志编辑，内容不能为空')
			me.html('保存').da('wait')
			IX.wait=false
			return
		}
		const content=$O.$(`modal-c [x='content']>textarea`).value.trim()
		if(!content){
			log('日志编辑，内容不能为空')
			me.html('保存').da('wait')
			IX.wait=false
			return
		}
		const mood=$O.$(`modal-c [x='mood']>[c]`).innerText
		const tags=$O.$(`modal-c [x='tags']>input`).value.trim().split(' ').map(_=>_.trim()).filter(Boolean)
		const address=$O.$(`modal-c [x='address']>input`).value.trim()
		const weather=$O.$(`modal-c [x='weather']>input`).value.trim()
		const location=`${$O.$(`modal-c [x='lng']>input`).value.trim()||'0'},${$O.$(`modal-c [x='lat']>input`).value.trim()||'0'}`
		const imgs=$O.$$(`modal-c [x='imgs']>*:not(div)`).map(_=>_.ga('v'))
		const files=$O.$$(`modal-c [x='files']>*:not(div)`).map(_=>_.ga('v'))
		const ox={title,content,address,weather,location,mood,tags,imgs,files}
		if(id>0)ox.id=id
		const o=await UP.sql_sv('diary',ox,true).catch(_=>{
			log('操作失败',_,'error')
			me.html('保存').da('wait')
			IX.wait=false
			return {}
		})
		if(!o||!o.id||o.id<1)return
		log(`已${id>0?'改':'添'}记录`,o)
		IX.modal_close()
		const tk='diary_tab'.gc('statistics')
		if(tk)$O.$(`tab>[v='${tk}']`)?.click()
	},
	mood:me=>{
		$O.$$(`[x='mood']>*`).forEach(_=>_.da('c'))
		me.sa('c')
	},
	location:async(me)=>{
		let o=await UP.gps_lg().catch(_=>{
			log('定位失败',_,'error')
			return {}
		})
		log('定位信息',o)
		if(!o)return
		let {lat,lng,lines,w}=await UP.gps_ag(o.lat,o.lng,{lc:'zh'}).then(_=>_.shift()||{}).catch(_=>{
			log('解析失败',_,'error')
			return {}
		})
		if(lat&&lng)w=await UP.net_wt(lat,lng)
		$O.$(`modal-c [x='lat']>input`)?.sa({value:lat||''})
		$O.$(`modal-c [x='lng']>input`)?.sa({value:lng||''})
		$O.$(`modal-c [x='weather']>input`)?.sa({value:w||''})
		$O.$(`modal-c [x='address']>input`)?.sa({value:(lines||[]).shift()||'未知地址'})
	},
	upload:async(me,t='img')=>{
		const s=await UP.fss_fs((t=='img'?'image':'*')+'/*',true)
		s.forEach(_=>{
			const x=_.mime.startsWith('image/'),$=$O.$(`modal-c [x='${x?'imgs':'files'}']>div`)
			const o=$O.node('img',{v:_.uri,src:x?_.base64:IX.FM.replace('?',IX.ME[_.mime]||'未知'),onclick:`run("IX","preview",WI)(this)`,ondblclick:'this.remove()'})
			$.parentNode.insertBefore(o,$)
		})
	},
	preview:async(me)=>{
		const p=me.parentElement,s=p.$$('img').map(_=>{
			const v=_.ga('v'),z=_.ga('src')
			log(v.startsWith('/'),v,z)
			if(v.startsWith('/'))return v
			return z
		}),i=Array.from(p.children).indexOf(me)
		await UP.fss_pv(s,i,{alpha:0.5,loader:'dots'})
	},

	modal_close:()=>{ // 关闭详情弹层
		IX.id=null
		IX.wait=false
		$O.$('modal').sa('hide','_I').$('modal-t>title').html('')
		$O.$('modal-c').html('')
		$O.body.da('ns')
	},

	watch:()=>{
		let opened=null,wait=false
		const bind=f=>{
			if(f.ha('bind'))return
			f.sa('bind')
			let sx=0,sy=0
			f.addEventListener('touchstart',e=>{if(f.ha('wait'))return;sx=e.touches[0].clientX;sy=e.touches[0].clientY},false)
			f.addEventListener('touchmove',e=>{
				if(f.ha('wait'))return
				let dx=e.touches[0].clientX-sx,dy=e.touches[0].clientY-sy
				if(Math.abs(dx)>Math.abs(dy)&&dx<-10){
					e.preventDefault()
					if(opened&&opened!==f)opened.da('S')
					f.sa('S');opened=f
				}
			},false)
		}
		$O.addEventListener('click',e=>{
			if(!opened||opened.ha('wait'))return
			if(e.target.closest('grid-c[dr]>[I]>[R]>[F]'))return
			opened.da('S')
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
body>tab> *:last-child{margin-left:auto}
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

grid-c[dr]{border-radius:12px;display:flex;flex-direction:column;background:rgba(0,0,0,.04);overflow:hidden;margin-bottom:5px}
body[dark] grid-c[dr]{background:rgba(255,255,255,.04)}
grid-c[dr]:last-child{margin-bottom:36px}
grid-c[dr]>[I]{display:flex;margin-bottom:1px;overflow:hidden}
grid-c[dr]>[I]:last-child{margin-bottom:0}
grid-c[dr]>[I]>[L]{flex-shrink:0;width:14.5%;aspect-ratio:7/8;padding:0 4px;background:#f9f9f9;transition:background .2s}
body[dark] grid-c[dr]>[I]>[L]{background:#2a2a2a}
grid-c[dr]>[I]:first-child>[L]{z-index:4;text-align:center;font-size:22px}
grid-c[dr]>[I]:last-child>[L]{z-index:4;text-align:center;font-size:22px}
grid-c[dr]>[I]:first-child>[L]::after{content:'';display:block;position:absolute;top:7%;left:15%;z-index:10;width:70%;height:86%;background:rgba(0,0,0,.2);border-radius:24px}
body[dark] grid-c[dr]>[I]:first-child>[L]::after{background:rgba(255,255,255,.2)}
grid-c[dr]>[I]:first-child>[L]>div{font-size:12px;margin:20px auto 4px auto}
grid-c[dr]>[I]:not(:first-child)>[L]{z-index:0;color:rgba(0,0,0,0)}
grid-c[dr]>[I]:not(:first-child)>[L] *{color:rgba(0,0,0,0)}

grid-c[dr]>[I]>[R]{flex:1;min-width:0}
grid-c[dr]>[I]>[R]>button{position:absolute;right:0;top:0;width:15%;height:100%;background:#e74c3c;color:#fff;border:none;font-size:18px;font-weight:500;display:flex;align-items:center;justify-content:center;z-index:1}
grid-c[dr]>[I]>[R]>button[wait]{background:#e74c3cae}
grid-c[dr]>[I]>[R]>[F]{width:100%;height:100%;overflow:hidden;z-index:2;background:#f9f9f9;display:flex;flex-direction:column;padding:6px 4px 6px 0;transition:transform .25s}
body[dark] grid-c[dr]>[I]>[R]>[F]{background:#2a2a2a}
grid-c[dr]>[I]>[R]>[F][S]{transform:translateX(-15%)}
grid-c[dr]>[I]>[R]>[F]>*:first-child{font-size:16px;color:#222;padding-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
grid-c[dr]>[I]>[R]>[F]>*:nth-child(2){flex:1;font-size:13px;line-height:1.4;color:rgba(0,0,0,.8);margin-bottom:3px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all}
grid-c[dr]>[I]>[R]>[F]>*:last-child{font-size:10px;color:rgba(0,0,0,.6)}
body[dark] grid-c[dr]>[I]>[R]>[F]>*:first-child{color:#fff}
body[dark] grid-c[dr]>[I]>[R]>[F]>*:nth-child(2){color:rgba(255,255,255,.8)}
body[dark] grid-c[dr]>[I]>[R]>[F]>*:last-child{color:rgba(255,255,255,.5)}

modal-c>*,modal-c *{margin:0;padding:0}
modal-c textarea,modal-c input{width:100%;resize:none;border-radius:2px;box-shadow:inset 0 0 5px rgba(0,0,0,.2);padding:16px 8px 8px;outline:0;margin:0;font-size:14px;color:black;background:rgba(0,0,0,0)}
body[dark] modal-c textarea,body[dark] modal-c input{box-shadow:inset 0 0 5px rgba(255,255,255,.2);color:white}
modal-c [x]>label{font-size:18px;height:auto;position:absolute;left:8px;top:50%;transform:translateY(-50%);transition:.2s}
modal-c [x]>textarea:focus+label,modal-c [x]>textarea:not(:placeholder-shown)+label,modal-c [x]>input:focus+label,modal-c [x]>input:not(:placeholder-shown)+label{top:10px;font-size:10px;color:#007bff}
modal-c [x][ph]::before{content:attr(ph);display:block;font-size:10px;position:absolute;height:auto;left:0;top:-2px;z-index:10;color:#007bff}
modal-c [x='mood'][ph]::before{font-size:14px;top:-12px}
modal-c [x='title']>textarea{height:60px;line-height:1.3;font-size:20px;margin-bottom:4px}
modal-c [x='content']>textarea{font-size:18px;min-height:34vh;line-height:1.6;margin-bottom:4px}
modal-c [x='mood']{margin:8px 0 4px 0;display:grid;grid-template-columns:repeat(5,1fr);gap:4px}
modal-c [x='mood']>*,modal-c [x='address']>span{border-radius:4px;box-shadow:inset 0 0 5px rgba(0,0,0,.2);text-align:center;line-height:34px;color:black;font-size:14px}
modal-c [x='mood']>*:hover,modal-c [x='address']>span:hover{box-shadow:inset 0 0 5px rgba(0,0,0,.4)}
modal-c [x='mood']>*[c]{background:rgba(0,0,0,.4);color:white}
body[dark] modal-c [x='mood']>*,body[dark] modal-c [x='address']>span{box-shadow:inset 0 0 5px rgba(255,255,255,.2);color:white}
body[dark] modal-c [x='mood']>*:hover,body[dark] modal-c [x='address']>span:hover{box-shadow:inset 0 0 5px rgba(255,255,255,.4)}
body[dark] modal-c [x='mood']>*[c]{background:rgba(255,255,255,.4);color:black}
modal-c [x='tags']>textarea{line-height:40px;margin-bottom:4px}
modal-c [x='address'],modal-c [xx]{margin:4px 0 4px 0;display:flex;gap:4px;height:40px}
modal-c [x='address']>input,modal-c [xx]>*{flex:1}
modal-c [x='address']>span{width:40px;border-radius:3px;font-size:24px;line-height:40px;text-align:center}
modal-c [x='imgs'],modal-c [x='files']{padding-top:8px;margin-top:2px;display:flex;align-items:center;gap:4px;overflow-x:auto;border-bottom:1px solid rgba(0,0,0,.1)}
body[dark] modal-c [x='imgs'],body[dark] modal-c [x='files']{border-color:rgba(255,255,255,.1)}
modal-c [x='imgs']>*,modal-c [x='files']>*{display:block;width:50px;height:50px;font-size:30px;text-align:center;object-fit:cover;border:1px solid rgba(0,0,0,.2);border-radius:2px}
modal-c [x='imgs']>*:hover,modal-c [x='files']>*:hover{border-color:rgba(0,0,0,.5)}
body[dark] modal-c [x='imgs']>*,body[dark] modal-c [x='files']>*{border-color:rgba(255,255,255,.2)}
body[dark] modal-c [x='imgs']>*:hover,body[dark] modal-c [x='files']>*:hover{border-color:rgba(255,255,255,.5)}
modal-c>button{margin:8px 0 20px 0;line-height:60px;border:0;border-radius:6px;background:#831BF2EC;color:white;text-align:center;font-size:18px}
modal-c>button[wait]{background:#831BF2AE}
modal-c>button:not([wait]):hover{background:#7009E0FF}
modal-c>button>svg{margin:6px auto;display:block;object-fit:contain}
`
		log('渲染页面，构建 DOM 树')
		$O.$$('body>*:not(#w_logs)').forEach(_=>_.remove())
		$O.body.html(`
		<tab>
			<div v='statistics' onclick='run("IX","statistics",WI)(this)'>🟡🟢</div>
			<div v='list' onclick='run("IX","list",WI)(this)'>列表</div>
			<div v='calendar' onclick='run("IX","calendar",WI)(this)'>日历</div>
			<div onclick='run("IX","add",WI)(this)'>╋ 新条目</div>
		</tab><grid></grid><modal hide><mbox><modal-t><title></title>
		<icc onclick='run("IX","modal_close",WI)()'>╳</icc>
		</modal-t><modal-c><textarea IT></textarea><textarea IC></textarea></modal-c></mbox></modal>`+($O.$('#w_logs')?.html(true)||''))

		let e=await UP.sql_xt('diary')
		if(!e){
			// await UP.sql_dt('diary')
			await UP.sql_ct('diary',[
				{n:'title',tp:'TEXT',nn:true},
				{n:'content',tp:'TEXT'},
				{n:'imgs',tp:'TEXT',df:'[]'},
				{n:'files',tp:'TEXT',df:'[]'},
				{n:'tags',tp:'TEXT',df:'[]'},
				{n:'mood',tp:'TEXT'},
				{n:'weather',tp:'TEXT'},
				{n:'address',tp:'TEXT'},
				{n:'location',tp:'TEXT'}
			],['title','mood','tags','address','location','weather'])
			await UP.sql_sy(true,'diary')
		}
		log('绑定事件，节点监听')
		IX.watch()
		log('获取缓存，点击 TAB')
		let tab=$O.$(`tab>[v='${'diary_tab'.gc('statistics')}']`)
		if(!tab)tab=$O.$(`tab>[v='statistics']`)
		tab.click()
	},
}
