---
layout: page
title: 编程技术全景图
---

<ClientOnly>
  <TechLandscape />
</ClientOnly>

<script setup>
import { defineComponent, h } from 'vue'

const TechLandscape = defineComponent({
  name: 'TechLandscape',
  setup() {
    const techData = {
      frontend: {
        title: '前端开发（用户看到的界面）',
        icon: '🎨',
        color: '#61dafb',
        categories: [
          {
            title: '核心语言',
            techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
            hot: [2, 3],
            useCase: '所有网页/Web应用的基础，AI产品的界面层'
          },
          {
            title: '现代框架',
            techs: ['React', 'Next.js', 'Vue', 'Svelte'],
            hot: [0, 1],
            useCase: 'ChatGPT网页版、Notion等复杂交互应用'
          },
          {
            title: '样式工具',
            techs: ['Tailwind CSS', 'Shadcn/ui', 'Bootstrap'],
            hot: [0],
            useCase: '快速构建美观界面，AI工具常用'
          }
        ]
      },
      backend: {
        title: '后端开发（服务器/业务逻辑）',
        icon: '⚙️',
        color: '#68a063',
        categories: [
          {
            title: '主流语言',
            techs: ['Python', 'Node.js', 'Go', 'Java', 'Rust'],
            hot: [0, 1],
            useCase: 'API开发、数据处理、业务逻辑'
          },
          {
            title: 'Web框架',
            techs: ['FastAPI', 'Django', 'Express', 'Spring Boot'],
            hot: [0, 2],
            useCase: '构建RESTful API、处理HTTP请求'
          },
          {
            title: '数据库',
            techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
            hot: [0],
            useCase: '存储用户数据、应用状态'
          }
        ]
      },
      ai: {
        title: 'AI/机器学习开发',
        icon: '🤖',
        color: '#ff6b6b',
        categories: [
          {
            title: 'AI开发语言',
            techs: ['Python', 'R', 'Julia'],
            ai: [0],
            useCase: '几乎所有AI项目都用Python'
          },
          {
            title: '深度学习框架',
            techs: ['PyTorch', 'TensorFlow', 'JAX', 'Keras'],
            ai: [0, 1],
            useCase: '训练AI模型、神经网络开发'
          },
          {
            title: 'LLM应用开发',
            techs: ['LangChain', 'LlamaIndex', 'Anthropic SDK', 'OpenAI API'],
            ai: [0, 1, 2, 3],
            useCase: '构建AI Agent、RAG应用、聊天机器人'
          },
          {
            title: '快速原型工具',
            techs: ['Streamlit', 'Gradio', 'Jupyter'],
            ai: [0, 1],
            useCase: '快速搭建AI演示界面'
          }
        ]
      },
      data: {
        title: '数据处理与分析',
        icon: '📊',
        color: '#ffd93d',
        categories: [
          {
            title: '数据处理库',
            techs: ['Pandas', 'NumPy', 'Polars', 'Spark'],
            hot: [0],
            useCase: '清洗数据、特征工程'
          },
          {
            title: '可视化工具',
            techs: ['Matplotlib', 'Plotly', 'D3.js', 'Tableau'],
            useCase: '数据报表、交互式图表'
          },
          {
            title: '向量数据库',
            techs: ['Pinecone', 'Weaviate', 'Chroma', 'Qdrant'],
            ai: [0, 1, 2, 3],
            useCase: '存储embedding、语义搜索、RAG系统'
          }
        ]
      },
      mobile: {
        title: '移动应用开发',
        icon: '📱',
        color: '#a8dadc',
        categories: [
          {
            title: '原生开发',
            techs: ['Swift', 'Kotlin', 'Objective-C', 'Java'],
            useCase: '性能要求高的App'
          },
          {
            title: '跨平台开发',
            techs: ['React Native', 'Flutter', 'Expo'],
            hot: [0, 1],
            useCase: '一套代码开发iOS+Android'
          }
        ]
      },
      devops: {
        title: '部署与运维',
        icon: '🚀',
        color: '#457b9d',
        categories: [
          {
            title: '容器化',
            techs: ['Docker', 'Kubernetes'],
            hot: [0],
            useCase: '应用打包、环境一致性'
          },
          {
            title: '云平台',
            techs: ['Vercel', 'AWS', 'Google Cloud', 'Azure'],
            hot: [0, 1],
            useCase: '托管应用、数据库、AI模型推理'
          },
          {
            title: 'CI/CD',
            techs: ['GitHub Actions', 'GitLab CI', 'Jenkins'],
            useCase: '自动化测试、部署流程'
          }
        ]
      }
    }

    const timeline = [
      { year: '1990s', title: 'Web诞生', content: 'HTML, CSS, JavaScript基础。这些技术今天仍在使用。' },
      { year: '2000s', title: '动态网站时代', content: 'PHP, Python, Java后端框架。传统企业应用主流技术。' },
      { year: '2010-2015', title: '移动互联网', content: 'iOS/Android原生开发、RESTful API、React诞生。' },
      { year: '2015-2020', title: '云原生与深度学习', content: 'Docker/K8s、PyTorch/TensorFlow成熟。' },
      { year: '2020-2023', title: 'AI基础设施', content: 'Transformer模型爆发、LangChain等工具链出现。' },
      { year: '2023-现在', title: 'AI原生时代', content: 'LLM应用开发、AI Agent框架、向量数据库成为主流。' }
    ]

    const stacks = [
      {
        title: '快速原型',
        color: '#667eea',
        items: ['前端：Streamlit / Gradio', '后端：Python + FastAPI', 'AI：OpenAI API', '部署：Hugging Face']
      },
      {
        title: '生产级应用',
        color: '#4ecdc4',
        items: ['前端：Next.js + React', '后端：Node.js + PostgreSQL', 'AI：LangChain + 向量数据库', '部署：Vercel + AWS']
      },
      {
        title: 'AI研究',
        color: '#ff6b6b',
        items: ['环境：Python + Jupyter', '框架：PyTorch', '数据：Pandas + NumPy', '部署：Docker + GPU云']
      }
    ]

    return { techData, timeline, stacks }
  },
  template: `
    <div class="tech-landscape">
      <div class="header">
        <h1>🗺️ 编程技术全景图</h1>
        <p class="subtitle">AI产品开发视角 - 什么场景用什么技术</p>
      </div>

      <div class="legend-box">
        <h3>📌 图例说明</h3>
        <div class="legend-items">
          <div class="legend-item">
            <div class="legend-color hot-color"></div>
            <span>AI时代热门</span>
          </div>
          <div class="legend-item">
            <div class="legend-color ai-color"></div>
            <span>AI原生技术</span>
          </div>
          <div class="legend-item">
            <div class="legend-color normal-color"></div>
            <span>传统技术</span>
          </div>
        </div>
      </div>

      <div class="category-grid">
        <div 
          v-for="(section, key) in techData" 
          :key="key" 
          class="category"
          :style="{ borderLeftColor: section.color }"
        >
          <div class="category-title">
            <span class="category-icon">{{ section.icon }}</span>
            {{ section.title }}
          </div>
          
          <div v-for="(cat, idx) in section.categories" :key="idx" class="subcategory">
            <div class="subcategory-title">{{ cat.title }}</div>
            <div class="tech-list">
              <span 
                v-for="(tech, techIdx) in cat.techs" 
                :key="techIdx"
                class="tech-tag"
                :class="{
                  'hot': cat.hot && cat.hot.includes(techIdx),
                  'ai': cat.ai && cat.ai.includes(techIdx)
                }"
              >
                {{ tech }}
              </span>
            </div>
            <div class="use-case">💡 {{ cat.useCase }}</div>
          </div>
        </div>
      </div>

      <div class="timeline-section">
        <h3>⏳ 技术演进时间线</h3>
        <div v-for="item in timeline" :key="item.year" class="timeline-item">
          <div class="timeline-year">{{ item.year }}</div>
          <div class="timeline-content">
            <strong>{{ item.title }}</strong> - {{ item.content }}
          </div>
        </div>
      </div>

      <div class="stacks-section">
        <h3>🎯 典型技术栈</h3>
        <div class="stacks-grid">
          <div 
            v-for="(stack, idx) in stacks" 
            :key="idx" 
            class="stack-card"
            :style="{ borderLeftColor: stack.color }"
          >
            <strong :style="{ color: stack.color }">{{ stack.title }}</strong>
            <div class="stack-items">
              <div v-for="(item, i) in stack.items" :key="i">• {{ item }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="advice-section">
        <h3>💡 核心建议</h3>
        <ul>
          <li>✓ 传统技术依然重要：HTML/CSS/JS、Python、数据库等基础不会过时</li>
          <li>✓ AI时代的新增项：LangChain、向量数据库、提示工程是新技能</li>
          <li>✓ 选择原则：快速验证用Streamlit，生产应用用Next.js</li>
          <li>✓ 学习路径：先掌握Python+基础Web，再学AI工具链</li>
        </ul>
      </div>
    </div>
  `
})
</script>

