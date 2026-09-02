const fs = require('fs')
const path = require('path')

const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))

function removeBetween(str, startMarker, endMarker){
  const si = str.indexOf(startMarker)
  if (si === -1) return str
  const ei = str.indexOf(endMarker, si)
  if (ei === -1) return str
  return str.slice(0, si) + str.slice(ei + endMarker.length)
}

files.forEach(file => {
  const p = path.join(genDir, file)
  let content = fs.readFileSync(p, 'utf8')
  let changed = false

  // operate on the __html string content
  const htmlStart = content.indexOf('const __html = "')
  if (htmlStart === -1) return
  const sliceStart = htmlStart
  const rest = content.slice(htmlStart)
  // we will work inside the quoted string, so find the closing "; (end of string)
  const endQuote = rest.indexOf('\"\n  const options')
  if (endQuote === -1) return
  const htmlString = rest.slice(0, endQuote)

  let cleaned = htmlString

  // Remove preloader block
  cleaned = cleaned.replace(/<!-- preloader -->[\s\S]*?<!-- preloader end -->/gi, '')
  // Remove main header block
  cleaned = cleaned.replace(/<!-- main header -->[\s\S]*?<!-- main-header end -->/gi, '')
  // Remove Mobile Menu
  cleaned = cleaned.replace(/<!-- Mobile Menu  -->[\s\S]*?<!-- End Mobile Menu -->/gi, '')
  // Remove main-footer block
  cleaned = cleaned.replace(/<!-- main-footer -->[\s\S]*?<!-- main-footer end -->/gi, '')

  if (cleaned !== htmlString){
    changed = true
    const newContent = content.slice(0, sliceStart) + cleaned + content.slice(sliceStart + endQuote)
    fs.writeFileSync(p, newContent, 'utf8')
    console.log('Cleaned', file)
  }
})

console.log('Cleaning complete')
