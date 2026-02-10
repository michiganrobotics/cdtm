import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import embeds from 'astro-embed/integration';
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',

  site: 'https://cdtm-iucrc.org',

  integrations: [
    icon(),
    sitemap(), 
    embeds(), 
    mdx()
  ],

  vite: {
    define: {
      'import.meta.env.BASE_URL': '"/"',
    },

    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        }
      },
      target: 'esnext',
    },

    plugins: [tailwindcss()]
  },

  image: {
    domains: [
      'dtc.robotics.umich.edu',
      'robotics.umich.edu',
      'www.umich.edu',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.umich.edu',
      },
    ],
  },
});