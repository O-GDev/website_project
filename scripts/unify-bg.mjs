import sharp from 'sharp'
import { resolve } from 'path'

const BANNER = '/home/semicolon/Desktop/website_project/public/assets/images/banner/'
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['executive1.jpeg','executive2.jpg','executive3.jpeg','executive4.jpeg','executive5.1.jpg','executive6.jpg']

const WHITE = [255, 255, 255]

function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)))
  return t * t * (3 - 2 * t)
}

async function globalBg(src, W, H, C, strip = 48) {
  const { data } = await sharp(src).raw().toBuffer({ resolveWithObject: true })
  const r = [], g = [], b = []
  for (let y = 0; y < strip; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * C
      // ignore near-black (hair reaching top) and near-white already
      const lum = 0.299*data[i] + 0.587*data[i+1] + 0.114*data[i+2]
      if (lum < 60 || lum > 254) continue
      r.push(data[i]); g.push(data[i+1]); b.push(data[i+2])
    }
  }
  const med = (arr) => {
    arr.sort((a,b)=>a-b)
    return arr.length ? arr[arr.length >> 1] : 250
  }
  return [med(r), med(g), med(b)]
}

for (const f of files) {
  const src = resolve(BANNER, f)
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true })
  const { width: W, height: H, channels: C } = info
  const count = W * H

  const bgC = await globalBg(src, W, H, C)

  const isBg = new Uint8Array(count)
  for (let i = 0, p = 0; i < data.length; i += C, p++) {
    const dr = data[i] - bgC[0]
    const dg = data[i+1] - bgC[1]
    const db = data[i+2] - bgC[2]
    const dToBg = Math.sqrt(dr*dr + dg*dg + db*db)
    const dw = Math.hypot(data[i]-255, data[i+1]-255, data[i+2]-255)
    isBg[p] = dToBg < 60 || dw < 26 ? 1 : 0
  }

  const filled = new Uint8Array(count)
  const queue = []
  const push = (p) => { if (filled[p]) return; filled[p] = 1; queue.push(p) }
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if ((x === 0 || y === 0 || x === W-1 || y === H-1) && isBg[y*W+x]) push(y*W+x)
  }
  for (let q = 0; q < queue.length; q++) {
    const p = queue[q]
    const x = p % W, y = (p / W) | 0
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
      if (!dy && !dx) continue
      const nx = x + dx, ny = y + dy
      if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue
      const np = ny * W + nx
      if (isBg[np]) push(np)
    }
  }

  const out = Buffer.allocUnsafe(data.length)
  let floodPx = 0
  for (let i = 0, p = 0; i < data.length; i += C, p++) {
    if (filled[p]) {
      const dr = data[i] - bgC[0]
      const dg = data[i+1] - bgC[1]
      const db = data[i+2] - bgC[2]
      const dToBg = Math.sqrt(dr*dr + dg*dg + db*db)
      const factor = 1 - smoothstep(55, 95, dToBg)
      if (factor > 0.5) floodPx++
      for (let c = 0; c < 3; c++) out[i+c] = Math.round(data[i+c] * (1 - factor) + WHITE[c] * factor)
    } else {
      out[i] = data[i]; out[i+1] = data[i+1]; out[i+2] = data[i+2]
    }
    if (C === 4) out[i+3] = data[i+3]
  }

  const tmp = resolve(BANNER, f + '.new.jpg')
  await sharp(out, { raw: { width: W, height: H, channels: C } }).jpeg({ quality: 92, mozjpeg: false }).toFile(tmp)
  const { rename, stat } = await import('fs/promises')
  await rename(tmp, src)
  const st = await stat(src)

  const { data: d } = await sharp(src).raw().toBuffer({ resolveWithObject: true })
  let sum = 0, cnt = 0, nearWhite = 0
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const onBorder = x < 6 || y < 6 || x > W - 7 || y > H - 7
    if (!onBorder) continue
    const i = (y * W + x) * C
    const dist = Math.hypot(d[i]-255, d[i+1]-255, d[i+2]-255)
    sum += dist; cnt++
    if (dist < 12) nearWhite++
  }

  console.log(`${f}  bg[${bgC.join(',')}]  whiten ${(floodPx/ count * 100).toFixed(0)}%  border→white avg ${(sum/cnt).toFixed(1)}  near-white ${(nearWhite/cnt*100).toFixed(1)}%  ${(st.size/1024).toFixed(0)}kB`)
}