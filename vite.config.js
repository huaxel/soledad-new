import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        weddings: resolve(__dirname, 'weddings.html'),
        corporate: resolve(__dirname, 'corporate.html'),
        history: resolve(__dirname, 'history.html'),
        concierge: resolve(__dirname, 'concierge.html'),
        journal: resolve(__dirname, 'journal.html'),
        spaces: resolve(__dirname, 'spaces.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        legal: resolve(__dirname, 'legal.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        availability: resolve(__dirname, 'availability.html'),
      },
    },
  },
})
