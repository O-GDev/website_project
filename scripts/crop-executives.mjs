import sharp from 'sharp'
import { resolve } from 'path'

const BANNER = '/home/semicolon/Desktop/website_project/public/assets/images/banner/'

const files = [
  'executive1.jpeg',
  'executive2.jpg',
  'executive3.jpeg',
  'executive4.jpeg',
  'executive5.1.jpg',
  'executive6.jpg'
]

const W = 640
const H = 705

for (const file of files) {
  const src = resolve(BANNER, file)
  const tmp = resolve(BANNER, file + '.new.jpg')
  const meta = await sharp(src).metadata()
  await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 88, mozjpeg: false })
    .toFile(tmp)
  await import('fs/promises').then(async ({ rename }) => {
    await rename(tmp, src)
  })
  const out = await sharp(src).metadata()
  console.log(`${file}  ${meta.width}x${meta.height} -> ${out.width}x${out.height}  ${out.format}  ${(out.size / 1024).toFixed(0)} kB`)
}