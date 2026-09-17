import sharp from 'sharp'

const BANNER = '/home/semicolon/Desktop/website_project/public/assets/images/banner/'
const files = ['executive5.1.jpg','executive6.jpg']
const COLS = 46, ROWS = 50

const maps = []
for (const f of files) {
  const { data, info } = await sharp(BANNER + f).raw().toBuffer({ resolveWithObject: true })
  const { width: W, height: H, channels: C } = info
  const cellW = W / COLS, cellH = H / ROWS
  const grid = []
  for (let ry = 0; ry < ROWS; ry++) {
    let line = ''
    for (let rx = 0; rx < COLS; rx++) {
      let ink = 0, n = 0
      const x0 = Math.floor(rx*cellW), x1 = Math.max(x0+1, Math.floor((rx+1)*cellW))
      const y0 = Math.floor(ry*cellH), y1 = Math.max(y0+1, Math.floor((ry+1)*cellH))
      for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) {
        const i = (y*W + x)*C
        if (Math.hypot(data[i]-255, data[i+1]-255, data[i+2]-255) > 34) ink++
        n++
      }
      const r = ink/n
      line += r < 0.08 ? ' ' : r < 0.3 ? '.' : r < 0.6 ? '#' : '@'
    }
    grid.push(line)
  }
  maps.push({ f, grid, meta: `${W}x${H}` })
}

console.log(`${maps[0].f} (${maps[0].meta})  ||  ${maps[1].f} (${maps[1].meta})`)
for (let r = 0; r < ROWS; r++) console.log(maps[0].grid[r] + '  ||  ' + maps[1].grid[r])