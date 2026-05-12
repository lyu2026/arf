
// 页面唯一标识
WI=window.I=crypto.randomUUID()

window.IX={
	name:'config',observer:{},

	toggle:me=>{ // 切换开关
		const _=me.ga('k'),x=_.gc(null)=='yes'
		log(`切换状态，${_.toUpperCase()} 的当前状态: ${x?'YES':'NO'}`)
		if(x)_.dc()
		else _.sc('yes')
		if(_=='debug'){
			me.html('日志打印: '+(x?'🔴':'🟢'))
			const o=$O.$('#w_logs')
			if(x&&o)o.remove()
		}else if(_=='dark'){
			log(`深色模式，切换为 ${x?'否':'是'}`)
			$O.body[x?'da':'sa']('dark')
			me.html('深色模式: '+(x?'🔴':'🟢'))
		}
	},

	run:async()=>{ // 启动执行
		log('进入页面，自定义样式')
		$O.$('head>style[ix]').innerHTML=`
body{display:block;padding:60px 20px!important;overflow:hidden auto!important;height:auto!important}
nav{display:block;width:100%;line-height:60px;margin-bottom:26px;user-select:none}
nav>*{display:inline-block;width:auto;margin-left:20px;float:right;font-size:18px!important}
card{float:left;width:calc((2 - var(--tv)) * (50vw - 20px - var(--tv)*7px));display:block;text-align:center;margin-bottom:14px;user-select:none}
card:nth-child(2n){margin-right:calc(var(--tv) * 14px)}
card>.front,card>.back{width:inherit;transition:.5s cubic-bezier(.175,.885,.32,1.275);color:white;aspect-ratio:calc(9 / ((var(--tv)*0.5 + 1) * 1.8));padding:14px 0;border-radius:2px;background-size:cover;background-position:center}
card>.front{background-image:var(--u)}
card>.back{position:absolute!important;opacity:0;top:0;left:0;width:100%;height:100%;color:black;background-color:#eee;transform:rotateY(-180deg)}
body[dark] card>.back{color:white;background:#111}
card:hover>.front{transform:rotateY(180deg)}
card:hover>.back{opacity:1;transform:rotateY(0)}
card[v]>.back{transform:rotateX(-180deg)}
card[v]:hover>.front{transform:rotateX(180deg)}
card[v]:hover>.back{transform:rotateX(0)}
card>.back p{margin-top:8px;font-size:18px;color:#333}
body[dark] card>.back p{color:#ddd}card h1,card h2{margin:0}card h2{font-size:18px}
card h1{margin-top:8px;font-size:24px;text-shadow:2px 2px rgba(255,255,255,.18),4px 4px rgba(255,255,255,.14),6px 6px rgba(255,255,255,.1),8px 8px rgba(255,255,255,.06),10px 10px rgba(255,255,255,.02)}
`
		let i=0
		log('渲染页面，构建 DOM 树')
		$O.body.html(`<div id='o'></div>`+($O.$('#w_logs')?.html(true)||''))
		
		
		
		let o=await UP.spc_gl()
		if(!o.includes('cn'))await UP.spc_dl('cn').then(_=>log(_))
		
		await UP.spc_en('cn')
		
		UP.spc_st().then(_=>{
			log(_)
		})
		
		setTimeout(async()=>{
			await UP.spc_sp()
		},20000)
		return
		
		o=await UP.net_me_gt()
		log(o)
		o=await UP.net_jm_cs()
		log(o)
		o=await UP.net_pr_ls()
		log(o)
	},
	af:_=>{
		log(_)
	}

}
