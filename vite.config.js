import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const publicDir = resolve(__dirname, 'public')

export default defineConfig({
  root,
  publicDir,
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        notFound: resolve(root, '404.html'),
        btz2022: resolve(root, 'btz-2022/index.html'),
        btz2022About: resolve(root, 'btz-2022/about.html'),
        btz2022Comment: resolve(root, 'btz-2022/comment.html'),
        btz2022Credit: resolve(root, 'btz-2022/credit.html'),
      },
    },
  },
})
