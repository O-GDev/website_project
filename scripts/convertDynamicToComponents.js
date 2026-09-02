const fs = require('fs')
const path = require('path')

function replaceAllTagPairs(content, clsMatch, newTag){
  let out = content
  let loop = 0
  while(true){
    loop++
    if(loop>200) break
    const openMatch = out.match(new RegExp(`<div[^>]*className=["'][^"']*${clsMatch}[^"']*["'][^>]*>`))
    if(!openMatch) break
    const openIdx = openMatch.index
    const openTagStart = out.lastIndexOf('<', openIdx)
    const openTagEnd = out.indexOf('>', openIdx)
    if (openTagStart === -1 || openTagEnd === -1) break
    let idx = openTagEnd + 1
    let depth = 1
    while(idx < out.length){
      const nextOpen = out.indexOf('<div', idx)
      const nextClose = out.indexOf('</div>', idx)
      if(nextClose === -1) break
      if(nextOpen !== -1 && nextOpen < nextClose){ depth++; idx = nextOpen + 4; continue }
      depth--
      idx = nextClose + 6
      if(depth === 0){
        const before = out.slice(0, openTagStart)
        const openTag = out.slice(openTagStart, openTagEnd+1)
        const inner = out.slice(openTagEnd+1, nextClose)
        const after = out.slice(nextClose+6)
        const newOpen = openTag.replace(/^<div/, `<${newTag}`)
        const newClose = `</${newTag}>`
        out = before + newOpen + inner + newClose + after
        break
      }
    }
  }
  return out
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
  // replace banner-carousel and any owl-carousel variants
  content = replaceAllTagPairs(content, 'banner-carousel', 'Carousel')
  content = replaceAllTagPairs(content, 'owl-carousel', 'Carousel')
  // replace tabs-box and tab-btn-carousel
  content = replaceAllTagPairs(content, 'tabs-box', 'Tabs')
  content = replaceAllTagPairs(content, 'tab-btn-carousel', 'Tabs')
  // replace selects
  content = replaceSelects(content)

  if(content !== before){
    fs.writeFileSync(p, content, 'utf8')
    console.log('Patched', file)
  }
})

console.log('Done')
