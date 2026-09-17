import sharp from 'sharp'
import { resolve } from 'path'
import { rename } from 'fs/promises'

const BANNER = '/home/semicolon/Desktop/website_project/public/assets/images/banner/'
const SRC = BANNER + '_originals/'

// Crop windows computed from the un-reframed 640x705 sources so that
// executive5.1 and executive6 end up with the same head width (~200px),
// same headroom (~10%) and same shoulder line (~58%) - one consistent frame.
const jobs = [
  { file: 'executive5.1.jpg', left: 106, top: 0, width: 448, height: 493 },
  { file: 'executive6.jpg', left: 134, top: 8, width: 388, height: 427 }
]

for (const j of jobs) {
  const src = resolve(SRC, j.file)
  const dst = resolve(BANNER, j.file)
  const tmp = dst + '.r.jpg'
  await sharp(src)
    .extract({ left: j.left, top: j.top, width: j.width, height: j.height })
    .resize(640, 705, { fit: 'cover', kernel: 'lanczos3' })
    .jpeg({ quality: 92, mozjpeg: false })
    .toFile(tmp)
  await rename(tmp, dst)
  const meta = await sharp(dst).metadata()
  console.log(`${j.file}  crop ${j.width}x${j.height}@(${j.left},${j.top}) zoom ${(640/j.width).toFixed(2)}x -> ${meta.width}x${meta.height}`)
}