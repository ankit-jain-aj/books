/**
 * Site-wide settings. Edit here to change the name, social links or form setup.
 */
export const site = {
  name: 'Ankit Jain',
  description:
    'Author of Patterns in the Noise and co-author of The Wisdom of Everyday Life. Books that make complex things simple.',

  // AUTHOR-LEVEL social links: your personal author profiles. Shown in the footer of every page.
  // Book-specific accounts go in each book's file (src/content/books/<book>.md, under "social:").
  // You can enter a handle (e.g. 'ankitjain.author' or '@mychannel') or a full link (https://...).
  // Leave a value empty ('') to hide that link.
  social: [
    { label: 'Instagram', url: 'ankitjain.author' },
    { label: 'YouTube', url: '' },
    { label: 'Facebook', url: '' },
  ],

  // Contact + notify forms are delivered by Web3Forms (free).
  // 1. Go to https://web3forms.com, enter the email that should receive messages.
  // 2. Paste the access key it emails you below.
  web3formsKey: 'f00c646f-7ecc-47d3-a3e1-4a426c33b66c',
};
