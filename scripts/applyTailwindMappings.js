const fs = require('fs')
const path = require('path')

const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))

const mapping = {
  'auto-container': 'container mx-auto px-4',
  'outer-container': 'container mx-auto px-4',
  'form-control': 'border rounded px-3 py-2 w-full',
  'theme-btn': 'inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded',
  'btn': 'inline-block px-4 py-2 rounded',
  'row': 'flex flex-wrap -mx-2',
  'col-md-12': 'w-full px-2',
  'col-md-6': 'w-full md:w-1/2 px-2',
  'col-md-4': 'w-full md:w-1/3 px-2',
  'col-md-3': 'w-full md:w-1/4 px-2',
  'col-md-8': 'w-full md:w-2/3 px-2',
  'col-md-2': 'w-full md:w-1/6 px-2',
  'form-group': 'mb-4',
  'logo-box': 'flex items-center',
  'icon-box': 'inline-block mr-2',
  'search-form': 'w-full',
}

function mapClassNames(classValue){
  const parts = classValue.split(/\s+/).filter(Boolean)
  const out = []
  parts.forEach(p => {
    if (mapping[p]){
      out.push(mapping[p])
    } else {
      out.push(p)
    }
  })
  // flatten duplicates and normalize spacing
  return Array.from(new Set(out.join(' ').split(/\s+/))).join(' ')
}

files.forEach(file => {
  const p = path.join(genDir, file)
  let content = fs.readFileSync(p, 'utf8')

  // replace className="..."
  const regex = /className=\"([^\"]*)\"/g
  let changed = false
  content = content.replace(regex, (m, cls) => {
    const mapped = mapClassNames(cls)
    if (mapped !== cls) changed = true
    return `className=\"${mapped}\"`
  })

  if (changed){
    fs.writeFileSync(p, content, 'utf8')
    console.log('Mapped classes in', file)
  }
})

console.log('Tailwind mapping complete')
