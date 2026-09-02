const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '..', 'src', 'pages')
const outDir = path.join(srcDir, 'generated')
const flexibankDir = path.join(__dirname, '..', '..', 'Flexibank')

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const files = fs.readdirSync(flexibankDir).filter(f => f.endsWith('.html'))

function toComponentName(name){
  let base = path.basename(name, '.html')
  base = base.replace(/[^a-zA-Z0-9_$]/g, '_')
  if (/^[0-9]/.test(base)) base = '_' + base
  return base[0].toUpperCase() + base.slice(1)
}

const routes = []

files.forEach(file => {
  const full = path.join(flexibankDir, file)
  const html = fs.readFileSync(full, 'utf8')
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const body = bodyMatch ? bodyMatch[1] : html
  const compName = toComponentName(file)
  const compPath = path.join(outDir, compName + '.jsx')
  // strip script tags (we will not inline scripts into React components)
  let stripped = body.replace(/<script[\s\S]*?<\/script>/gi, '')

  // Remove known template blocks (preloader, header, mobile menu, footer) that will be provided by React chrome
  stripped = stripped.replace(/<!--\s*preloader\s*-->[\s\S]*?<!--\s*preloader end\s*-->/gi, '')
  stripped = stripped.replace(/<!--\s*main header\s*-->[\s\S]*?<!--\s*main-header end\s*-->/gi, '')
  stripped = stripped.replace(/<!--\s*Mobile Menu\s*-->[\s\S]*?<!--\s*End Mobile Menu\s*-->/gi, '')
  stripped = stripped.replace(/<!--\s*main-footer\s*-->[\s\S]*?<!--\s*main-footer end\s*-->/gi, '')

  // remove HTML comments (leftover)
  stripped = stripped.replace(/<!--([\s\S]*?)-->/g, '')

  // convert attributes: class -> className, for -> htmlFor
  stripped = stripped.replace(/\sclass=/g, ' className=')
  stripped = stripped.replace(/\sfor=/g, ' htmlFor=')

  // ensure void elements are self-closed: img, input, br, hr, meta, link
  stripped = stripped.replace(/<(img|input|br|hr|meta|link)([^>]*)>/gi, '<$1$2 />')

  // convert inline style strings to JSX style object hints (keep string; fix script later if needed)
  // replace value="..." with defaultValue="..." (also handled by fixJSXAttrs)

  // convert local .html links into react-router <Link> elements
  stripped = stripped.replace(/<a([^>]*?)href=("|')(.*?\.html)("|')([^>]*)>([\s\S]*?)<\/a>/gi, (m, p1, q1, href, q2, p2, inner) => {
    const route = href === 'index.html' ? '/' : '/' + href.replace('.html','')
    return `<Link to=\"${route}\">${inner}</Link>`
  })

  // For leftover anchors (external or anchors), keep as-is.

  // wrap with a fragment so JSX can return it directly
  const component = `import React from 'react'
import { Link } from 'react-router-dom'

export default function ${compName}(){
  return (
    <>
${stripped}
    </>
  )
}
`
  fs.writeFileSync(compPath, component, 'utf8')

  // determine route path: index.html -> /, others -> /name (without .html)
  let routePath = '/' + path.basename(file, '.html')
  if (file === 'index.html') routePath = '/'
  routes.push({ compName, compRel: `./generated/${compName}.jsx`, routePath })
})

// write generatedRoutes.jsx
const routesFile = path.join(srcDir, 'generatedRoutes.jsx')
let importLines = ''
let routeLines = ''
routes.forEach(r => {
  importLines += `import ${r.compName} from '${r.compRel}'\n`
  routeLines += `        <Route path="${r.routePath}" element={<${r.compName} />} />\n`
})

const routesContent = `import React from 'react'
import { Routes, Route } from 'react-router-dom'
${importLines}

export default function GeneratedRoutes(){
  return (
    <Routes>
${routeLines}    </Routes>
  )
}
`

fs.writeFileSync(routesFile, routesContent, 'utf8')

console.log('Generated', routes.length, 'pages in', outDir)
