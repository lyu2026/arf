const fs=require('fs'),p=require('path')

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

	// 注入manifest
	const s=fs.readFileSync(m,'utf8')
	if(!s.includes('networkSecurityConfig'))fs.writeFileSync(m,s.replace('<application','<application android:networkSecurityConfig="@xml/cors"'))
	if(!s.includes('android.software.leanback'))fs.writeFileSync(m,s.replace('<application','<uses-feature android:name="android.software.leanback" android:required="false"/>\n<uses-feature android:name="android.hardware.touchscreen" android:required="false"/>\n<application'))

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