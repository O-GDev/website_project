const fs = require('fs')
const path = require('path')

const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))

function cssToJsInner(css){
  const parts = css.split(';').map(p=>p.trim()).filter(Boolean)
  const obj = parts.map(p=>{
    const [k,v] = p.split(':').map(x=>x && x.trim())
    if(!k) return ''
    const camel = k.replace(/-([a-z])/g, (_,c)=>c.toUpperCase())
    let val = v || ''
    if(/^[-]?\d+(\.\d+)?$/.test(val)){
      return `${camel}: ${val}`
    }
    // ensure quotes
    val = val.replace(/'/g, "\\'")
    return `${camel}: '${val}'`
  }).filter(Boolean)
  return obj.join(', ')
}

files.forEach(file => {
  const p = path.join(genDir, file)
  let content = fs.readFileSync(p, 'utf8')
  let changed = false

  // value="..." -> defaultValue="..."
  const valueRegex = /value=("[^"]*"|'[^']*')/g
  content = content.replace(valueRegex, (m, g1) => {
    changed = true
    return `defaultValue=${g1}`
  })

  // style="k: v; ..." -> style={{k: 'v', ...}}
  const styleRegex = /style=\"([^\"]*)\"/g
  content = content.replace(styleRegex, (m, g1) => {
    const inner = cssToJsInner(g1)
    changed = true
    return `style={{${inner}}}`
  })

  if (changed){
    fs.writeFileSync(p, content, 'utf8')
    console.log('Fixed JSX attrs in', file)
  }
})

console.log('JSX attr fixes complete')
