const fs = require('fs')
const path = require('path')

const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))

files.forEach(file => {
  const p = path.join(genDir, file)
  let content = fs.readFileSync(p, 'utf8')

  // Replace any opening <a ...> that was not converted but has a closing </Link>
  // with a proper closing </a>
  const regex = /(<a[\s\S]*?>[\s\S]*?)<\/Link>/g
  let changed = false
  content = content.replace(regex, (m, g1) => {
    changed = true
    return g1 + '</a>'
  })

  if (changed) {
    fs.writeFileSync(p, content, 'utf8')
    console.log('Fixed mismatched Link in', file)
  }
})

console.log('Mismatched Link fixes complete')
