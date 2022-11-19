# yori-vue

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Contribute

### Documents

[vue](https://cn.vuejs.org/)

[vite](https://vitejs.cn/vite3-cn/)

[vue-router](https://router.vuejs.org/zh/)

[unhead](https://unhead.harlanzw.com/)

[@vueuse/head](https://github.com/vueuse/head)

[MathJax](https://docs.mathjax.org/en/latest/basic/mathjax.html)

[giscus](https://giscus.app/zh-CN)

### Tech Blog

about [commitizen](https://www.jianshu.com/p/bd712e42f2e9)

thoughts about [theme change](https://blog.csdn.net/lunahaijiao/article/details/125437570)

deploy [giscus](https://blog.duan-ya.com/article/2022-08-21/198)

## Deploy

new delpoy file '/.github/workflows/deploy.yml'

add content

```yml
name: Deploy

on:
  push:
    branches:
      - master

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm
      - run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: dist
```