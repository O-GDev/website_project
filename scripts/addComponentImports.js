const fs = require('fs')
const path = require('path')

const dir = path.join(__dirname, '../src/pages/generated')
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.jsx'))
files.forEach(file => {
  const p = path.join(dir, file)
  let content = fs.readFileSync(p,'utf8')
  let lines = content.split('\n')
  const firstNonImport = lines.findIndex(l => !l.startsWith('import') && l.trim() !== '')
  const headerIdx = firstNonImport === -1 ? 0 : firstNonImport
  let added = false
  if(content.includes('<Carousel') && !content.includes("import Carousel") ){
    lines.splice(headerIdx,0,"import Carousel from '../../components/ui/Carousel'")
    added = true
  }
  if(content.includes('<Tabs') && !content.includes("import Tabs") ){
    lines.splice(headerIdx,0,"import Tabs from '../../components/ui/Tabs'")
    added = true
  }
  if(content.includes('<NiceSelect') && !content.includes("import NiceSelect") ){
    lines.splice(headerIdx,0,"import NiceSelect from '../../components/ui/NiceSelect'")
    added = true
  }
  if(added){
    fs.writeFileSync(p, lines.join('\n'), 'utf8')
    console.log('Added imports to', file)
  }
})
console.log('Done')
