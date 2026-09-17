import sharp from 'sharp'
import { resolve } from 'path'
import { rename, stat, copyFile } from 'fs/promises'

const BANNER = '/home/semicolon/Desktop/website_project/public/assets/images/banner/'
const REF = resolve(BANNER, 'executive1.jpeg')
const files = ['executive2.jpg', 'executive3.jpeg', 'executive4.jpeg', 'executive5.1.jpg', 'executive6.jpg']

const smoothstep = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)))
  return t * t * (3 - 2 * t)
}

// Build vertical beige-gradient LUT from executive1's clean edge background
const refRaw = await sharp(REF).raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H, channels: RC } = refRaw.info
const rd = refRaw.data
const edgeSample = (y) => {
  let r = 0, g = 0, b = 0, n = 0
  const y0 = Math.max(0, y - 6), y1 = Math.min(H, y + 6)
  for (let yy = y0; yy < y1; yy++) {
    for (const x of [8, 9, 10, 11, 12, 13, 14, 15, 16, W - 17, W - 16, W - 15, W - 14, W - 13, W - 12, W - 11, W - 10, W - 9]) {
      const i = (yy * W + x) * RC
      r += rd[i]; g += rd[i + 1]; b += rd[i + 2]; n++
    }
  }
  return [r / n, g / n, b / n]
}
const raw = []
for (let y = 8; y < H; y += 16) {
  const [r, g, b] = edgeSample(y)
  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  const spread = Math.max(r, g, b) - Math.min(r, g, b)
  const ok = spread <= 24 && lum >= 115 && lum <= 240 && r >= b
  raw.push({ y, c: [r, g, b], ok })
}
// use only the clean top run (subject intrudes below ~y470), then hold last value
const lut = []
let held = raw[0].c
for (const s of raw) {
  if (s.y <= 460 && s.ok) held = s.c
  lut.push({ y: s.y, c: [...held] })
}
// moving-average smooth
for (let k = 0; k < 3; k++) {
  for (let i = 1; i < lut.length - 1; i++) {
    for (let c = 0; c < 3; c++) lut[i].c[c] = (lut[i - 1].c[c] + lut[i].c[c] * 2 + lut[i + 1].c[c]) / 4
  }
}
const lutAt = (y) => {
  if (y <= lut[0].y) return lut[0].c
  for (let i = 1; i < lut.length; i++) {
    if (y <= lut[i].y) {
      const t = (y - lut[i - 1].y) / (lut[i].y - lut[i - 1].y)
      return [0, 1, 2].map((c) => lut[i - 1].c[c] * (1 - t) + lut[i].c[c] * t)
    }
  }
  return lut[lut.length - 1].c
}
console.log('exec1 bg gradient top', lutAt(8).map(Math.round).join(','), 'mid', lutAt(350).map(Math.round).join(','), 'bottom', lutAt(H - 1).map(Math.round).join(','))

for (const f of files) {
  const src = resolve(BANNER, f)
  await copyFile(src, '/tmp/' + f.replace('.', '-whitebg.'))
  const { data, info } = await sharp(src).raw().toBuffer({ resolveWithObject: true })
  const { width: w, height: h, channels: C } = info
  const out = Buffer.allocUnsafe(data.length)
  let tinted = 0
  for (let y = 0; y < h; y++) {
    const t = lutAt(Math.round((y / h) * (H - 1)))
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * C
      const d = Math.hypot(data[i] - 255, data[i + 1] - 255, data[i + 2] - 255)
      const factor = d < 90 ? 1 - smoothstep(25, 90, d) : 0
      if (factor > 0.5) tinted++
      for (let c = 0; c < 3; c++) out[i + c] = Math.round(data[i + c] * (1 - factor) + t[c] * factor)
      if (C === 4) out[i + 3] = data[i + 3]
    }
  }
  const tmp = src + '.tint.jpg'
  await sharp(out, { raw: { width: w, height: h, channels: C } }).jpeg({ quality: 92 }).toFile(tmp)
  await rename(tmp, src)
  const st = await stat(src)
  const { data: d2 } = await sharp(src).raw().toBuffer({ resolveWithObject: true })
  const corner = [d2[8 * w * C + 40 * C], d2[8 * w * C + 40 * C + 1], d2[8 * w * C + 40 * C + 2]].map(Math.round)
  console.log(`${f} tinted ${(tinted / (w * h) * 100).toFixed(1)}% corner ${corner.join(',')} ${(st.size / 1024).toFixed(0)}kB`)
}