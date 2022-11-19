function MathJaxInject() {
  if (!window.MathJax) {
    const script = document.createElement('script')
    script.src =
      'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-chtml.js'
    script.async = true
    document.head.appendChild(script)
  }
}

function MathJaxInit() {
  MathJaxInject()

  window.MathJax = {
    tex: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']],
    },
    options: {
      skipHtmlTags: ['noscript', 'style', 'textarea', 'pre', 'code'],
    },
    svg: {
      fontCache: 'global',
    },
  }
}

export default MathJaxInit;
