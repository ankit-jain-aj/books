// Makes web-sized .webp copies of photos and covers so pages load fast.
// Input:  public/images/authors/*, public/images/books/*
// Output: public/images/_opt/<folder>/<name>.webp  (max 1000px on the long side)
// Runs automatically before `npm run dev` and `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('public/images');
const folders = ['authors', 'books'];
const MAX = 1000;

for (const folder of folders) {
  const dir = path.join(root, folder);
  if (!fs.existsSync(dir)) continue;
  const outDir = path.join(root, '_opt', folder);
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of fs.readdirSync(dir)) {
    if (!/\.(jpe?g|png|webp)$/i.test(file)) continue;
    const src = path.join(dir, file);
    const out = path.join(outDir, file.replace(/\.[^.]+$/, '') + '.webp');
    if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) continue;
    await sharp(src).rotate().resize(MAX, MAX, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    console.log('optimized', `${folder}/${file}`);
  }
}
