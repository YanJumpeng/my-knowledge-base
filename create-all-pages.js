// 自动创建所有页面文件的脚本
const fs = require('fs');
const path = require('path');

// 1. 创建目录函数
function createDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ 创建目录: ${dir}`);
  }
}

// 2. 创建文件函数
function createFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ 创建文件: ${filePath}`);
}

// 3. 定义目录
const dirs = [
  'docs/crypto',
  'docs/ai-learning',
  'docs/projects',
  'docs/resources'
];
dirs.forEach(createDir);

// 4. 定义页面内容
const pages = {
  'docs/contact.md': `# 联系我\n\n欢迎交流讨论，一起学习成长！\n\n### 社交媒体\n- **Twitter**: [@你的推特](https://twitter.com/username)\n- **Email**: your.email@example.com`,
  
  'docs/crypto/index.md': `# 加密投研精选\n\n欢迎来到加密投研板块！这里汇集了我在加密行业 3 年的投研经验和思考。`,
  
  'docs/crypto/methodology.md': `# 投资方法论\n\n这是我在加密行业摸爬滚打 3 年总结的投资方法论。`,
  
  'docs/crypto/reports.md': `# 过往研报\n\n精选研报和项目分析。`,
  
  'docs/crypto/observation.md': `# 行业观察\n\n记录我对加密市场的观察和思考。`,
  
  'docs/ai-learning/index.md': `# AI学习笔记\n\n从零开始学习 AI + Python 的全过程。`,
  
  'docs/ai-learning/week1.md': `# Week 1 - Python基础回顾\n\n第一周主要是复习基础，系统梳理细节。`,
  
  'docs/ai-learning/week2.md': `# Week 2 - AI API入门\n\n第一次调用AI API，很激动！`,
  
  'docs/projects/index.md': `# 项目实战\n\n记录我做过的所有项目，从想法到实现。`,
  
  'docs/projects/project1.md': `# 项目1：个人知识库网站\n\n使用VitePress搭建的个人知识库网站。`,
  
  'docs/resources/index.md': `# 工具与资源\n\n精选的AI工具、编程资源和加密资源导航。`,
  
  'docs/resources/ai-tools.md': `# AI工具推荐\n\n- **ChatGPT**: 最强的通用AI助手\n- **Claude**: 长文本处理专家\n- **GitHub Copilot**: IDE集成必备`
};

// 5. 执行循环创建文件
Object.entries(pages).forEach(([filePath, content]) => {
  createFile(filePath, content);
});

console.log('\n✨ 所有页面创建成功！现在可以运行 npm run docs:dev 了。');