import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from '/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import '/Users/ben/Desktop/Git/x-pai.com/ai-stock-blog/node_modules/vuepress-theme-plume/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
