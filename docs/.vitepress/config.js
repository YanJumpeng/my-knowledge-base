export default {
  title: "我的知识库",
  description: "记录 AI 学习与加密投研点滴",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '加密投研', link: '/crypto/methodology' }, // 修改这里：指向文件夹内存在的文件
      { text: 'AI学习', link: '/ai-learning/week1' },     // 修改这里
      { text: '关于我', link: '/projects/about' }        // 你的 about 现在在 projects 文件夹里
    ],

    sidebar: {
      // 当你在 crypto 目录时显示的菜单
      '/crypto/': [
        {
          text: '加密投研精选',
          items: [
            { text: '投资方法论', link: '/crypto/methodology' },
            { text: '行业观察', link: '/crypto/observation' },
            { text: '深度研报', link: '/crypto/reports' }
          ]
        }
      ],
      // 当你在 ai-learning 目录时显示的菜单
      '/ai-learning/': [
        {
          text: 'AI 学习之路',
          items: [
            { text: '学习路线', link: '/ai-learning/roadmap' },
            { text: 'AI 工具', link: '/ai-learning/ai-tools' },
            { text: 'Week 1', link: '/ai-learning/week1' }
          ]
        }
      ]
    }
  }
}
