const fs = require('fs')
const path = require('path')

const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
if (!fs.existsSync(genDir)){
  console.error('generated dir not found:', genDir)
  process.exit(1)
}

function toJSX(html){
  let s = html
  // remove HTML comments
  s = s.replace(/<!--([\s\S]*?)-->/g, '')
  // remove inline event handlers (onclick="..." etc.) to avoid JS in JSX
  s = s.replace(/\son[a-zA-Z]+\s*=\s*\"[^"]*\"/g, '')
  s = s.replace(/\son[a-zA-Z]+\s*=\s*\'[^']*\'/g, '')
  // attributes: class -> className, for -> htmlFor, tabindex -> tabIndex
  s = s.replace(/\bclass=/g, 'className=')
  s = s.replace(/\bfor=/g, 'htmlFor=')
  s = s.replace(/\btabindex=/gi, 'tabIndex=')
  // boolean attributes (checked="checked" -> defaultChecked)
  s = s.replace(/checked=\"checked\"/gi, 'defaultChecked')
  s = s.replace(/disabled=\"disabled\"/gi, 'disabled')
  // convert common void tags to self-closing
  s = s.replace(/<br>/gi, '<br />')
  s = s.replace(/<hr>/gi, '<hr />')
  s = s.replace(/<img([^>]*)>/gi, (m, g1) => {
    if (/\/>\s*$/.test(m)) return m
    return `<img${g1} />`
  })
  s = s.replace(/<input([^>]*)>/gi, (m, g1) => {
    if (/\/>\s*$/.test(m)) return m
    return `<input${g1} />`
  })
  s = s.replace(/<meta([^>]*)>/gi, (m, g1) => `<meta${g1} />`)
  s = s.replace(/<link([^>]*)>/gi, (m, g1) => `<link${g1} />`)

  // fix self-closing duplicates
  s = s.replace(/\s+\/\>\s+\/\>/g, '/>')

  return s
}

const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))
files.forEach(file => {
  const p = path.join(genDir, file)
  let content = fs.readFileSync(p, 'utf8')
  const marker = 'const __html ='
  const pos = content.indexOf(marker)
  if (pos === -1){
    console.warn('no __html in', file)
    return
  }
  // find opening quote (JSON.stringify used double quotes)
  const openQuote = content.indexOf('"', pos)
  if (openQuote === -1){
    console.warn('no opening quote for __html in', file)
    return
  }
  // find matching closing quote handling escapes
  let i = openQuote + 1
  let closed = -1
  while(i < content.length){
    const ch = content[i]
    if (ch === '"'){
      // count backslashes before
      let bs = 0
      let j = i - 1
      while(j >= 0 && content[j] === '\\'){ bs++; j-- }
      if (bs % 2 === 0){ closed = i; break }
    }
    i++
  }
  if (closed === -1){
    console.error('could not find closing quote for __html in', file)
    return
  }
  const rawLiteral = content.slice(openQuote, closed + 1)
  let html = ''
  try{ html = JSON.parse(rawLiteral) }catch(e){
    console.error('JSON parse failed for', file, e.message)
    return
  }

  const jsx = toJSX(html)
  // remove import of parse if present
  content = content.replace(/import parse from 'html-react-parser'\n/, '')
  // Replace the function body to return JSX
  content = content.replace(/export default function ([^{(]+)\([^{]*\)\{[\s\S]*?\}\n$/, (m, name) => {
    return `export default function ${name}(){\n  return (\n    <>\n${jsx}\n    </>\n  )\n}\n`;
  })

  // Write updated content
  fs.writeFileSync(p, content, 'utf8')
  console.log('Converted', file)
})

console.log('Conversion complete:', files.length, 'files')
