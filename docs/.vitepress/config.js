import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Yan's Digital Garden", // 建议用你的名字，更有辨识度
  description: "加密媒体观察者 | AI 效能探索 | 终身学习者",
  
  // 浏览器标签页图标 (如果有 favicon.ico 的话)
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // 网站标志旁边的文字
    logo: '', 
    
    // 1. 顶部导航栏 (Nav)
    nav: [
      { text: '✨ 首页', link: '/' },
      { 
        text: '🎙️ 加密媒体', 
        items: [
          { text: '叙事观察', link: '/crypto/observation' },
          { text: '深度报道', link: '/crypto/reports' },
          { text: '媒体方法论', link: '/crypto/methodology' }
        ] 
      },
      { text: '🤖 AI 学习', link: '/ai-learning/roadmap' },
      { text: '👤 关于我', link: '/projects/about' }
    ],

    // 2. 左侧侧边栏 (Sidebar)
    sidebar: {
      // 加密媒体模块
      '/crypto/': [
        {
          text: '🎙️ 媒体人视界',
          collapsed: false, // 默认展开
          items: [
            { text: '📊 叙事逻辑与观察', link: '/crypto/observation' },
            { text: '✍️ 深度报道精选', link: '/crypto/reports' },
            { text: '🧠 媒体人方法论', link: '/crypto/methodology' },
          ]
        },
        {
          text: '🤝 行业连接 (Coming)',
          collapsed: true, // 默认折叠
          items: [
            { text: '🎤 一线访谈录', link: '/crypto/interviews' },
            { text: '🔗 行业资源池', link: '/crypto/resources' }
          ]
        }
      ],

      // AI 学习模块
      '/ai-learning/': [
        {
          text: '🤖 AI 进化记录',
          collapsed: false,
          items: [
            { text: '🗺️ 学习路线图', link: '/ai-learning/roadmap' },
            { text: '🛠️ AI 工具库', link: '/ai-learning/ai-tools' },
            { text: '📅 Week 1: 基础起步', link: '/ai-learning/week1' },
            { text: '📅 Week 2: 实战进阶', link: '/ai-learning/week2' }
          ]
        }
      ]
    },

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YanJumpeng/my-knowledge-base' },
      // 建议加上 Twitter 或 X，这对加密媒体人非常重要
      // { icon: 'twitter', link: 'https://twitter.com/你的账号' }
    ],

    // 4. 搜索配置 (VitePress 内置局部搜索)
    search: {
      provider: 'local'
    },

    // 5. 页脚配置
    footer: {
      message: '用文字记录 Web3 的进化，用 AI 赋能个体成长',
      copyright: 'Copyright © 2026-Present | Yan Jumpeng'
    },

    // 6. 辅助功能
    lastUpdatedText: '最后更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
