
const licenseSN='Q90UPXa+yuf7luwHQVHMWZtNfxqp8st6HztzgsQC0OEncTaptYyDGg=='
const licenseKey='PjwcmTSwMV6sbxteo9d0mBv2NtHL7RBsoYgdKiWMZ1JrjIP8AolOMbeYQTrsCUrwlQ4EgR5qtbPOaDbsUjVKY/dDCaYfQHw1gJa2Ql0yIdf/OxXAB9DC71Dp4jdHVHNvW35yICb8kcbVQ1Ifany5zyOE04tulMVjAVKyLnebSgGTcIEa1F4cXnuNOd1rXqk5WkC5lZr0wf09zqKkod0W8dBnCYmJUpzvRVYpv5BPsMkuS/dhbdFwwT2LDcd/DJfdvIVdeZ6QSEgoCztobOImj3zhYJ9BM2gV9+QpD65uPWh3KWoTY3KhGrEF4PpgtHG4Hw+d0g7NPrN6G9Orz1AcLhCCFGnwpNowaMWf0djcvRIKxmiKRenfBpXTDEO0gPfQckxkDOr/M0grpBzThV9Zm1CgB6LLZ8SfX/nDJQ4GPYb7+WiMt82alKV7Bm7zTfIQL/wHSdtsNLE+B6IDG2uXYkHizFFX9lSPN5FM7WOWU2tG/3REFwbFrq6oz/cnEWrPeFS9DiiqEh8AvIjIzXPdeGfcvRLzXsdhW8l1FzAwggzjMvWu2RVXVOoVrUCNx7hFeeiL+kwXO+0MZFc4Q+gVJWw6HRTjbJIddjdFvIbqTMSWa82ri23E8mQKMkiZtwe5/CgAUIBcC2BT1chL47Dlu2+zx6Ry5Hzt50GXZDspLWerpNynxTS52xizNUkGNyWIAKw+iO7ee1w3fsLpoak9noUNL4lsTWmdoZrkaG4zBxMtizTcsnbsutVwAs03/bpD5xC+doki6yn1H0rooKqWAKSffCuq90S31mqrES+FX2MV3ltTKw4YDXufc8clk21fDFmTFyV9tuewpRXsbYLVMFr9oc+9rxmTFHXJ5p3BsWZbbVvH30xrgIZWKT138JX/qfQaCiSm8jiBfcgSbdGPLQQGdynZLphi7MljxfnnlME1jAUUJEa14zAPSu8Q9YgwpaM8hiyrLdNgoLs59302rzXwxXyq88DQmNE6uWxJXWV5+dGqQKwJ3upUMnFUN8VZg+1CBhllQVUQ2pElUXDgbezMPTBKjE73HqQh5KHBcbaCJdXJk2bAfU8wIAqkGP3Y59VEt5eZyHsGD3AUtitMof0nJnEpNtKmNcG4mqku59dn5+LHmmLUKFKJvxfWQmhAuNiOb/YrDFXKqEsSW7ITpx2kyVWDw9ihgLcvzabhr7cwzR3hBEexpAECRzkFNytrk7rtfdMmQ6/w48tQZETrZ3s247jVrAVanVAN0nvv88FYiQA3cMWRU7wAPfs='

function createWorker(c){
	let u=c.workerPath+"WebPDFJRWorker.js?h=0.5663618639780856&dpr="+devicePixelRatio,
		w=new Worker(u),
		p=new Promise((s,f)=>{
			w.onmessage=e=>e.data.id==="initJREngine"&&(e.data.type===0?s(e.data.params):f(e.data.params))
			w.onerror=f
		})
	w.postMessage({name:"initJREngine",params:{...c,d:location.href}})
	return{worker:w,initPromise:p}
}




// 页面唯一标识
WI=window.I=crypto.randomUUID()

window.IX={
	name:'kxwk',

	// 所有监听对象
	observer:{},


	run:()=>{
		
	},
	
}