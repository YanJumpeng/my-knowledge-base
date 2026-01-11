# Claude Artifacts 独立网站部署指南

::: tip 指南概述
本指南将帮助你将 Claude 生成的 Artifacts（HTML/React 代码）部署为独立的专业网站。
:::

## 概述

使用 Vercel 部署 Claude Artifact 是将其转变为专业、高性能独立网站的最佳方案。Vercel 特别适合处理 Claude 生成的 React (.tsx) 或 HTML 代码，提供全球 CDN 加速、自动 HTTPS 和持续部署功能。

::: info 为什么选择 Vercel？
- **全球 CDN 加速**：相比 Artifact.Ninja 等服务，访问速度显著提升 — 内容分发网络覆盖全球，确保快速加载
- **自定义域名支持**：可绑定你自己的域名（如 www.yourname.com）
- **自动部署**：修改 GitHub 代码后自动重新发布，无需手动操作
- **免费额度**：个人项目完全免费，包含 HTTPS 证书
:::

## 部署方案

### 方案 A：纯 HTML/CSS/JavaScript 代码（最简单）

::: details 📌 适用场景
你的 Artifact 是单个 HTML 文件，包含内联的 CSS 和 JavaScript。
:::

**部署步骤：**

1. **创建项目文件夹**
   - 在本地电脑新建一个文件夹（如 `my-artifact`）

2. **保存代码**
   - 将 Claude 生成的代码保存为 `index.html`，放入该文件夹

3. **访问 Vercel**
   - 打开 [vercel.com/dashboard](https://vercel.com/dashboard)
   - 使用 GitHub/GitLab/Bitbucket 账号登录

4. **拖拽部署**
   - 将整个文件夹拖拽到页面中央的上传区域

5. **完成**
   - 等待几秒钟，Vercel 将生成一个以 `.vercel.app` 结尾的网址

---

### 方案 B：React (.tsx/.jsx) 组件（推荐）

::: details 📌 适用场景
Claude 生成的是 React 组件代码（文件扩展名为 .tsx 或 .jsx），通常包含复杂交互和现代 UI 库（如 Tailwind CSS）。
:::

#### 步骤 1：使用 GitHub 模板（无需编程基础）

1. **访问模板仓库**
   - 打开 [github.com/HamedMP/ArtifactbinTemplate](https://github.com/HamedMP/ArtifactbinTemplate)
   - 这是专门为 Claude Artifacts 优化的 Next.js 模板

2. **创建你的仓库**
   - 点击页面右上角的 **"Use this template"** → **"Create a new repository"**

3. **命名并创建**
   - 给仓库起一个名字（如 `my-claude-app`）
   - 选择 Public，点击 **"Create repository"**

4. **编辑代码文件**
   - 在你的新仓库中，导航到 `src/app/page.tsx` 文件

5. **替换代码**
   - 点击编辑按钮（铅笔图标）
   - 删除文件中的所有内容，粘贴 Claude 生成的 React 代码

6. **添加客户端指令（重要）**
   - 在文件最顶部添加一行：
   ```tsx
   "use client";
   ```
   - 然后点击 **"Commit changes"**

#### 步骤 2：连接 Vercel 部署

1. **访问 Vercel**
   - 打开 [vercel.com/new](https://vercel.com/new)

2. **导入仓库**
   - 点击 **"Import Git Repository"**
   - 连接你的 GitHub 账号（如果尚未连接）

3. **选择项目**
   - 从列表中选择你刚创建的仓库（如 `my-claude-app`）

4. **部署配置**
   - 保持默认设置（Vercel 会自动识别 Next.js 项目）
   - 直接点击 **"Deploy"**

5. **等待完成**
   - 约 1-2 分钟后，你的 React 应用即可上线
   - 获得一个 `.vercel.app` 网址

---

## 其他部署方案

### 使用 Artifact.Ninja（最快速）

::: details 📌 适用场景
需要立即预览效果，不需要自定义域名或长期维护。
:::

**操作步骤：**
- 访问 [artifact.ninja](https://artifact.ninja)
- 复制 Claude 生成的完整代码
- 粘贴到网站中，即可生成无广告、无品牌标识的静态网页

---

### 使用 GitHub Pages（免费永久）

::: details 📌 适用场景
纯 HTML 项目，希望使用 GitHub 提供的免费托管（如 username.github.io）。
:::

**部署步骤：**

1. **下载代码**
   - 在 Claude Artifact 窗口点击下载图标，或复制全部代码

2. **创建 GitHub 仓库**
   - 在 GitHub 创建新仓库
   - 命名为 `username.github.io`（替换 username 为你的 GitHub 用户名）

3. **上传文件**
   - 将代码保存为 `index.html` 并上传到仓库根目录

4. **启用 Pages**
   - 在仓库 Settings → Pages 中
   - 将 Source 设为 main 分支
   - 保存后即可访问 `https://username.github.io`

---

### 使用 Claude 官方发布功能

::: details 📌 适用场景
快速分享给他人查看，不需要自定义域名。
:::

**操作步骤：**
- 在 Artifact 窗口点击 **"Publish"** 按钮
- 点击 **"Publish & Copy Link"**
- 获得 claude.site 域名下的网页链接

---

## 高级：React 组件转换

::: details 📌 适用场景
Claude 生成的 React 代码（.tsx 文件）需要手动集成到 Next.js 项目中。
:::

### 使用命令行工具（适合开发者）

1. **安装工具**
   ```bash
   npm install -g claude-artifact-runner
   ```

2. **构建 HTML**
   ```bash
   npx run-claude-artifact build your-file.tsx
   ```
   - 将 React 代码转换为单文件 `index.html`

---

## 最佳实践

::: tip 专业建议
- **版本控制**：始终使用 Git 仓库管理代码，方便回滚和协作
- **环境变量**：如需 API 密钥，在 Vercel 项目设置中配置环境变量
- **性能优化**：Vercel 自动启用 CDN 和图片优化，无需额外配置
- **自定义域名**：在 Vercel 项目设置 → Domains 中添加你购买的域名，按提示配置 DNS 记录
:::

---

## 常见问题

| 问题 | 解决方案 |
|------|----------|
| React 代码报错 | 确保文件顶部添加了 `"use client";`，检查是否缺少依赖库 |
| 部署后样式丢失 | 检查 CSS 文件路径是否正确，Vercel 部署时会自动处理 Tailwind CSS |
| 构建失败 | 查看 Vercel 的构建日志，通常是依赖安装失败或代码语法错误 |
| 无法访问网站 | 等待 DNS 传播（自定义域名），或检查 Vercel 项目状态是否为 Ready |

---

## 更多资源

- [Vercel 官方文档](https://vercel.com/docs)
- [Next.js 文档](https://nextjs.org/docs)
- [GitHub Pages 指南](https://pages.github.com)

---

::: warning 注意事项
- 确保 React 组件代码添加了 `"use client";` 指令
- Vercel 免费计划有使用限制，个人项目通常足够
- 自定义域名需要在域名提供商处配置 DNS 记录
:::