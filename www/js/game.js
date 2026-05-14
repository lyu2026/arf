
// 页面唯一标识
WI=window.I=crypto.randomUUID()

window.IX={
	name:'game',observer:{},

	list:[],key:'',url:'https://www.novelgames.com/zh/?/pwa/iframe.php',
	sdoc:`<html><head><style>html,body,body *{background:rgba(0,0,0,1)!important;height:-webkit-fill-available;margin:0}</style></head><body><div id="holder"></div><script src="https://staticz.novelgames.com/html5games/$$"></script><script>nogic.initialize(document.getElementById("holder"),{language:"zh"},{hideMoreGamesButton:true,fullScreenElement:document.documentElement,backgroundColor:"#000000"})</script></body></html>`,

	play:me=>{
		IX.key=me.ga('k')
		$O.$('[MC]').html(BNSG)
		$O.$('[M]').da('hide').$('[MT]>div').html(me.$('div').html())
		IX.url.replace('?',IX.key).get(_=>{
			_=_.split('staticz.novelgames.com/html5games/').pop().split('"').shift()
			$O.$('[MC]').html(`${BNSG}<iframe hide crossorigin='anonymous' srcdoc='${IX.sdoc.replace('$$',_)}'></iframe>`)
			setTimeout(()=>{
				$O.$('[MC]>svg').remove()
				$O.$('[MC]>iframe').da('hide')
			},8000)
		},{},'text')
	},

	modal_close:async()=>{ // 关闭详情弹层
		CF()
		IX.key=null
		IX.wait=false
		$O.$('[M]').sa('hide','_I').$('[MT]>div').html('')
		$O.$('[MC]').html('')
		$O.body.da('ns')
	},

	run:()=>{ // 启动执行
		log('进入页面，自定义样式')
		$O.$('head>style[ix]').innerHTML=`
body{display:flex!important;padding:0!important}
body [G]{margin-top:18px}
body [GC]{display:flex;flex-direction:column;height:auto}
body [GC]>img{display:block;width:60%;height:60%;margin:14% 20% 5% 20%;object-fit:contain;aspect-ratio:1}
body [GC]>div{height:auto;line-height:24px;font-size:16px;text-align:center}
body [MC]>svg{display:block;width:30vw;height:30vw;margin:40vh auto 0 auto}
`
		const render=()=>{
			log('渲染页面，构建 DOM 树')
			let o=`<div G>${IX.list.map(_=>`<div GC k='${_.key}' onclick='run("IX","play",WI)(this)' tabindex='0'><img crossorigin='anonymous' src='https://staticz.novelgames.com/games/${_.key}/icon100.webp'/><div>${_.val}</div></div>`).join('')}</div><div M hide><div MB><div MT><div></div>`
			o+=`<icc onclick='run("IX","modal_close",WI)()' tabindex='0'>╳</icc>`
			o+=`</div><div MC></div></div></div>`
			$O.$$('body>*:not(#w_logs)').forEach(_=>_.remove())
			$O.body.html(o+($O.$('#w_logs')?.html(true)||''))
			log('获取记忆，开始筛选')
		}

		log('获取记忆，分类数据')
		IX.list='game_list'.gc([])
		if(IX.list.length>0)return render()

		log('获取失败，重新拉取分类数据')
		const K=IX.key=crypto.randomUUID()
		'https://www.novelgames.com/zh/sitemap/'.get(o=>{
			if(!o||K!=IX.key)return
			o.$$('#sitemapGames>a').forEach(_=>{
				const key=_.href.split('/zh/').pop().split('/').shift(),val=_.html()
				IX.list.push({key,val})
			})
			'game_list'.sc(IX.list)
			log('拉取成功，缓存列表数据')
			render()
		},{},'html')
	},
}
