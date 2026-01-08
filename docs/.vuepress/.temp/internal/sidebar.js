export const sidebar = {"/":{"/demo/":{"items":"auto","prefix":"/demo/"}},"__auto__":{"/demo/":[{"text":"foo","link":"/demo/ir8sxl2t/"},{"text":"1","items":[{"text":"bar","link":"/demo/bw9j2are/"}],"collapsed":false}]},"__home__":{"/demo/":"/demo/"}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
