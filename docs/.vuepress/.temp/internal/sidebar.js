export const sidebar = {"/":{"/demo/":{"items":"auto","prefix":"/demo/"},"/ese-theory/":{"items":["preface",{"text":"Part1: 原点 · 三大基石公理","prefix":"part1-the-axioms","items":"auto"},{"text":"Part2: 推演 · 核心博弈定理","prefix":"part1-the-theorems","items":"auto"},{"text":"Part3: 观测 · 几何量化工具","prefix":"part1-the-theorems","items":"auto"},{"text":"Part4: 主权 · AI 执行体系","prefix":"part1-the-execution","items":"auto"},{"text":"Part5: 案例 · 商业航天与低轨宽带","prefix":"part1-the-cases","items":"auto"},"afterword"],"prefix":"/ese-theory/"}},"__auto__":{"/demo/":[{"text":"bar","link":"/demo/bw9j2are/"},{"text":"foo","link":"/demo/ir8sxl2t/"}],"/ese-theory/part1-the-axioms/":[{"text":"1","link":"/ese-theory/gdgmj0qw/"}],"/ese-theory/part1-the-theorems/":[],"/ese-theory/part1-the-execution/":[],"/ese-theory/part1-the-cases/":[]},"__home__":{"/demo/":"/demo/","/ese-theory/part1-the-axioms/":"/ese-theory/q8lkfx4f/"}}

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
