export const collections = {"/":[{"type":"post","dir":"blog","title":"Blog","link":"/blog/","linkPrefix":"/blog/","tags":true,"tagsLink":"/blog/tags/","archives":true,"archivesLink":"/blog/archives/","categories":true,"categoriesLink":"/blog/categories/"},{"type":"doc","dir":"demo","linkPrefix":"/demo","title":"Demo"}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateCollections) {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ collections }) => {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  })
}
