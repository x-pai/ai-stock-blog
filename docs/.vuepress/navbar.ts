/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '项目介绍', link: '/about' },
  { text: '市场日报', link: '/market-reports/' },
  { text: '每日一股', link: '/daily-stock/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: 'ESE理论', link: '/ese-theory/README.md' }]
  },
])
