import comp from "/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/daily-stock.html.vue"
const data = JSON.parse("{\"path\":\"/daily-stock.html\",\"title\":\"每日一股\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"每日一股\",\"date\":\"2023-03-15T00:00:00.000Z\",\"draft\":false},\"readingTime\":{\"minutes\":3.47,\"words\":1040},\"git\":{},\"filePathRelative\":\"daily-stock.md\",\"headers\":[]}")
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
