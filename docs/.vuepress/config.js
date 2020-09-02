module.exports = {
  title: 'yuan',
  description: '这是钮旭明的测试项目啊哈哈',
  base: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './assets/'
      }
    }
  },
  dest: './dist',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: '百度', link: 'https://www.baidu.com' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      {
        title: 'Blog',
        collapsable: false,
        children: [
          '/blog/',
          '/blog/first'
        ]
      }
    ],
    sidebarDepth: 3
  }
}