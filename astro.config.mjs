import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

import tailwind from '@astrojs/tailwind'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      mdi: ["*"],
      ri: ['*'],
      'simple-icons': ['*'],
    },
  })],
  site: 'https://angelcruzsanchez.com',
  base: '/',
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
})
