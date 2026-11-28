// Builds the link-preview images (what WhatsApp, Facebook, LinkedIn etc. show when the site is shared).
// Output: public/images/share/*.jpg (1200x630). Run after changing a cover:  node scripts/make-share-images.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const W = 1200, H = 630;
const src = (f) => `public/images/books/${f}`;
const out = 'public/images/share';
mkdirSync(out, { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const serif = "Georgia, 'Times New Roman', serif";
const sans = "'Segoe UI', Arial, sans-serif";

// A cover resized to a given height, with a soft drop shadow.
async function cover(file, h) {
  const img = await sharp(src(file)).resize({ height: h }).toBuffer();
  const { width: w } = await sharp(img).metadata();
  return { img, w, h };
}
function shadow(x, y, w, h, opacity) {
  return `<rect x="${x + 8}" y="${y + 14}" width="${w}" height="${h}" rx="4" fill="#000" opacity="${opacity}" filter="url(#b)"/>`;
}
const defs = `<defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter></defs>`;

function lines(arr, x, y, gap, attrs) {
  return arr.map((t, i) => `<text x="${x}" y="${y + i * gap}" ${attrs}>${esc(t)}</text>`).join('');
}

async function render(name, bg, svgBody, covers) {
  const svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">${defs}<rect width="100%" height="100%" fill="${bg}"/>${svgBody}</svg>`;
  await sharp(Buffer.from(svg))
    .composite(covers.map((c) => ({ input: c.img, left: c.x, top: c.y })))
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(`${out}/${name}.jpg`);
  console.log(`share image: ${name}.jpg`);
}

// --- Home: name + line + both covers ---
{
  const ch = 380;
  const p = await cover('patterns-cover.png', ch);
  const w = await cover('wisdom-cover.png', ch);
  const y = (H - ch) / 2 - 5;
  const gap = 32, px = W - 70 - (p.w + gap + w.w), wx = px + p.w + gap;
  const body =
    `<rect x="0" y="${H - 10}" width="${W}" height="10" fill="#C9A54C"/>` +
    `<text x="80" y="190" font-family="${serif}" font-size="30" letter-spacing="9" fill="#8C6E4F">ANKIT JAIN</text>` +
    lines(['Making complex', 'things simple.'], 80, 285, 70, `font-family="${serif}" font-size="58" fill="#191714"`) +
    lines(['Author of Patterns in the Noise', 'and co-author of The Wisdom', 'of Everyday Life'], 80, 430, 38, `font-family="${sans}" font-size="26" fill="#6B6358"`) +
    shadow(px, y, p.w, p.h, 0.35) + shadow(wx, y, w.w, w.h, 0.25);
  await render('home', '#FAF7F2', body, [{ ...p, x: px, y }, { ...w, x: wx, y }]);
}

// --- Patterns in the Noise: black + gold ---
{
  const c = await cover('patterns-cover.png', 500);
  const x = 110, y = (H - 500) / 2;
  const body =
    shadow(x, y, c.w, c.h, 0.8) +
    `<text x="530" y="190" font-family="${sans}" font-size="22" letter-spacing="6" fill="#A79E89">A BOOK BY ANKIT JAIN</text>` +
    lines(['Patterns in', 'the Noise'], 530, 290, 84, `font-family="${serif}" font-size="76" fill="#E4C978"`) +
    lines(['Unveiling market secrets', 'with technical indicators'], 530, 450, 40, `font-family="${sans}" font-size="28" fill="#E9E1CC"`) +
    `<rect x="530" y="510" width="80" height="3" fill="#C9A54C"/>`;
  await render('patterns-in-the-noise', '#0F0F0F', body, [{ ...c, x, y }]);
}

// --- The Wisdom of Everyday Life: ivory ink ---
{
  const c = await cover('wisdom-cover.png', 500);
  const x = 110, y = (H - 500) / 2;
  const body =
    shadow(x, y, c.w, c.h, 0.3) +
    `<text x="530" y="180" font-family="${sans}" font-size="22" letter-spacing="6" fill="#8C6E4F">RAKESH KUMAR JAIN · ANKIT JAIN</text>` +
    lines(['The Wisdom of', 'Everyday Life'], 530, 280, 80, `font-family="${serif}" font-size="70" fill="#1E1A16"`) +
    lines(['Practical principles', 'for peaceful living'], 530, 440, 40, `font-family="${sans}" font-size="28" fill="#655B4F"`) +
    `<rect x="530" y="500" width="80" height="3" fill="#8C6E4F"/>`;
  await render('wisdom-of-everyday-life', '#FBF8F2', body, [{ ...c, x, y }]);
}
