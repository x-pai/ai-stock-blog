export const collections = {"/":[{"type":"post","dir":"blog","title":"Blog","link":"/blog/","linkPrefix":"/blog/","tags":true,"tagsLink":"/blog/tags/","archives":true,"archivesLink":"/blog/archives/","categories":true,"categoriesLink":"/blog/categories/"},{"type":"doc","dir":"demo","linkPrefix":"/demo","title":"Demo"},{"type":"post","dir":"market-reports","title":"市场日报","link":"/market-reports/","postList":false,"linkPrefix":"/market-reports/","tags":true,"tagsLink":"/market-reports/tags/","archives":true,"archivesLink":"/market-reports/archives/","categories":true,"categoriesLink":"/market-reports/categories/"},{"type":"post","dir":"daily-stock","title":"每日一股","link":"/daily-stock/","postList":true,"tags":false,"archives":false,"categories":false,"profile":false,"social":false,"linkPrefix":"/daily-stock/"},{"type":"doc","dir":"ese-theory","linkPrefix":"/ese-theory","title":"Entropic-Sentient Equilibrium (ESE) Theory"}]}

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
