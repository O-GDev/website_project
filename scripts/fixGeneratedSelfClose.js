const fs = require('fs')
const path = require('path')
const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))
files.forEach(file => {
  const p = path.join(genDir, file)
  let c = fs.readFileSync(p,'utf8')
  let nc = c.replace(/<br\s*\/\s*>/g, '<br />')
  nc = nc.replace(/<([a-z]+)\s*\/\s*\/\s*>/gi, '<$1 />')
  if(nc !== c){
    fs.writeFileSync(p, nc, 'utf8')
    console.log('Fixed self-close in', file)
  }
})
console.log('Done')
