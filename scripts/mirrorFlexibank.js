const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '..', '..', 'Flexibank')
const dest = path.resolve(__dirname, '..', 'public', 'Flexibank')

function copyRecursive(srcPath, destPath){
  if (!fs.existsSync(srcPath)){
    console.error('Source path does not exist:', srcPath)
    process.exit(1)
  }
  const stat = fs.statSync(srcPath)
  if (stat.isDirectory()){
    if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true })
    const entries = fs.readdirSync(srcPath)
    entries.forEach(e => copyRecursive(path.join(srcPath, e), path.join(destPath, e)))
  } else {
    fs.copyFileSync(srcPath, destPath)
  }
}

try{
  copyRecursive(src, dest)
  console.log('Copied', src, '→', dest)
}catch(err){
  console.error('Copy failed:', err)
  process.exit(1)
}
