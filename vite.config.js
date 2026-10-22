import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(projectRoot, 'index.html'),
        products: resolve(projectRoot, 'products.html'),
        product: resolve(projectRoot, 'product.html'),
        collections: resolve(projectRoot, 'collections.html'),
        about: resolve(projectRoot, 'about.html'),
        contact: resolve(projectRoot, 'contact.html'),
        profile: resolve(projectRoot, 'profile.html'),
      },
    },
  },
})
