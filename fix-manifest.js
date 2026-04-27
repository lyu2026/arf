const fs=require('fs')
let p='platforms/android/app/src/main/AndroidManifest.xml',m=fs.readFileSync(p,'utf8')
m=m.replace('<application','<application android:requestLegacyExternalStorage="true"')
fs.writeFileSync(p,m)