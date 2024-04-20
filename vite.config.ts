import { katex } from "@mdit/plugin-katex"
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import matter from "gray-matter"
import hljs from 'highlight.js/lib/common'
import { fileURLToPath, URL } from 'node:url'
import { resolve } from "path"
import { defineConfig } from 'vite'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
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
        { dir: 'docs/posts', baseRoute: 'posts' },
      ],
      extendRoute(route) {
        // 详见 console.log(route)
        const path = route.path.split('/')[1]
        const name = route.name.substring(route.name.indexOf('-') + 1)

        if (path == 'posts') {
          const file = resolve(__dirname, `docs/${path}/${name}.md`)
          const { data } = matter(fs.readFileSync(file, "utf-8"), {
            // 如果不用 yaml，markdown 读取的时间格式会有错误，未来可以进行更新
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
