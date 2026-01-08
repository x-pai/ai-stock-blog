export const redirects = JSON.parse("{\"/demo/foo.html\":\"/demo/ir8sxl2t/\",\"/demo/1/bar.html\":\"/demo/bw9j2are/\",\"/blog/preview/custom-component.example.html\":\"/blog/cz3wgg1m/\",\"/blog/preview/markdown.html\":\"/blog/dqm1ikaz/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"AlphaBot - 你的智能股票分析助手"} }],
  ["/daily-stock.html", { loader: () => import(/* webpackChunkName: "daily-stock.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/daily-stock.html.js"), meta: {"title":"每日一股"} }],
  ["/market-reports.html", { loader: () => import(/* webpackChunkName: "market-reports.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/market-reports.html.js"), meta: {"title":"市场日报"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/demo/ir8sxl2t/", { loader: () => import(/* webpackChunkName: "demo_ir8sxl2t_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/demo/ir8sxl2t/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/bw9j2are/", { loader: () => import(/* webpackChunkName: "demo_bw9j2are_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/demo/bw9j2are/index.html.js"), meta: {"title":"bar"} }],
  ["/blog/cz3wgg1m/", { loader: () => import(/* webpackChunkName: "blog_cz3wgg1m_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/blog/cz3wgg1m/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/blog/dqm1ikaz/", { loader: () => import(/* webpackChunkName: "blog_dqm1ikaz_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/blog/dqm1ikaz/index.html.js"), meta: {"title":"Markdown"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
