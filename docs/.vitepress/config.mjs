import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Yan's Digital Garden",
  description: "加密媒体观察者 | AI 效能探索 | 终身学习者",
  lang: 'zh-CN',
  vite: {
    publicDir: '../public',  // 确保 public 文件夹被正确识别
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
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
      { 
        text: '🤖 AI 学习', 
        items: [
          { text: '学习路线图', link: '/ai-learning/roadmap' },
          { text: '技术全景图', link: '/tech-landscape' }
        ]
      },
      { text: '👤 关于我', link: '/projects/about' }
    ],
    sidebar: {
      '/crypto/': [
        {
          text: '🎙️ 媒体人视界',
          collapsed: false,
          items: [
            { text: '📊 叙事逻辑与观察', link: '/crypto/observation' },
            { text: '✍️ 深度报道精选', link: '/crypto/reports' },
            { text: '🧠 媒体人方法论', link: '/crypto/methodology' },
          ]
        },
        {
          text: '🤝 行业连接 (Coming)',
          collapsed: true,
          items: [
            { text: '🎤 一线访谈录', link: '/crypto/interviews' },
            { text: '🔗 行业资源池', link: '/crypto/resources' }
          ]
        }
      ],
      '/ai-learning/': [
        {
          text: '🤖 AI 进化记录',
          collapsed: false,
          items: [
            { text: '🗺️ 学习路线图', link: '/ai-learning/roadmap' },
            { text: '🎨 技术全景图', link: '/tech-landscape' },
            { text: '🛠️ AI 工具库', link: '/ai-learning/ai-tools' },
            { text: '✍️ 学习笔记(新)', link: '/ai-learning/Learn' },
            { text: '📅 Week 1: 基础起步', link: '/ai-learning/week1' },
            { text: '📅 Week 2: 实战进阶', link: '/ai-learning/week2' }
          ]
        },
        {
          text: '📚 实战教程',
          collapsed: false,
          items: [
            { 
              text: '🚀 Claude Artifacts 部署', 
              link: '/ai-learning/claude-artifacts-deployment' 
            },
            { 
              text: '📄 GitHub Pages 部署', 
              link: '/ai-learning/github-pages-deployment' 
            },
            { 
              text: '🤖 RAG 智能问答部署', 
              link: '/ai-learning/rag-huggingface-deployment' 
            },
            { 
              text: '🌐 VitePress 网站搭建', 
              link: '/ai-learning/vitepress-website-guide' 
            }
          ]
        }
      ]
    },
    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/YanJumpeng/my-knowledge-base' 
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: '用文字记录 Web3 的进化，用 AI 赋能个体成长',
      copyright: 'Copyright © 2026-Present | Yan Jumpeng'
    },
    lastUpdatedText: '最后更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})

