import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import { katex } from "@mdit/plugin-katex"
import hljs from 'highlight.js/lib/common'
import fs from 'fs'
import { resolve } from "path"
import matter from "gray-matter"
import { parse, stringify } from 'yaml'

// https://github.com/vuejs/vitepress/issues/529#issuecomment-1151186631
const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        }
      }
    }),
    Pages({
      extensions: ['md'],
      dirs: [
        { dir: 'docs/note', baseRoute: 'note' },
      ],
      extendRoute(route) {
        const path = route.path.split('/')[1]
        // route.name 会得到类似于 'note-文件名'的name，所以要去掉'note-'
        const name = route.name.substring(route.name.indexOf('-') + 1)

        if (path == 'note') {
          const file = resolve(__dirname, `docs/${path}/${name}.md`)
          const content = fs.readFileSync(file, "utf-8")
          const { data } = matter(content, {
            engines: { yaml: { parse, stringify, }, },
          })

          return { ...route, meta: data }
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
            } catch (__) {
              return ''
            }
          }
      
          return ''; // use external default escaping
        }
      },
      markdownItSetup(md) {
        // https://mdit-plugins.github.io/zh/katex.html
        md.use(katex)
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
