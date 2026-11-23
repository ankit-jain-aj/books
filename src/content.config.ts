import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const link = z.object({ label: z.string(), url: z.string() });

/** One file per book in src/content/books/. The file body is the "About the book" text. */
const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tagline: z.string().optional(),
    category: z.string(),                    // e.g. "Markets", "Everyday Wisdom"
    theme: z.enum(['noir-gold', 'ivory-ink']), // visual mood of the book page
    order: z.number(),                       // position on the home page (1 = first)
    authors: z.array(z.string()),            // author ids from src/content/authors
    cover: z.string(),                       // file in public/images/books/
    art: z.string().optional(),              // optional decorative image
    hook: z.string(),                        // one/two-line summary for the home page
    published: z.string().optional(),        // e.g. "2025"
    isbn: z.string().optional(),
    buy: z.array(link),
    signedCopies: z.boolean().default(true),  // show the "Order a signed copy" button
    social: z.array(link).default([]),         // this book's own social accounts (handle or full link)

    discover: z.object({ title: z.string(), items: z.array(z.string()) }),
    quote: z.string().optional(),
    feature: z.object({
      title: z.string(),
      intro: z.string().optional(),
      style: z.enum(['compact', 'cards']),
      items: z.array(z.object({ title: z.string(), text: z.string().optional() })),
      note: z.string().optional(),
    }).optional(),
    resources: z.array(z.object({ title: z.string(), text: z.string(), label: z.string(), url: z.string() })).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    disclaimer: z.string().optional(),
  }),
});

/** One file per author in src/content/authors/. The file body is the full bio. */
const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    initials: z.string(),
    photo: z.string(),        // file name in public/images/authors/
    order: z.number(),
    isMain: z.boolean().default(false),
    short: z.string(),        // two-line bio used on book pages
  }),
});

/** Book ideas / upcoming books shown on the Upcoming page. Leave the folder empty to show none. */
const upcoming = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/upcoming' }),
  schema: z.object({
    title: z.string(),
    status: z.string().default('In progress'),
    order: z.number().default(1),
  }),
});

/**
 * Reader reviews: one file per review in src/content/reviews/.
 * Copy _TEMPLATE.md, rename it, fill it in. Files starting with "_" are ignored.
 */
const reviews = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/reviews' }),
  schema: z.object({
    book: z.enum(['patterns-in-the-noise', 'wisdom-of-everyday-life']), // which book page it appears on
    name: z.string(),                       // reviewer name as shown publicly
    quote: z.string(),                      // the short excerpt shown on the page
    title: z.string().optional(),           // review headline
    rating: z.number().min(1).max(5).optional(),
    date: z.string().optional(),            // e.g. "27 September 2026"
    source: z.string().default('Amazon.in'),
    url: z.string().optional(),             // link to the review / reviews page
    verified: z.boolean().default(false),   // "Verified purchase"
    order: z.number().default(99),          // lower = shown first
    showFull: z.boolean().default(false),   // true = also show the full text below the excerpt
  }),
});

export const collections = { books, authors, upcoming, reviews };
