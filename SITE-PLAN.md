# Author Website — Site Plan (v1, 22 Nov 2026)

**Goal (phase 1):** a simple, minimal author site where visitors learn about Ankit and his books, then buy through existing Indian stores.
**Audience:** India only. Retail investors (Patterns in the Noise); general readers (The Wisdom of Everyday Life).
**Go-live target:** 30 Nov 2026.

---

## 1. Principles

- **Author site, not book site.** The brand is "Ankit Jain". Books, categories and co-authors are content inside it, so a new topic or co-author is just a new entry, not a redesign.
- **Minimal.** Few pages, short copy, lots of white space, one clear action per page. New content adds entries; navigation stays the same.
- **Warm and reflective shell, own mood per book.** The site-wide frame is calm (paper tones, serif type). Each book page takes the look of its cover.
- **Buy elsewhere.** Every book has "Buy on" buttons (Amazon.in, Flipkart, etc.). No cart and no payments on the site.

## 2. Site map

```
Home
Books                      (all books, grouped by category)
  ├─ Patterns in the Noise        /books/patterns-in-the-noise
  └─ The Wisdom of Everyday Life  /books/wisdom-of-everyday-life
Upcoming                   (ideas / next book + "notify me")
About                      (Ankit + co-authors)
Contact                    (one form: question, signed copy, media, other)
Press kit                  (optional for launch: bios, photos, covers to download)
Footer: social links · Privacy · Disclaimer
```

Top navigation shows only five links: **Books · Upcoming · About · Contact**, plus the name/logo, which goes Home.

## 3. Pages

### Home
1. Short intro: name, one line ("I write to make complex things simple: markets, the mind, everyday life"), author photo.
2. Books: one card per book in its own colours (cover, title, one-line hook, "Explore" button).
3. "On my desk" teaser linking to Upcoming.
4. Footer.

### Book page (one template, themed per book)
| Section | Patterns in the Noise | Wisdom of Everyday Life |
|---|---|---|
| Hero | Cover, title, subtitle, tagline "Transform noise into opportunity", buy buttons | Cover, title, subtitle, "Understand life… in peace", buy buttons |
| About the book | Blurb | 100-word summary |
| Inside | The indicators covered (RSI, MACD, Bollinger…) and what each chapter includes | The 13 Golden Rules, shown as a simple grid |
| Free resources | Reader bonus pack (journal templates, cheat sheets) | Later: free sample chapter (optional) |
| Watch | 2–3 chosen reels/YouTube videos (once handles go live) | Same, later |
| Reviews | Selected reader quotes | Selected reader quotes |
| Reader Q&A | Curated FAQ built from questions sent through Contact | Same |
| Author(s) | Ankit (short bio) | Rakesh Kumar Jain + Ankit |
| Buy | Amazon.in · Flipkart · Notion Press | Amazon.in · Flipkart · Wissen Bookstore · Google Play (eBook) |
| Fine print | "Educational, not investment advice" (SEBI guardrail) | "Not a substitute for medical or professional advice" |

**Themes**
- *Patterns:* near-black background, gold accents, serif capitals, a faint gold wave line. Dark, but still calm.
- *Wisdom:* ivory paper, ink-black serif, soft earth accents, ink-sketch landscape art.

### Books
A grid grouped by category ("Markets", "Everyday Wisdom"). Categories only show up as labels once there are enough books to need them.

### Upcoming
"On my desk": 1–3 short idea cards with no fixed dates, plus a single email field: "Tell me when the next book is out".

### About
- Ankit: one bio combining the two existing versions (IT consulting, engineer + IMT + Deakin MBA, learner-not-guru voice).
- Co-authors: Rakesh Kumar Jain, with bio and optional photo. Built as a list, so future co-authors slot in.

### Contact
One form with a "Reason" dropdown: *Reader question · Request a signed copy · Media / press · Speaking / collaboration · Other*.
- Signed copies: the form collects name, city, book and number of copies. Ankit follows up by WhatsApp or email and handles payment (UPI) and shipping offline.
- Submissions arrive by email. No personal email address is printed on the site, which also avoids spam.

## 4. Recommendations on open questions

- **Newsletter: not now.** These books sell through social media and the stores, and a newsletter needs a steady writing schedule. Instead, collect emails only at "Notify me about the next book" (Upcoming page). When the 3rd book is close, that list becomes the launch announcement. A real newsletter can come later (MailerLite or Buttondown free tier).
- **Reader Q&A:** a curated FAQ, not open comments. Comments need moderation; a FAQ stays clean and grows naturally.
- **Social:** icon links in the footer, plus a small "Watch" strip on each book page. No live Instagram/Facebook feeds, which are slow and cluttered. Handles are still TBD, so the site can launch without them and add them later.
- **Reference sites for the feel:** quiet, book-first author sites with a big cover, short text and one button per page. I'll show this in the design step rather than send you links.

## 5. Technical approach

- **Static site, built with Astro, hosted on GitHub Pages (free).** Each book, author and FAQ is a small text file, so adding a book is "add one file". Claude Code can do this easily.
- **Contact and notify forms:** Web3Forms or Formspree (free tier), delivered to an email you choose.
- **Domain:** about ₹700–1,200/year for a `.in`. Candidates (availability to check): `ankitjain.in`, `ankitjainbooks.in`, `ankitjainwrites.in`, `ankitjain.co.in`. If the domain isn't ready, the site can go live on `<username>.github.io` and switch later.
- **Basics included:** mobile-first, fast, SEO tags plus book structured data (so Google shows book details), share previews for WhatsApp, a privacy note (forms collect personal data, DPDP Act), simple privacy-friendly analytics (optional).

## 6. Timeline (to 30 Nov)

| Date | Step |
|---|---|
| 22–23 Nov | Approve this plan; send the inputs below |
| 24 Nov | 2–3 design directions (home + one book page) → you pick one |
| 25–27 Nov | Build all pages; buy domain by 27 Nov (DNS can take up to 48 h) |
| 28 Nov | Your review round; fixes |
| 29 Nov | Deploy to GitHub Pages, connect domain, test on phone |
| 30 Nov | Live |

## 7. Inputs needed from you

Already have: covers (both), blurbs, bios, store links, Wisdom social art, Patterns bonus-pack link.

Needed:
1. **Author photo** (Ankit); father's photo (optional).
2. **Reviews**: the quotes you have, with reviewer name or initials and their OK to use them.
3. **GitHub account**: do you have one? If not, create one (free).
4. **Contact email**: which address should form submissions go to? A dedicated one is better than your personal Gmail.
5. **Domain**: your pick from the list (or your own idea).
6. **Bonus pack link**: a public "anyone with the link" Drive link (the current one is a `/u/0/` personal link).
7. **Patterns formats**: is the Amazon link paperback, Kindle, or both? Any eBook link?
8. **Upcoming ideas**: 1–3 working titles or themes you're happy to show publicly (or "keep it vague").

## 8. Phase 2 (later, not in scope now)

Selling signed copies on the site (payments + logistics) · newsletter · blog/articles · free sample chapters with email capture · press kit downloads · Hindi edition pages if relevant.
