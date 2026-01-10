export default {
  title: "严jump的知识库", // 网站左上角标题
  description: "记录 AI 学习、加密媒体与加密投研点滴",
  themeConfig: {
    // 1. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '加密投研', link: '/crypto/' },
      { text: '加密媒体', link: '/media/' },
      { text: 'AI学习', link: '/ai-learning/' },
      { text: '关于我', link: '/about' }
    ],

    // 2. 左侧侧边栏
    sidebar: {
      '/crypto/': [
        {
          text: '加密投研',
          items: [
            { text: '行业概览', link: '/crypto/' },
            { text: '投资方法论', link: '/crypto/methodology' },
            { text: '深度研报', link: '/crypto/reports' },
            { text: '行业观察', link: '/crypto/observation' },
          ]
        }
      ],
      '/ai-learning/': [
        {
          text: 'AI 学习之路',
          items: [
            { text: '学习路线', link: '/ai-learning/' },
            { text: 'Week 1: Python 基础', link: '/ai-learning/week1' },
            { text: 'Week 2: API 实战', link: '/ai-learning/week2' },
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目实战',
          items: [
            { text: '项目清单', link: '/projects/' },
            { text: '网站搭建记录', link: '/projects/project1' },
          ]
        }
      ]
    },

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username' }
    ],

    // 4. 页脚
    footer: {
      message: '基于 VitePress 搭建',
      copyright: 'Copyright © 2026-至今'
    }
  }
}


