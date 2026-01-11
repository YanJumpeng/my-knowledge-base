# GitHub Pages 快速部署指南

::: tip 指南概述
本指南将教你如何将 HTML 文件快速部署到 GitHub Pages，让你的项目拥有一个免费的在线访问地址。
:::

## 前置准备

### 需要的材料
- 你的 HTML 文件（如 `programming_landscape.html`）
- GitHub 账号
- Git 已安装在电脑上

### 检查 Git 是否安装

打开命令行，输入：
```bash
git --version
```

如果显示版本号，说明已安装。如果没有，请访问 [Git 官网](https://git-scm.com/downloads)下载安装。

---

## 方法一：命令行部署（推荐）

::: details 📌 适用场景
适合熟悉命令行操作的用户，速度最快。
:::

### 步骤 1：在 GitHub 创建仓库

1. 访问 [GitHub 新建仓库页面](https://github.com/new)
2. **Repository name**: `tech-landscape`（或你的项目名）
3. **Description**: `Interactive Technology Landscape Visualization`
4. 选择 **Public**（公开）
5. ⚠️ **不要勾选任何选项**（README、.gitignore、license）
6. 点击 **"Create repository"**

### 步骤 2：创建本地项目文件夹

```bash
# 进入桌面（或你喜欢的位置）
cd Desktop

# 创建项目文件夹
mkdir tech-landscape
cd tech-landscape
```

### 步骤 3：复制 HTML 文件

**Windows 用户：**
```bash
# 从下载文件夹复制
copy "%USERPROFILE%\Downloads\programming_landscape.html" index.html
```

**Mac/Linux 用户：**
```bash
# 从下载文件夹复制
cp ~/Downloads/programming_landscape.html index.html
```

::: warning 重要提示
文件名必须是 `index.html`，这样 GitHub Pages 才能正确识别为首页。
:::

### 步骤 4：初始化 Git 并提交

```bash
# 初始化 Git 仓库
git init

# 配置用户信息（如果是第一次使用 Git）
git config --global user.name "你的用户名"
git config --global user.email "your-email@example.com"

# 添加文件到暂存区
git add index.html

# 提交到本地仓库
git commit -m "Add tech landscape visualization"
```

### 步骤 5：连接远程仓库并推送

```bash
# 连接到 GitHub 远程仓库（替换为你的用户名和仓库名）
git remote add origin https://github.com/YanJumpeng/tech-landscape.git

# 重命名分支为 main
git branch -M main

# 推送到 GitHub
git push -u origin main
```

::: tip Personal Access Token
如果 `git push` 要求输入密码，GitHub 现在需要使用 Personal Access Token（PAT）而不是账户密码。

**如何创建 Token：**
1. 访问 [GitHub Token 设置](https://github.com/settings/tokens/new)
2. Note: `git-access`
3. Expiration: 90 days（或更长）
4. 勾选 **repo** 权限
5. 点击 "Generate token"
6. **立即复制** token（离开页面后无法再看到）

**使用 Token：**
- Username: 你的 GitHub 用户名
- Password: 粘贴你刚才复制的 token
:::

### 步骤 6：启用 GitHub Pages

1. 访问你的仓库设置页面：`https://github.com/你的用户名/tech-landscape/settings/pages`
2. 在 **"Source"** 部分：
   - Branch: 选择 `main`
   - Folder: 选择 `/ (root)`
3. 点击 **"Save"**
4. 等待几分钟，页面会显示你的网站地址

::: info 部署完成
你的网站地址将是：`https://你的用户名.github.io/tech-landscape/`

例如：`https://yanjumpeng.github.io/tech-landscape/`
:::

---

## 方法二：GitHub 网页端部署（最简单）

::: details 📌 适用场景
不想使用命令行，更喜欢可视化操作的用户。
:::

### 步骤 1：创建仓库

1. 访问 [GitHub 新建仓库页面](https://github.com/new)
2. Repository name: `tech-landscape`
3. 选择 **Public**
4. 这次可以勾选 ✅ **"Add a README file"**
5. 点击 **"Create repository"**

### 步骤 2：上传文件

1. 在仓库页面，点击 **"Add file"** → **"Upload files"**
2. 将你的 `programming_landscape.html` 拖拽到页面中
3. **重要**：上传后，点击文件名编辑，将其重命名为 `index.html`
4. 或者在上传前就先重命名文件

### 步骤 3：提交文件

1. 滚动到页面底部
2. Commit message: `Add tech landscape visualization`
3. 点击 **"Commit changes"**

### 步骤 4：启用 GitHub Pages

（同方法一的步骤 6）

---

## 方法三：使用 GitHub Desktop（最友好）

::: details 📌 适用场景
想要图形界面但又想学习 Git 工作流的用户。
:::

### 步骤 1：安装 GitHub Desktop

下载并安装：[GitHub Desktop 官网](https://desktop.github.com/)

### 步骤 2：创建新仓库

1. 打开 GitHub Desktop
2. 点击 **"File"** → **"New repository"**
3. Name: `tech-landscape`
4. Local path: 选择你想保存的位置
5. 点击 **"Create repository"**

### 步骤 3：添加文件

1. 点击 **"Show in Explorer"**（Windows）或 **"Show in Finder"**（Mac）
2. 将 `programming_landscape.html` 复制到这个文件夹
3. 重命名为 `index.html`

### 步骤 4：提交并发布

1. 回到 GitHub Desktop，左侧会显示文件变化
2. 左下角 Summary: `Add tech landscape visualization`
3. 点击 **"Commit to main"**
4. 点击 **"Publish repository"**
5. 确保勾选 **Public**
6. 点击 **"Publish repository"**

### 步骤 5：启用 GitHub Pages

（同方法一的步骤 6）

---

## 快速命令参考

### 完整部署流程（一次性命令）

**Windows PowerShell:**
```powershell
cd Desktop; mkdir tech-landscape; cd tech-landscape; copy "$env:USERPROFILE\Downloads\programming_landscape.html" index.html; git init; git add index.html; git commit -m "Add tech landscape"; git remote add origin https://github.com/YanJumpeng/tech-landscape.git; git branch -M main; git push -u origin main
```

**Mac/Linux:**
```bash
cd ~/Desktop && mkdir tech-landscape && cd tech-landscape && cp ~/Downloads/programming_landscape.html index.html && git init && git add index.html && git commit -m "Add tech landscape" && git remote add origin https://github.com/YanJumpeng/tech-landscape.git && git branch -M main && git push -u origin main
```

---

## 未来如何更新

### 使用命令行

```bash
# 进入项目文件夹
cd Desktop/tech-landscape

# 编辑 index.html 后：
git add index.html
git commit -m "Update visualization"
git push
```

### 使用 GitHub Desktop

1. 编辑文件
2. 打开 GitHub Desktop
3. 查看更改
4. 填写提交信息
5. 点击 "Commit to main"
6. 点击 "Push origin"

### 使用 GitHub 网页端

1. 访问仓库
2. 点击 `index.html`
3. 点击铅笔图标编辑
4. 修改内容
5. 点击 "Commit changes"

---

## 添加自定义域名（可选）

如果你有自己的域名：

### 在 GitHub 设置

1. Settings → Pages
2. Custom domain: 输入 `tech.yourname.com`
3. 点击 Save

### 在域名提供商设置 DNS

添加 CNAME 记录：
```
Type: CNAME
Name: tech
Value: 你的用户名.github.io
```

等待 DNS 传播（通常几分钟到几小时）。

---

## 常见问题

### Q1: git push 要求输入密码怎么办？

GitHub 不再支持密码认证，需要使用 Personal Access Token。

**解决方案：**
1. 访问 [Token 生成页面](https://github.com/settings/tokens/new)
2. 创建新 token，勾选 `repo` 权限
3. 复制 token
4. 在推送时，用户名输入 GitHub 用户名，密码输入 token

### Q2: 网站显示 404 错误

**可能原因：**
- 文件名不是 `index.html`
- Pages 没有正确启用
- 需要等待部署完成

**解决方案：**
1. 确认文件名是 `index.html`（大小写敏感）
2. 检查 Settings → Pages 配置
3. 等待 5-10 分钟后重试
4. 清除浏览器缓存

### Q3: 样式或功能不正常

**解决方案：**
1. 按 F12 打开浏览器开发者工具
2. 查看 Console 标签的错误信息
3. 确保所有资源路径正确
4. 检查是否使用了相对路径

### Q4: fatal: remote origin already exists

**解决方案：**
```bash
# 删除现有的 origin
git remote remove origin

# 重新添加
git remote add origin https://github.com/你的用户名/仓库名.git
```

---

## 检查清单

部署完成后，验证以下内容：

- [ ] 网站可以正常访问
- [ ] 所有功能正常工作
- [ ] 样式加载完整
- [ ] 移动端显示正常
- [ ] 仓库设置中 Pages 已启用
- [ ] 仓库中确实有 `index.html` 文件

---

## 项目结构建议

如果你的项目包含多个文件：

```
tech-landscape/
├── index.html          # 主页面（必需）
├── style.css           # 样式文件
├── script.js           # JavaScript 文件
├── images/             # 图片文件夹
│   └── logo.png
└── README.md           # 项目说明
```

---

## 更多资源

- [GitHub Pages 官方文档](https://pages.github.com/)
- [Git 官方教程](https://git-scm.com/book/zh/v2)
- [GitHub Desktop 文档](https://docs.github.com/en/desktop)

---

::: warning 重要提示
- 确保仓库是 **Public**（公开），Private 仓库需要付费才能使用 Pages
- 文件名必须是 `index.html`，不能是其他名字
- 第一次部署需要等待 5-10 分钟
- 每次推送更新后，网站会在 1-2 分钟内自动更新
:::