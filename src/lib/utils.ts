import fs from 'node:fs';
import path from 'node:path';

/** Prefix an internal path with the site base (needed when hosted at /<repo>/ on GitHub Pages). */
export function url(p = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|#)/.test(p)) return p;
  return `${base}${p.startsWith('/') ? p : '/' + p}` || '/';
}

/**
 * Turns a social handle into a full link, so either form works in the settings:
 *   YouTube "@mychannel" or "mychannel"  -> https://www.youtube.com/@mychannel
 *   Instagram "myname" or "@myname"      -> https://www.instagram.com/myname/
 *   Facebook "mypage"                    -> https://www.facebook.com/mypage
 * Full links (https://...) are used as they are. Empty values return ''.
 */
export function socialHref(label: string, value: string): string {
  const v = (value || '').trim();
  if (!v) return '';
  if (/^https?:\/\//i.test(v)) return v;
  if (/^(www\.)?[a-z0-9-]+\.(com|in)\//i.test(v)) return 'https://' + v;
  const handle = v.replace(/^@/, '');
  switch (label.toLowerCase()) {
    case 'youtube': return `https://www.youtube.com/@${handle}`;
    case 'instagram': return `https://www.instagram.com/${handle}/`;
    case 'facebook': return `https://www.facebook.com/${handle}`;
    case 'x': case 'twitter': return `https://x.com/${handle}`;
    case 'linkedin': return `https://www.linkedin.com/in/${handle}`;
    case 'whatsapp channel': return `https://whatsapp.com/channel/${handle}`;
    default: return v;
  }
}

/** Keeps only social entries that have a value, with full links. */
export function socialLinks(list: { label: string; url: string }[] = []) {
  return list.map((s) => ({ label: s.label, href: socialHref(s.label, s.url) })).filter((s) => s.href);
}

/** True if a file exists under public/ (checked at build time). */
export function publicFileExists(publicPath: string): boolean {
  return fs.existsSync(path.join(process.cwd(), 'public', publicPath));
}

/**
 * Returns the best image URL for a file in public/images/<folder>/:
 * the optimized .webp made by scripts/optimize-images.mjs if present, else the original.
 * Returns null if the original is missing.
 */
export function image(folder: string, file: string): { src: string; fallback: string } | null {
  const original = `images/${folder}/${file}`;
  if (!publicFileExists(original)) return null;
  const webp = `images/_opt/${folder}/${file.replace(/\.[^.]+$/, '')}.webp`;
  return {
    src: publicFileExists(webp) ? url('/' + webp) : url('/' + original),
    fallback: url('/' + original),
  };
}
