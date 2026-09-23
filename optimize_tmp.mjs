import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC = 'public/assets/images';

function webp(src, dst, w, q) {
  return sharp(src).resize({ width: w, withoutEnlargement: true }).webp({ quality: q, effort: 6 }).toFile(dst);
}
function jpeg(src, q) {
  return sharp(src).jpeg({ quality: q, mozjpeg: true }).toFile(src + '.tmp').then(() => fs.renameSync(src + '.tmp', src));
}

const jobs = [
  ['banner/image1.1.png', 'banner/image1.1.webp', 1916, 82],
  ['resource/men-2.png', 'resource/men-2.webp', 820, 80],
  ['banner/holdingutility.png', 'banner/holdingutility.webp', 1536, 80],
  ['banner/holdingcard.png', 'banner/holdingcard.webp', 1536, 80],
  ['banner/utility.png', 'banner/utility.webp', 1400, 80],
  ['banner/kaizen_card_front.png', 'banner/kaizen_card_front.webp', 800, 85],
  ['banner/kaizen_card_back.png', 'banner/kaizen_card_back.webp', 800, 85],
  ['banner/cbn.png', 'banner/cbn.webp', 500, 85],
];
for (const [a, b, w, q] of jobs) {
  const src = path.join(SRC, a), dst = path.join(SRC, b);
  if (fs.existsSync(src)) await webp(src, dst, w, q);
  console.log('webp:', a, '->', b);
}
for (const f of ['banner/ourmission.jpg', 'banner/image2.1.jpg', 'banner/image3.0.jpeg']) {
  const src = path.join(SRC, f);
  if (fs.existsSync(src)) await jpeg(src, 80);
  console.log('jpeg:', f);
}
console.log('DONE');