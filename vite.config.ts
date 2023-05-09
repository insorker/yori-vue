import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import hljs from 'highlight.js/lib/common'
import fs from 'fs'
import { resolve } from "path"
import matter from "gray-matter"
import { parse, stringify } from 'yaml'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['md'],
      dirs: [
        { dir: 'docs/note', baseRoute: 'note' },
      ],
      extendRoute(route, parent) {
        const path = route.path.split('/')[1]
        const name = route.name.split('-')[1]

        if (path == 'note') {
          const file = resolve(__dirname, `docs/${path}/${name}.md`)
          const content = fs.readFileSync(file, "utf-8")
          const { data } = matter(content, {
            engines: { yaml: { parse, stringify, }, },
          })

          return {
            ...route,
            meta: data
          }
        }

        return route
      }
    }),
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
          }
      
          return ''; // use external default escaping
        }
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
