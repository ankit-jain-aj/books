// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Pages workflow.
// With a custom domain: SITE_URL=https://yourdomain.in and BASE_PATH=/
// Without one:          SITE_URL=https://<username>.github.io and BASE_PATH=/<repo-name>
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
});