<style>
.tech-landscape {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
  margin: -2rem -1.5rem -4rem;
  width: calc(100% + 3rem);
  min-height: 100vh;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: white;
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
  color: white;
  font-size: 1.1em;
  opacity: 0.95;
}

.legend-box {
  background: white;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.legend-box h3 {
  margin-bottom: 15px;
  color: #333;
}

.legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.hot-color { background: #ff6b6b; }
.ai-color { background: #4ecdc4; }
.normal-color { background: #e9ecef; }

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto 30px;
}

.category {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  border-left: 5px solid;
  transition: transform 0.3s;
}

.category:hover {
  transform: translateY(-5px);
}

.category-title {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
}

.category-icon {
  font-size: 1.5em;
}

.subcategory {
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 12px;
}

.subcategory-title {
  font-weight: bold;
  color: #495057;
  margin-bottom: 8px;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.tech-tag {
  background: #e9ecef;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9em;
  color: #495057;
  transition: all 0.3s;
  cursor: pointer;
}

.tech-tag:hover {
  transform: scale(1.05);
}

.tech-tag.hot {
  background: #ff6b6b;
  color: white;
}

.tech-tag.ai {
  background: #4ecdc4;
  color: white;
}

.use-case {
  font-size: 0.85em;
  color: #6c757d;
  font-style: italic;
  margin-top: 8px;
  padding-left: 10px;
  border-left: 3px solid #dee2e6;
}

.timeline-section, .stacks-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  max-width: 1400px;
  margin: 25px auto;
}

.timeline-section h3, .stacks-section h3 {
  margin-bottom: 15px;
  color: #333;
}

.timeline-item {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  align-items: flex-start;
}

.timeline-year {
  background: #667eea;
  color: white;
  padding: 8px 15px;
  border-radius: 8px;
  font-weight: bold;
  min-width: 90px;
  text-align: center;
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
  background: #f8f9fa;
  padding: 12px;
  border-radius: 8px;
  color: #333;
}

.stacks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.stack-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.stack-items {
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
  line-height: 1.8;
}

.advice-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  color: white;
}

.advice-section h3 {
  margin-bottom: 15px;
}

.advice-section ul {
  list-style: none;
  padding: 0;
}

.advice-section li {
  margin-bottom: 10px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .tech-landscape {
    margin: -1rem -0.75rem -2rem;
    width: calc(100% + 1.5rem);
    padding: 20px 10px;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
  }
  
  .header h1 {
    font-size: 1.8em;
  }
  
  .timeline-item {
    flex-direction: column;
  }
  
  .timeline-year {
    width: 100%;
  }
}
</style>
