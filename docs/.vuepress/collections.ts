/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

const blog = defineCollection({
  // post 类型，这里用于实现 博客功能
  type: 'post',
  // 文档集合所在目录，相对于 `docs`
  dir: 'blog',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'Blog',
  // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
  link: '/blog/',
  //   linkPrefix: '/article/', // 相关文章的链接前缀
  //   postList: true, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
  //   archives: true, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
})

const dailyStock = defineCollection({
  // post 类型，这里用于实现 博客功能
  type: 'post',
  // 文档集合所在目录，相对于 `docs`
  dir: 'daily-stock',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '每日一股',
  // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
  link: '/daily-stock/',
  //   linkPrefix: '/article/', // 相关文章的链接前缀
    postList: true, // 是否启用文章列表页
    tags: false, // 是否启用标签页
    archives: false, // 是否启用归档页
    categories: false, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量

  profile: false,
  social: false
})

const marketReports = defineCollection({
  // post 类型，这里用于实现 博客功能
  type: 'post',
  // 文档集合所在目录，相对于 `docs`
  dir: 'market-reports',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '市场日报',
  // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
  link: '/market-reports/',
  //   linkPrefix: '/article/', // 相关文章的链接前缀
  postList: false, // 是否启用文章列表页
  //   tags: true, // 是否启用标签页
  //   archives: true, // 是否启用归档页
  //   categories: true, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
})

const demoDoc = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: 'demo',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/demo',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'Demo',
  // 手动配置侧边栏结构
  // sidebar: ['', 'foo', 'bar'],
  // 根据文件结构自动生成侧边栏
  sidebar: 'auto',
})

const eseTheory = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: 'ese-theory',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/ese-theory',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'Entropic-Sentient Equilibrium (ESE) Theory',
  // 手动配置侧边栏结构
  // sidebar: ['', 'foo', 'bar'],
  sidebar: [
    'preface',
    'introduction',
    { text: 'Part1: 原点 · 三大基石公理', prefix: 'part1-the-axioms', items: 'auto', collapsed: true },
    { text: 'Part2: 推演 · 核心博弈定理', prefix: 'part2-the-theorems', items: 'auto', collapsed: true },
    { text: 'Part3: 观测 · 几何量化工具', prefix: 'part3-the-tools', items: 'auto', collapsed: true },
    { text: 'Part4: 主权 · AI 执行体系', prefix: 'part4-the-execution', items: 'auto', collapsed: true },
    { text: 'Part5: 案例 · 板块个股观测', prefix: 'part5-the-cases', items: 'auto', collapsed: true },
    'afterword'
  ],
  // 根据文件结构自动生成侧边栏
  // sidebar: 'auto',
  sidebarCollapsed: true, 
})

const beforeAction = defineCollection({
  type: 'doc',
  dir: 'before-action',
  linkPrefix: '/before-action',
  title: '出手之前',
  sidebar: [
    '',
    {
      text: '1. 先看局面',
      link: '/before-action/read-the-board/',
      prefix: '01-read-the-board',
      items: [
        'can-this-market-be-traded',
        'emotion-or-trend-first',
        'mainline-rotation-and-noise',
        'why-do-nothing-in-bad-markets',
      ],
      collapsed: true,
    },
    {
      text: '2. 决定动作',
      link: '/before-action/choose-the-action/',
      prefix: '02-choose-the-action',
      items: [
        'buy-or-sell',
        'adding-is-not-first-entry',
        'reduce-is-not-exit-all',
        'unclear-action-means-do-not-move',
      ],
      collapsed: true,
    },
    {
      text: '3. 买入之前',
      link: '/before-action/before-buying/',
      prefix: '03-before-buying',
      items: [
        'what-opportunities-are-worth-buying',
        'conditions-to-check-before-buying',
        'chase-dip-right-side-contexts',
        'wrong-entry-makes-everything-passive',
      ],
      collapsed: true,
    },
    {
      text: '4. 卖出之前',
      link: '/before-action/before-selling/',
      prefix: '04-before-selling',
      items: [
        'when-to-stop-loss',
        'when-to-take-profit',
        'sell-because-weak-not-because-fear',
        'buying-is-apprentice-selling-is-master',
      ],
      collapsed: true,
    },
    {
      text: '5. 不出手的时候',
      link: '/before-action/when-not-to-act/',
      prefix: '05-when-not-to-act',
      items: [
        'do-not-trade-when-you-do-not-understand',
        'do-not-trade-with-incomplete-conditions',
        'do-not-trade-with-bad-risk-reward',
        'do-not-trade-when-emotional',
      ],
      collapsed: true,
    },
    {
      text: '6. 出手之后',
      link: '/before-action/after-the-action/',
      prefix: '06-after-the-action',
      items: [
        'what-to-watch-after-buying',
        'how-to-judge-a-sell',
        'what-to-do-when-you-are-wrong',
        'what-records-to-leave-after-a-trade',
      ],
      collapsed: true,
    },
  ],
  sidebarCollapsed: true,
})

/**
 * 导出所有的 collections
 * (blog 为博客示例，如果不需要博客功能，请删除)
 * (demoDoc 为参考示例，如果不需要它，请删除)
 */
export default defineCollections([
  blog,
  demoDoc,
  marketReports,
  dailyStock,
  beforeAction,
  eseTheory,
])
