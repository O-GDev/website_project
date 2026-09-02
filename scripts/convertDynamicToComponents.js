const fs = require('fs')
const path = require('path')

function replaceTagPair(content, clsMatch, newTag){
  const openIdx = content.search(new RegExp(`<div[^>]*className=["'][^"']*${clsMatch}[^"']*["'][^>]*>`))
  if (openIdx === -1) return content
  const openTagStart = content.lastIndexOf('<', openIdx)
  const openTagEnd = content.indexOf('>', openIdx)
  if (openTagStart === -1 || openTagEnd === -1) return content
  // find matching closing </div>
  let idx = openTagEnd + 1
  let depth = 1
  while(idx < content.length){
    const nextOpen = content.indexOf('<div', idx)
    const nextClose = content.indexOf('</div>', idx)
    if(nextClose === -1) break
    if(nextOpen !== -1 && nextOpen < nextClose){ depth++; idx = nextOpen + 4; continue }
    depth--
    idx = nextClose + 6
    if(depth === 0){
      // replace opening tag name
      const before = content.slice(0, openTagStart)
      const openTag = content.slice(openTagStart, openTagEnd+1)
      const inner = content.slice(openTagEnd+1, nextClose)
      const after = content.slice(nextClose+6)
      const newOpen = openTag.replace(/^<div/, `<${newTag}`)
      const newClose = `</${newTag}>`
      return before + newOpen + inner + newClose + after
    }
  }
  return content
}

function replaceSelects(content){
  // simple replace for select opening with className containing wide
  content = content.replace(/<select([^>]*)className=["'][^"']*wide[^"']*["']([^>]*)>/g, '<NiceSelect$1$2>')
  content = content.replace(/<\/select>/g, '</NiceSelect>')
  return content
}

const dir = path.join(__dirname, '../src/pages/generated')
const files = fs.readdirSync(dir).filter(f=>f.endsWith('.jsx'))
files.forEach(file => {
  const p = path.join(dir, file)
  let content = fs.readFileSync(p,'utf8')
  let changed = false
  const before = content
  // replace banner-carousel
  content = replaceTagPair(content, 'banner-carousel', 'Carousel')
  // replace tabs-box
  content = replaceTagPair(content, 'tabs-box', 'Tabs')
  // replace any tab-btn-carousel containers (sometimes tab-btns are separate carousels)
  content = replaceTagPair(content, 'tab-btn-carousel', 'Tabs')
  // replace selects
  content = replaceSelects(content)

  if(content !== before){
    fs.writeFileSync(p, content, 'utf8')
    console.log('Patched', file)
  }
})

console.log('Done')
