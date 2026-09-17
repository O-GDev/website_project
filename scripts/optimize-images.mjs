import sharp from 'sharp'
import { resolve, basename } from 'path'
import { rm } from 'fs/promises'

const BANNER = '/home/semicolon/Desktop/Kaizenbank Pack/frontend/public/assets/images/banner/'
const SHAPE = '/home/semicolon/Desktop/Kaizenbank Pack/frontend/public/assets/images/shape/'
const PARTNERS = '/home/semicolon/Desktop/Kaizenbank Pack/frontend/public/assets/images/partners/'

const bannerToWebp = [
  { src: 'image1.jpeg', width: 1920 },
  { src: 'image2.jpeg', width: 1920 },
  { src: 'image3.3.png', width: 1920 },
  { src: 'ATM.png', width: 1920 },
  { src: 'ATM machine.png', width: 900 },
]

const shapesToRecompress = [
  'shape-1.png', 'shape-3.png', 'shape-5.png', 'shape-6.png',
  'shape-12.png', 'shape-30.png', 'shape-32.png', 'shape-33.png',
  'shape-38.png', 'shape-46.png',
]

let totalBefore = 0
let totalAfter = 0

for (const { src, width } of bannerToWebp) {
  const out = resolve(BANNER, src.replace(/\.[^.]+$/, '.webp'))
  const meta = await sharp(resolve(BANNER, src)).metadata()
  totalBefore += (await (await sharp(resolve(BANNER, src))).toBuffer()).length
  await sharp(resolve(BANNER, src))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out)
  const after = (await sharp(out).metadata()).size
  totalAfter += after
  console.log(`${src} -> ${basename(out)}  dimensions ${meta.width}x${meta.height}  ${fmt(after)}`)
}

for (const name of shapesToRecompress) {
  const file = resolve(SHAPE, name)
  const before = (await (await sharp(file)).toBuffer()).length
  const tmp = resolve(SHAPE, name + '.tmp')
  await sharp(file)
    .png({ palette: true, quality: 90, compressionLevel: 9 })
    .toFile(tmp)
  totalBefore += before
  const after = (await sharp(tmp).metadata()).size
  totalAfter += after
  await rm(tmp)
  console.log(`${name}  ${fmt(before)} -> ${fmt(after)}`)
}

const sterling = resolve(PARTNERS, 'Sterling_bank_logo_wk.png')
const sBefore = (await (await sharp(sterling)).toBuffer()).length
const sTmp = resolve(PARTNERS, 'Sterling_bank_logo_wk.png.tmp')
await sharp(sterling)
  .png({ palette: true, quality: 95, compressionLevel: 9 })
  .toFile(sTmp)
totalBefore += sBefore
const sAfter = (await sharp(sTmp).metadata()).size
totalAfter += sAfter
await rm(sTmp)
console.log(`Sterling_bank_logo_wk.png  ${fmt(sBefore)} -> ${fmt(sAfter)}`)

console.log(`\nTOTAL  ${fmt(totalBefore)} -> ${fmt(totalAfter)}  (${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% smaller)`)

function fmt(b) {
  return (b / 1048576).toFixed(2) + ' MB'
}