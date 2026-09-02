const fs = require('fs')
const path = require('path')

const genDir = path.join(__dirname, '..', 'src', 'pages', 'generated')
const files = fs.readdirSync(genDir).filter(f => f.endsWith('.jsx'))

files.forEach(file => {
  const p = path.join(genDir, file)
  let content = fs.readFileSync(p, 'utf8')

  // Convert only anchors that have href converted earlier to href="/..." -> we previously changed to absolute /paths
  // We'll replace full <a ... href="/...">...</a> blocks into <Link ... to="/...">...</Link>
  const anchorRegex = /<a([\s\S]*?)href=\"(\/[^\"#>]*)\"([\s\S]*?)>([\s\S]*?)<\/a>/gs

  let changed = false
  content = content.replace(anchorRegex, (m, beforeAttrs, href, afterAttrs, inner) => {
    // skip assets and external schemes
    if (/^\/assets\//.test(href)) return m
    if (/^(mailto:|tel:|https?:)/.test(href)) return m
    changed = true
    // merge attributes, replace href with to
    const attrs = (beforeAttrs + ' ' + afterAttrs).trim()
    return `<Link ${attrs} to=\"${href}\">${inner}</Link>`
  })

  if (!changed) return

  // ensure import Link exists
  if (!/import\s+\{?\s*Link\s*\}?\s+from\s+'react-router-dom'/.test(content)){
    content = content.replace(/import React from 'react'\n/, "import React from 'react'\nimport { Link } from 'react-router-dom'\n")
  }

  fs.writeFileSync(p, content, 'utf8')
  console.log('Converted anchors in', file)
})

console.log('Anchor conversion complete')
