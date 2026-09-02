const fs = require('fs')
const path = require('path')

const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))

files.forEach(file => {
  const p = path.join(genDir, file)
  let content = fs.readFileSync(p, 'utf8')
  // make asset paths absolute to /assets
  content = content.replace(/src=\"assets\//g, 'src="/assets/')
  content = content.replace(/src=\'assets\//g, "src='/assets/")
  content = content.replace(/href=\"assets\//g, 'href="/assets/')
  content = content.replace(/href=\'assets\//g, "href='/assets/")
  // convert .html links to React routes: index.html -> /, others -> /name
  content = content.replace(/href=\"index\.html\"/g, 'href="/"')
  content = content.replace(/href=\'index\.html\'/g, "href='/'")
  content = content.replace(/href=\"([^\"]+)\.html\"/g, (m, g1) => {
    if (g1 === 'index') return 'href="/"'
    return `href="/${g1.replace(/\\s+/g, '-') }"`
  })
  content = content.replace(/href=\'([^\']+)\.html\'/g, (m, g1) => {
    if (g1 === 'index') return "href='/'"
    return `href='/${g1.replace(/\s+/g, '-') }'`
  })

  fs.writeFileSync(p, content, 'utf8')
  console.log('Fixed paths in', file)
})

console.log('Path fixes complete:', files.length, 'files')
