\# VitePress 个人知识库网站完整搭建指南



::: tip 指南概述

本指南将带你从零开始，搭建一个专业的 VitePress 个人知识库网站，并实现永久免费在线托管。

:::



\## 为什么选择 VitePress？



VitePress 是由 Vue.js 团队开发的静态网站生成器，特别适合构建文档和知识库。



::: info VitePress 优势

\- ⚡ \*\*极速加载\*\*：基于 Vite 构建，速度超快

\- 📝 \*\*Markdown 优先\*\*：用熟悉的 Markdown 写作

\- 🎨 \*\*美观现代\*\*：内置精美主题，开箱即用

\- 🔍 \*\*内置搜索\*\*：自动生成搜索功能

\- 📱 \*\*响应式\*\*：完美适配移动端

\- 🆓 \*\*完全免费\*\*：部署到 Vercel/GitHub Pages 永久免费

:::



---



\## 第一步：环境准备（10分钟）



\### 安装 Node.js



Node.js 是运行 VitePress 的必需环境。



1\. \*\*下载 Node.js\*\*

&nbsp;  - 访问 \[Node.js 官网](https://nodejs.org/)

&nbsp;  - 下载 \*\*LTS 版本\*\*（推荐 18.x 或更高）



2\. \*\*安装 Node.js\*\*

&nbsp;  - Windows/Mac：双击安装包，一路点击"下一步"

&nbsp;  - 接受默认设置即可



3\. \*\*验证安装\*\*

&nbsp;  

&nbsp;  打开命令行工具：

&nbsp;  - \*\*Windows\*\*：按 `Win + R`，输入 `cmd`，回车

&nbsp;  - \*\*Mac\*\*：按 `Cmd + Space`，输入 `Terminal`，回车

&nbsp;  

&nbsp;  输入以下命令验证：

&nbsp;  ```bash

&nbsp;  node -v

&nbsp;  ```

&nbsp;  

&nbsp;  如果显示版本号（如 `v18.16.0`），说明安装成功！



::: tip 已经安装？

如果你已经安装了 Node.js，确保版本 ≥ 16.0。如果版本太旧，建议重新安装最新的 LTS 版本。

:::



---



\## 第二步：创建项目（5分钟）



\### 1. 创建项目文件夹



在命令行中运行：



```bash

\# 进入桌面（或你想创建项目的位置）

cd Desktop



\# 创建项目文件夹

mkdir my-knowledge-base



\# 进入项目文件夹

cd my-knowledge-base

```



\### 2. 初始化项目



```bash

\# 1. 初始化 package.json

npm init -y



\# 2. 安装 VitePress

npm install -D vitepress



\# 3. 创建 docs 文件夹

mkdir docs

```



\### 3. 创建 VitePress 配置目录



\*\*Windows:\*\*

```bash

cd docs

mkdir .vitepress

cd ..

```



\*\*Mac/Linux:\*\*

```bash

mkdir -p docs/.vitepress

```



::: warning 重要提示

`.vitepress` 文件夹名称前面有个点（`.`），这在某些系统中可能不可见，但它确实存在！

:::



---



\## 第三步：配置项目文件



现在需要创建几个关键的配置文件。



\### 1. 配置 package.json



打开项目根目录的 `package.json` 文件，确保包含以下内容：



```json

{

&nbsp; "name": "my-knowledge-base",

&nbsp; "version": "1.0.0",

&nbsp; "description": "个人知识库 - 记录学习和成长的全过程",

&nbsp; "scripts": {

&nbsp;   "docs:dev": "vitepress dev docs",

&nbsp;   "docs:build": "vitepress build docs",

&nbsp;   "docs:preview": "vitepress preview docs"

&nbsp; },

&nbsp; "keywords": \["vitepress", "knowledge-base", "blog"],

&nbsp; "author": "你的名字",

&nbsp; "license": "MIT",

&nbsp; "devDependencies": {

&nbsp;   "vitepress": "^1.0.0"

&nbsp; }

}

```



::: details 📖 脚本命令说明

\- `docs:dev` - 启动开发服务器（本地预览）

\- `docs:build` - 构建生产版本（准备部署）

\- `docs:preview` - 预览构建后的网站

:::



\### 2. 创建 VitePress 配置文件



在 `docs/.vitepress/` 目录下创建 `config.js` 文件：



```javascript

import { defineConfig } from 'vitepress'



export default defineConfig({

&nbsp; // 网站标题和描述

&nbsp; title: '我的知识库',

&nbsp; description: '记录学习和成长的全过程',

&nbsp; 

&nbsp; // 语言设置

&nbsp; lang: 'zh-CN',

&nbsp; 

&nbsp; // 主题配置

&nbsp; themeConfig: {

&nbsp;   // 顶部导航栏

&nbsp;   nav: \[

&nbsp;     { text: '首页', link: '/' },

&nbsp;     { 

&nbsp;       text: 'AI 学习', 

&nbsp;       items: \[

&nbsp;         { text: '学习路线图', link: '/ai-learning/roadmap' },

&nbsp;         { text: '学习笔记', link: '/ai-learning/notes' }

&nbsp;       ]

&nbsp;     },

&nbsp;     { 

&nbsp;       text: '加密观察', 

&nbsp;       items: \[

&nbsp;         { text: '行业观察', link: '/crypto/observation' },

&nbsp;         { text: '深度报道', link: '/crypto/reports' }

&nbsp;       ]

&nbsp;     },

&nbsp;     { text: '关于我', link: '/about' }

&nbsp;   ],

&nbsp;   

&nbsp;   // 侧边栏

&nbsp;   sidebar: {

&nbsp;     '/ai-learning/': \[

&nbsp;       {

&nbsp;         text: 'AI 学习',

&nbsp;         items: \[

&nbsp;           { text: '学习路线图', link: '/ai-learning/roadmap' },

&nbsp;           { text: 'Week 1: 基础起步', link: '/ai-learning/week1' },

&nbsp;           { text: 'Week 2: 实战进阶', link: '/ai-learning/week2' }

&nbsp;         ]

&nbsp;       }

&nbsp;     ],

&nbsp;     '/crypto/': \[

&nbsp;       {

&nbsp;         text: '加密观察',

&nbsp;         items: \[

&nbsp;           { text: '行业观察', link: '/crypto/observation' },

&nbsp;           { text: '深度报道', link: '/crypto/reports' },

&nbsp;           { text: '方法论', link: '/crypto/methodology' }

&nbsp;         ]

&nbsp;       }

&nbsp;     ]

&nbsp;   },

&nbsp;   

&nbsp;   // 社交链接

&nbsp;   socialLinks: \[

&nbsp;     { icon: 'github', link: 'https://github.com/你的用户名' }

&nbsp;   ],

&nbsp;   

&nbsp;   // 搜索功能

&nbsp;   search: {

&nbsp;     provider: 'local'

&nbsp;   },

&nbsp;   

&nbsp;   // 页脚

&nbsp;   footer: {

&nbsp;     message: '用心记录每一步成长',

&nbsp;     copyright: 'Copyright © 2026-Present'

&nbsp;   }

&nbsp; }

})

```



---



\## 第四步：创建页面内容



\### 项目结构



你的项目最终结构应该是这样的：



```

my-knowledge-base/

├── node\_modules/          (自动生成，不用管)

├── docs/

│   ├── .vitepress/

│   │   └── config.js      (配置文件)

│   ├── index.md           (首页)

│   ├── about.md           (关于页面)

│   ├── ai-learning/

│   │   ├── roadmap.md

│   │   ├── week1.md

│   │   └── week2.md

│   └── crypto/

│       ├── observation.md

│       ├── reports.md

│       └── methodology.md

├── package.json

└── package-lock.json

```



\### 1. 创建首页（docs/index.md）



```markdown

---

layout: home



hero:

&nbsp; name: "我的知识库"

&nbsp; text: "记录学习与成长"

&nbsp; tagline: 真实记录每一步，分享经验，共同进步

&nbsp; actions:

&nbsp;   - theme: brand

&nbsp;     text: 开始阅读

&nbsp;     link: /ai-learning/roadmap

&nbsp;   - theme: alt

&nbsp;     text: 关于我

&nbsp;     link: /about



features:

&nbsp; - icon: 🤖

&nbsp;   title: AI 学习笔记

&nbsp;   details: 从零开始的 AI 学习路线，包含实战项目和学习心得

&nbsp; - icon: 💰

&nbsp;   title: 加密行业观察

&nbsp;   details: 深度行业分析，投研方法论，市场洞察

&nbsp; - icon: 📚

&nbsp;   title: 知识积累

&nbsp;   details: 技术文档、工具推荐、学习资源整理

---



\## 最近更新



\- 📝 \[Week 2: Python 进阶与 AI 工具实战](/ai-learning/week2)

\- 🔍 \[加密市场 2024 Q4 观察](/crypto/observation)

\- 🚀 \[我的学习路线图](/ai-learning/roadmap)

```



\### 2. 创建关于页面（docs/about.md）



```markdown

\# 关于我



\## 👋 你好



我是 \[你的名字]，一个正在转型的加密行业从业者，目标是成为 AI 应用开发者。



---



\## 📚 职业经历



\### 2022 - 2025：加密行业投研



\- 📊 在某媒体/平台担任投研分析师

\- 🔍 主要研究方向：DeFi、L2、GameFi

\- ✍️ 撰写过多篇研报和行业分析文章

\- 🎯 参与多个项目的深度调研



\*\*主要工作内容：\*\*

\- 跟踪加密市场动态和热点赛道

\- 分析项目代币经济学和技术架构

\- 撰写投资研报和市场分析



---



\## 🎯 为什么转型 AI？



1\. \*\*技术驱动\*\*：希望从纯研究转向技术开发

2\. \*\*AI 浪潮\*\*：相信 AI 是下一个改变世界的技术

3\. \*\*实践导向\*\*：想要亲手构建产品，解决实际问题



---



\## 💼 技能树



\### 当前掌握

\- 📊 数据分析与行业研究

\- 📝 内容创作与写作

\- 🔍 信息检索与整理



\### 正在学习

\- 🐍 Python 编程

\- 🤖 AI 工具应用

\- 💻 Web 开发基础



\### 未来计划

\- 🧠 机器学习基础

\- 🚀 AI 产品开发

\- 📱 全栈开发能力



---



\## 📫 联系方式



\- 📧 邮箱：your-email@example.com

\- 🐦 Twitter：@yourhandle

\- 💼 LinkedIn：your-profile



---



\## 🌟 这个网站



这个知识库用于：

\- 📝 记录学习过程和心得

\- 🔍 分享行业观察和思考

\- 🤝 连接志同道合的朋友

```



\### 3. 创建 AI 学习路线图（docs/ai-learning/roadmap.md）



```markdown

\# AI 学习路线图



这是我为自己设计的 12 个月 AI 学习路线，也分享给想转型的朋友。



---



\## 🎯 总体规划



\### 时间线



| 阶段 | 时间 | 目标 |

|------|------|------|

| \*\*阶段一\*\* | Month 1-2 | 基础夯实 |

| \*\*阶段二\*\* | Month 3-5 | AI应用开发 |

| \*\*阶段三\*\* | Month 6-8 | 产品化 |

| \*\*阶段四\*\* | Month 9-12 | 规模化 |



---



\## 📚 阶段一：基础夯实（Month 1-2）



\### 目标

\- 掌握 Python 进阶知识

\- 熟练使用 AI 工具

\- 完成 3-5 个小项目



\### 学习内容



\*\*Python 进阶\*\*

\- 面向对象编程

\- 常用库：Pandas, NumPy, Requests

\- 文件处理和数据解析



\*\*AI 工具实战\*\*

\- ChatGPT API 使用

\- Prompt Engineering 技巧

\- AI 辅助编程（GitHub Copilot）



\### 实战项目

1\. 数据爬虫小工具

2\. AI 问答机器人

3\. 自动化数据分析脚本



---



\## 🚀 阶段二：AI应用开发（Month 3-5）



\### 目标

\- 理解 AI 应用架构

\- 掌握 RAG 技术

\- 开发完整的 AI 应用



\### 学习内容



\*\*AI 应用架构\*\*

\- LangChain 框架

\- 向量数据库（Pinecone, Chroma）

\- RAG（检索增强生成）技术



\*\*Web 开发基础\*\*

\- React/Vue 基础

\- API 设计

\- 前后端对接



\### 实战项目

1\. 个人知识库问答系统

2\. 文档智能分析工具

3\. AI 写作助手



---



\## 💼 阶段三：产品化（Month 6-8）



\### 目标

\- 独立开发完整产品

\- 用户增长和反馈收集

\- 产品迭代优化



\### 学习内容



\*\*产品思维\*\*

\- 用户需求分析

\- MVP 开发方法

\- 数据驱动决策



\*\*部署运维\*\*

\- Docker 容器化

\- CI/CD 自动化

\- 监控和日志



\### 实战项目

1\. SaaS 产品开发

2\. 用户增长实验

3\. 产品数据分析



---



\## 🌟 阶段四：规模化（Month 9-12）



\### 目标

\- 商业化探索

\- 团队协作

\- 持续学习



\### 学习内容



\*\*商业化\*\*

\- 付费模式设计

\- 营销和推广

\- 用户留存



\*\*高级技术\*\*

\- 微服务架构

\- 性能优化

\- 安全和隐私



---



\## 📊 学习资源



\### 在线课程

\- \[CS50 - 哈佛大学计算机科学](https://cs50.harvard.edu/)

\- \[Python for Everybody - Coursera](https://www.coursera.org/specializations/python)

\- \[LangChain 官方文档](https://python.langchain.com/)



\### 书籍推荐

\- 《Python编程：从入门到实践》

\- 《Hands-On Machine Learning》

\- 《设计数据密集型应用》



\### 工具推荐

\- \*\*开发环境\*\*：VS Code, PyCharm

\- \*\*AI工具\*\*：ChatGPT, Claude, GitHub Copilot

\- \*\*部署平台\*\*：Vercel, Railway, Hugging Face



---



\## ✅ 进度追踪



\- \[ ] 完成 Python 基础

\- \[ ] 掌握 AI API 调用

\- \[ ] 开发第一个 RAG 应用

\- \[ ] 部署到生产环境

\- \[ ] 获得前 100 个用户

```



---



\## 第五步：启动开发服务器



所有文件创建完成后，启动网站预览：



```bash

npm run docs:dev

```



::: tip 成功标志

命令行会显示：

```

&nbsp; vitepress v1.0.0



&nbsp; ➜  Local:   http://localhost:5173/

&nbsp; ➜  Network: use --host to expose

```



在浏览器中打开 `http://localhost:5173/` 即可看到你的网站！

:::



---



\## 第六步：部署到线上（永久免费托管）



现在让你的网站永久在线，全世界都能访问！



\### 方法一：Vercel 部署（推荐）



\#### 步骤 1：上传代码到 GitHub



1\. \*\*创建 GitHub 账号\*\*

&nbsp;  - 访问 \[github.com](https://github.com)

&nbsp;  - 注册账号（如果已有则跳过）



2\. \*\*创建新仓库\*\*

&nbsp;  - 点击右上角 `+` → `New repository`

&nbsp;  - Repository name: `my-knowledge-base`

&nbsp;  - 选择 \*\*Public\*\*（公开）

&nbsp;  - 点击 \*\*Create repository\*\*



3\. \*\*上传文件\*\*

&nbsp;  - 在仓库页面点击 \*\*"uploading an existing file"\*\*

&nbsp;  - 拖拽你电脑上的所有文件（\*\*除了 node\_modules 文件夹\*\*）

&nbsp;  - 点击 \*\*Commit changes\*\*



::: warning 重要

不要上传 `node\_modules` 文件夹！这个文件夹很大且不需要上传。

:::



\#### 步骤 2：连接 Vercel



1\. \*\*访问 Vercel\*\*

&nbsp;  - 打开 \[vercel.com](https://vercel.com)

&nbsp;  - 选择 \*\*Continue with GitHub\*\* 登录



2\. \*\*导入项目\*\*

&nbsp;  - 点击 \*\*Add New\*\* → \*\*Project\*\*

&nbsp;  - 找到你的 `my-knowledge-base` 仓库

&nbsp;  - 点击 \*\*Import\*\*



3\. \*\*配置部署\*\*

&nbsp;  - \*\*Framework Preset\*\*: 选择 `VitePress`

&nbsp;  - \*\*Root Directory\*\*: 保持默认

&nbsp;  - \*\*Build Command\*\*: `npm run docs:build`

&nbsp;  - \*\*Output Directory\*\*: `docs/.vitepress/dist`

&nbsp;  - 点击 \*\*Deploy\*\*



4\. \*\*等待部署\*\*

&nbsp;  - 约 1-2 分钟后，你会看到满屏烟花 🎉

&nbsp;  - 获得一个网址（如：`my-knowledge-base.vercel.app`）



::: tip 恭喜！

你的网站现在：

\- ✅ 24/7 在线，全球可访问

\- ✅ 自动更新（修改 GitHub 文件后自动重新部署）

\- ✅ 完全免费

\- ✅ 拥有专属域名

:::



---



\### 方法二：GitHub Pages 部署



如果你更喜欢使用 GitHub Pages：



\#### 1. 创建部署脚本



在项目根目录创建 `.github/workflows/deploy.yml`：



```yaml

name: Deploy to GitHub Pages



on:

&nbsp; push:

&nbsp;   branches:

&nbsp;     - main



jobs:

&nbsp; deploy:

&nbsp;   runs-on: ubuntu-latest

&nbsp;   steps:

&nbsp;     - uses: actions/checkout@v3

&nbsp;     

&nbsp;     - name: Setup Node

&nbsp;       uses: actions/setup-node@v3

&nbsp;       with:

&nbsp;         node-version: 18

&nbsp;         

&nbsp;     - name: Install dependencies

&nbsp;       run: npm install

&nbsp;       

&nbsp;     - name: Build

&nbsp;       run: npm run docs:build

&nbsp;       

&nbsp;     - name: Deploy

&nbsp;       uses: peaceiris/actions-gh-pages@v3

&nbsp;       with:

&nbsp;         github\_token: ${{ secrets.GITHUB\_TOKEN }}

&nbsp;         publish\_dir: docs/.vitepress/dist

```



\#### 2. 启用 GitHub Pages



1\. 在仓库 \*\*Settings\*\* → \*\*Pages\*\*

2\. Source 选择 \*\*GitHub Actions\*\*

3\. 推送代码后自动部署



你的网站地址将是：`https://你的用户名.github.io/my-knowledge-base/`



---



\## 常见问题



\### Q1: npm run docs:dev 报错



\*\*可能原因：\*\*

\- Node.js 版本太低

\- 依赖未正确安装



\*\*解决方案：\*\*

```bash

\# 删除 node\_modules

rm -rf node\_modules



\# 重新安装依赖

npm install



\# 再次启动

npm run docs:dev

```



\### Q2: 修改配置后网站不更新



\*\*解决方案：\*\*

\- 重启开发服务器（按 `Ctrl + C` 停止，然后重新运行 `npm run docs:dev`）



\### Q3: 部署后页面 404



\*\*检查清单：\*\*

\- \[ ] GitHub 仓库是 Public（公开）

\- \[ ] 所有文件已正确上传

\- \[ ] Vercel 配置正确

\- \[ ] 等待几分钟让部署完成



\### Q4: 如何添加新页面？



1\. 在 `docs` 目录下创建新的 `.md` 文件

2\. 在 `config.js` 的 `nav` 或 `sidebar` 中添加链接

3\. 保存后网站会自动更新



---



\## 进阶技巧



\### 自定义样式



在 `docs/.vitepress/theme/` 目录下创建自定义样式：



```css

/\* docs/.vitepress/theme/custom.css \*/

:root {

&nbsp; --vp-c-brand: #646cff;

&nbsp; --vp-c-brand-light: #747bff;

}



.vp-doc h1 {

&nbsp; color: var(--vp-c-brand);

}

```



\### 添加 Google Analytics



在 `config.js` 中添加：



```javascript

export default defineConfig({

&nbsp; head: \[

&nbsp;   \[

&nbsp;     'script',

&nbsp;     { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' }

&nbsp;   ],

&nbsp;   \[

&nbsp;     'script',

&nbsp;     {},

&nbsp;     `window.dataLayer = window.dataLayer || \[];

&nbsp;     function gtag(){dataLayer.push(arguments);}

&nbsp;     gtag('js', new Date());

&nbsp;     gtag('config', 'G-XXXXXXXXXX');`

&nbsp;   ]

&nbsp; ]

})

```



\### 自定义域名



如果你有自己的域名：



1\. \*\*在 Vercel\*\*:

&nbsp;  - Project Settings → Domains

&nbsp;  - 添加你的域名

&nbsp;  - 按提示配置 DNS



2\. \*\*在域名提供商\*\*:

&nbsp;  - 添加 CNAME 记录

&nbsp;  - 指向 `cname.vercel-dns.com`



---



\## 下一步



现在你已经有了一个完整的知识库网站！接下来可以：



1\. \*\*持续更新内容\*\*

&nbsp;  - 每周添加学习笔记

&nbsp;  - 记录项目经验

&nbsp;  - 分享思考和观察



2\. \*\*优化网站\*\*

&nbsp;  - 添加评论功能

&nbsp;  - 集成 RSS 订阅

&nbsp;  - 优化 SEO



3\. \*\*建立社群\*\*

&nbsp;  - 分享到社交媒体

&nbsp;  - 邀请朋友访问

&nbsp;  - 收集反馈改进



---



\## 更多资源



\- \[VitePress 官方文档](https://vitepress.dev/)

\- \[Markdown 语法指南](https://www.markdownguide.org/)

\- \[Vercel 部署文档](https://vercel.com/docs)

\- \[GitHub Actions 文档](https://docs.github.com/en/actions)



---



::: tip 记住

最重要的不是网站有多完美，而是开始记录和分享。不要追求完美，先开始行动！

:::

