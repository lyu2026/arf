
// 页面唯一标识
WI=window.I=crypto.randomUUID()

window.IX={
	name:'home',

	// 所有监听对象
	observer:{},

	cards:[ // 所有页面
		{key:'ole',name:'欧乐视频',title:'数据来源',brief:'www.olehdtv.com'},
		{key:'ayf',name:'爱一帆',title:'数据来源',brief:'m.yfsp.tv'},
	],

	toggle:me=>{ // 切换开关
		const _=me.ga('k'),x=_.gc(null)=='yes'
		log(`切换状态，${_.toUpperCase()} 的当前状态: ${x?'YES':'NO'}`)
		if(x)_.dc()
		else _.sc('yes')
		if(_=='debug'){
			me.html('打印日志: '+(x?'🙈':'👁️'))
			const o=$O.$('#w_logs')
			if(x&&o)o.remove()
		}else if(_=='dark'){
			log(`主题模式，切换为 ${x?'浅色':'深色'}模式`)
			$O.body[x?'da':'sa']('dark')
			me.html('主题模式: '+(x?'🌝':'🌚'))
		}
	},

 goto:me=>{ // 页面跳转
	setTimeout(()=>{
			const js=`${me.ga('K')}.js`
			log(`载入脚本 ${js.toUpperCase()}`)
			$O.head.appendChild($O.node('script',{ix:'',src:`./js/${js}?_=${crypto.randomUUID()}`,onload:()=>{
				log(`脚本已载，初始自定义样式以及脚本，页面填充骨架图`)
				$O.$('head>style[ix]').innerHTML=''
				$O.$$('head>script[ix]').forEach(_=>_.remove())
				const sk=`<sk w100 p20 pt60 f fv g4><sk n h40></sk><sk n h24></sk><sk n h24></sk><sk n h24></sk><sk b h8 w70></sk><sk b w50 h8></sk><br><br><sk f1 x3><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk><sk q h130></sk></sk></sk>`
				$O.body.html(sk+($O.$('#w_logs')?.html(true)||''))
				log(`运行脚本，打开页面`)
				IX.run()
			},onerror:()=>log(`脚本文件 ${js} 不存在`,'error')}))
		},200)
 },

	run:()=>{ // 启动执行
		log('进入页面，自定义样式')
		$O.$('head>style[ix]').innerHTML=`
body{padding:70px 30px 30px 30px;overflow:hidden auto!important}
nav{position:sticky;top:70px;display:inline-block;width:100%;line-height:60px;margin-bottom:40px;user-select:none}
nav>*{display:inline-block;width:auto;margin-left:20px;float:right}
card{display:block;text-align:center;margin-bottom:14px;user-select:none}
card:last-child{margin-bottom:0}
card>.front,card>.back{width:inherit;transition:.5s cubic-bezier(.175,.885,.32,1.275);color:white;aspect-ratio:7/3;padding:1em 2em;border-radius:10px;background-size:cover;background-position:center}
card>.front{transform:rotateY(0)}
card>.back{position:absolute!important;opacity:0;top:0;left:0;width:100%;height:100%;color:black;background-color:#bbb;transform:rotateY(-180deg)}
body[dark] card>.back{color:white;background:#555}
card:hover>.front{transform:rotateY(180deg)}
card:hover>.back{opacity:1;transform:rotateY(0)}
card[v]>.back{transform:rotateX(-180deg)}
card[v]:hover>.front{transform:rotateX(180deg)}
card[v]:hover>.back{transform:rotateX(0)}
card>.back p{font-size:18px;line-height:3.5;color:#333}card h2{font-size:20px}
body[dark] card>.back p{color:#ddd}
card h1{font-size:26px;text-shadow:1px 1px rgba(0,0,0,.04),2px 2px rgba(0,0,0,.04),3px 3px rgba(0,0,0,.04),4px 4px rgba(0,0,0,.04),.125rem .125rem rgba(0,0,0,.04),6px 6px rgba(0,0,0,.04),7px 7px rgba(0,0,0,.04),8px 8px rgba(0,0,0,.04),9px 9px rgba(0,0,0,.04),.3125rem .3125rem rgba(0,0,0,.04),11px 11px rgba(0,0,0,.04),12px 12px rgba(0,0,0,.04),13px 13px rgba(0,0,0,.04),14px 14px rgba(0,0,0,.04),.625rem .625rem rgba(0,0,0,.04),16px 16px rgba(0,0,0,.04),17px 17px rgba(0,0,0,.04),18px 18px rgba(0,0,0,.04),19px 19px rgba(0,0,0,.04),1.25rem 1.25rem rgba(0,0,0,.04)}
`
		let o=[`<nav><div k='debug' onclick='run("IX","toggle",WI)(this)'>打印日志: ${'debug'.gc(null)=='yes'?'👁️':'🙈'}</div><div k='dark' onclick='run("IX","toggle",WI)(this)'>主题模式: ${'dark'.gc(null)=='yes'?'🌚':'🌝'}</div></nav>`],i=0
		for(let {key,name,title,brief} of IX.cards)o.push(`<card${(i++)%2<1?' v':''} onclick='run("IX","goto",WI)(this)' K='${key}'><div class='front' style='background-image:url(./img/${key}.jpg)'><h1>${name}</h1></div><div class='back'><h2>${title}</h2><p>${brief}</p></div></card>`)
		log('渲染页面，构建 DOM 树')
		$O.body.html(o.join('')+($O.$('#w_logs')?.html(true)||''))
	},

}

IX.run()
