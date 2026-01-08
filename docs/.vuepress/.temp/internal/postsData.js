export const postsData = {"/blog/":[{"path":"/blog/dqm1ikaz/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2026/01/08 16:05:35","lang":"zh-CN","excerpt":"","readingTime":{"minutes":2.96,"words":887}},{"path":"/blog/cz3wgg1m/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2026/01/08 16:05:35","lang":"zh-CN","excerpt":"","readingTime":{"minutes":0.07,"words":20}}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePostsData) {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ postsData }) => {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  })
}
