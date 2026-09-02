const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))
let bad = []
files.forEach(file => {
  const p = path.join(genDir, file)
  const src = fs.readFileSync(p,'utf8')
  try{
    parser.parse(src, {sourceType:'module', plugins:['jsx']})
  }catch(e){
    bad.push({file, message: e.message})
  }
})
if(bad.length===0) console.log('All OK')
else{
  bad.forEach(b=>console.log(b.file + ': ' + b.message))
}
