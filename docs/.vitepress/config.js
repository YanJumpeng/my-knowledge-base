// docs/.vitepress/config.js
import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点元数据
  title: "Yan's Digital Garden",
  description: "知识库与观察者 | AI 效能探索",
  lang: 'zh-CN',
  
  // 基础路径（如果部署在子路径下需要配置）
  // base: '/',
  
  // 主题配置
  themeConfig: {
    // 顶部导航栏
    nav: [
      { 
        text: '🏠 首页', 
        link: '/' 
      },
      { 
        text: '🎓 AI 学习',
        items: [
          { 
            text: '📚 学习笔记', 
            link: '/ai-learning/' 
          },
          { 
            text: '🗺️ 学习路线图', 
            link: '/ai-learning/roadmap' 
          },
          { 
            text: '🎨 技术全景图', 
            link: '/tech-landscape.html' 
          }
        ]
      },
      { 
        text: '💰 加密观察', 
        link: '/crypto/observation' 
      },
      { 
        text: '📁 项目展示', 
        link: '/projects/' 
      },
      { 
        text: '📰 媒体', 
        link: '/media/' 
      }
    ],

    // 侧边栏配置
    sidebar: {
      // AI 学习板块的侧边栏
      '/ai-learning/': [
        {
          text: 'AI 学习指南',
          collapsed: false,
          items: [
            { 
              text: '📖 开始学习', 
              link: '/ai-learning/' 
            },
            { 
              text: '🗺️ 学习路线图', 
              link: '/ai-learning/roadmap' 
            },
            { 
              text: '🎨 技术全景图', 
              link: '/tech-landscape.html' 
            }
          ]
        },
        {
          text: '学习资源',
          collapsed: false,
          items: [
            { 
              text: '📝 Week 2 笔记', 
              link: '/ai-learning/week2' 
            }
            // 添加更多学习笔记链接
          ]
        }
      ],

      // 加密观察板块的侧边栏
      '/crypto/': [
        {
          text: '加密货币观察',
          items: [
            { 
              text: '📊 市场观察', 
              link: '/crypto/observation' 
            }
          ]
        }
      ],

      // 项目板块的侧边栏
      '/projects/': [
        {
          text: '项目展示',
          items: [
            { 
              text: '🚀 所有项目', 
              link: '/projects/' 
            }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { 
        icon: 'github', 
        link: 'https://github.com/YanJumpeng' 
      }
    ],

    // 页脚
    footer: {
      message: '用文字记录 Web3 的进化 | 用 AI 驱动个人成长',
      copyright: 'Copyright © 2024-present YanJumpeng'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/YanJumpeng/my-knowledge-base/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },

    // 搜索配置（可选，需要安装插件）
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 返回顶部按钮文字
    returnToTopLabel: '返回顶部',

    // 外部链接图标
    externalLinkIcon: true,

    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',

    // 深色模式切换标签
    darkModeSwitchLabel: '主题',

    // 浅色/深色模式切换标题
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true, // 显示代码行号
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // Head 配置（SEO 优化）
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
    ['meta', { name: 'og:site_name', content: "Yan's Digital Garden" }],
    ['meta', { name: 'og:image', content: '/og-image.png' }]
  ]
})
