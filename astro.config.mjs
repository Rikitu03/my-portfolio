// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real production URL after the first Vercel deploy
// (or once a custom domain is attached). Used for canonical links, og:url,
// and sitemap.xml — a wrong value here silently ships wrong metadata.
const SITE = 'https://my-portfolio.vercel.app';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [sitemap()],
});
