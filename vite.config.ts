import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'child_process'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'

import Markdown from 'vite-plugin-vue-markdown'
import prism from 'markdown-it-prism'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 获取最后一次提交的commitID,处理异常报错
let version
try {
  version = execSync('git rev-parse --short HEAD').toString().replace(/\n/, '')
} catch (e) {
  /* eslint-disable no-console */
  console.warn('Getting revision FAILED. Maybe this is not a git project.')
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItUses: [prism],
    }),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    /**
     * @see https://github.com/vbenjs/vite-plugin-html
     */
    createHtmlPlugin({
      minify: true,
      pages: [
        {
          /**
           * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
           * @default src/main.ts
           */
          entry: 'src/main.ts',
          filename: 'index.html',
          template: 'index.html',
          /**
           * 需要注入 index.html ejs 模版的数据
           */
          injectOptions: {
            data: {
              version,
              buildTime: new Date().toLocaleString(),
            },
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('icons-vue')) {
            return 'icon'
          }
          if (id.includes('element')) {
            return 'element'
          }
          if (id.includes('/docs')) {
            return 'docs'
          }
          if (id.includes('echarts')) {
            return 'echarts'
          }
          if (id.includes('/views')) {
            return 'views'
          }
          if (id.includes('node_modules')) {
            return 'chunks'
          }
        },
      },
    },
  },
})
