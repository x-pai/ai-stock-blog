import comp from "/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"effect\":\"tint-plate\",\"hero\":{\"name\":\"AlphaBot\",\"text\":\"专业帮您把复杂的投资决策变成简单的错误决定\",\"actions\":[{\"theme\":\"brand\",\"text\":\"开源地址\",\"link\":\"https://github.com/x-pai/AlphaBot\"},{\"theme\":\"alt\",\"text\":\"在线演示 →\",\"link\":\"https://demo.alphabot.x-pai.com/\"}]}}]},\"readingTime\":{\"minutes\":0.22,\"words\":66},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
