# RAG 项目部署到 Hugging Face 完整指南

::: tip 指南概述
本指南将教你如何将基于 RAG（Retrieval-Augmented Generation）的智能问答系统部署到 Hugging Face Spaces，完全免费！
:::

## 什么是 RAG？

RAG（Retrieval-Augmented Generation，检索增强生成）是一种让 AI 能够查询特定知识库的技术。通过预加载你的资料作为知识库，AI 每次查询时会自动检索相关信息，给出更准确的回答。

**应用场景：**
- 企业知识库问答
- 项目文档助手
- 客服机器人
- 个人笔记助手

---

## 为什么选择 Hugging Face？

::: info Hugging Face 优势
- ✅ **完全免费**：提供免费 GPU 和免费 API 额度
- ✅ **零配置**：自动部署，无需服务器运维
- ✅ **公开访问**：获得专属链接，可分享给任何人
- ✅ **易于更新**：直接修改文件即可重新部署
:::

---

## 前置准备

### 需要的材料

- [ ] Hugging Face 账号（免费注册）
- [ ] OpenAI API Key（用于调用 GPT 模型）
- [ ] 你的知识库文档（如 `oraclex_info.txt`）
- [ ] Python 代码文件（`app.py`）

### 注册 Hugging Face 账号

1. 访问 [Hugging Face 注册页面](https://huggingface.co/join)
2. 填写邮箱、用户名和密码
3. 验证邮箱
4. 完成注册（完全免费）

---

## 部署步骤

### 第一步：创建 Space

1. **登录 Hugging Face**
   - 访问 [Hugging Face 首页](https://huggingface.co/)
   - 使用你的账号登录

2. **创建新的 Space**
   - 点击右上角头像 → **"New Space"**

3. **填写 Space 信息**
   - **Space name**: `oraclex-rag`（或你喜欢的名字）
   - **License**: MIT
   - **Select SDK**: Gradio
   - **Hardware**: CPU basic（免费）
   
4. **创建 Space**
   - 点击 **"Create Space"** 按钮
   - 等待 Space 初始化完成

---

### 第二步：准备项目文件

你需要准备以下 4 个文件：

#### 1. `app.py` - 主程序文件

```python
import gradio as gr
import os
import requests

# 初始化
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("请设置OPENAI_API_KEY环境变量")

# OpenAI API基础URL
BASE_URL = "https://api.openai.com/v1"
HEADERS = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

# 加载文档
def load_documents():
    try:
        with open("oraclex_info.txt", "r", encoding="utf-8") as f:
            content = f.read()
        chunks = [chunk.strip() for chunk in content.split('\n\n') if chunk.strip()]
        return chunks
    except FileNotFoundError:
        return ["找不到文档文件 oraclex_info.txt"]

doc_chunks = load_documents()

# 生成嵌入向量
def create_embedding(text):
    """使用HTTP请求生成嵌入"""
    response = requests.post(
        f"{BASE_URL}/embeddings",
        headers=HEADERS,
        json={
            "input": text,
            "model": "text-embedding-3-small"
        },
        timeout=30
    )
    
    if response.status_code != 200:
        raise Exception(f"API错误: {response.status_code} - {response.text}")
    
    data = response.json()
    return data["data"][0]["embedding"]

# 生成嵌入向量（一次性完成）
print("正在处理文档...")
doc_embeddings = []
for i, chunk in enumerate(doc_chunks):
    try:
        embedding = create_embedding(chunk)
        doc_embeddings.append(embedding)
        print(f"已处理 {i+1}/{len(doc_chunks)}")
    except Exception as e:
        print(f"处理文档片段 {i+1} 时出错: {str(e)}")
        doc_embeddings.append([0] * 1536)

print(f"✅ 已加载 {len(doc_chunks)} 个文档片段")

# 计算余弦相似度
def cosine_similarity(vec1, vec2):
    dot_product = sum(a * b for a, b in zip(vec1, vec2))
    magnitude1 = sum(a * a for a in vec1) ** 0.5
    magnitude2 = sum(b * b for b in vec2) ** 0.5
    if magnitude1 == 0 or magnitude2 == 0:
        return 0
    return dot_product / (magnitude1 * magnitude2)

# 检索相关文档
def retrieve_documents(question, top_k=3):
    try:
        question_embedding = create_embedding(question)
    except Exception as e:
        print(f"生成问题嵌入时出错: {str(e)}")
        return doc_chunks[:top_k]
    
    similarities = []
    for i, doc_emb in enumerate(doc_embeddings):
        similarity = cosine_similarity(question_embedding, doc_emb)
        similarities.append((i, similarity, doc_chunks[i]))
    
    similarities.sort(key=lambda x: x[1], reverse=True)
    return [doc for _, _, doc in similarities[:top_k]]

# 生成回答
def generate_answer(prompt):
    """使用HTTP请求生成回答"""
    response = requests.post(
        f"{BASE_URL}/chat/completions",
        headers=HEADERS,
        json={
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.7,
            "max_tokens": 500
        },
        timeout=30
    )
    
    if response.status_code != 200:
        raise Exception(f"API错误: {response.status_code} - {response.text}")
    
    data = response.json()
    return data["choices"][0]["message"]["content"]

# 问答函数
def ask_question(question, history):
    if not question.strip():
        return history + [("", "请输入问题")]
    
    try:
        # 检索相关文档
        relevant_docs = retrieve_documents(question)
        context = "\n\n".join(relevant_docs)
        
        # 构建提示词
        prompt = f"""请根据以下参考信息回答问题。如果参考信息中没有答案，请说"我没有找到相关信息"。

参考信息：
{context}

问题：{question}

请用简洁友好的语气回答："""
        
        # 生成回答
        answer = generate_answer(prompt)
        
        # 添加参考来源
        answer += f"\n\n---\n📚 参考资料片段：\n{context[:200]}..."
        
        return history + [(question, answer)]
    
    except Exception as e:
        error_msg = f"❌ 出错了: {str(e)}"
        print(error_msg)
        return history + [(question, error_msg)]

# 创建界面
with gr.Blocks(title="OracleX智能问答", theme=gr.themes.Soft()) as demo:
    gr.Markdown("""
    # 🤖 OracleX项目智能问答系统
    
    基于RAG技术，随时了解OracleX项目信息
    """)
    
    with gr.Row():
        with gr.Column(scale=2):
            chatbot = gr.Chatbot(
                label="对话历史",
                height=500,
                bubble_full_width=False
            )
            
            with gr.Row():
                question_input = gr.Textbox(
                    label="",
                    placeholder="问我关于OracleX的任何问题...",
                    scale=4
                )
                submit_btn = gr.Button("发送", variant="primary", scale=1)
            
            clear_btn = gr.Button("清空对话")
        
        with gr.Column(scale=1):
            gr.Markdown(f"""
            ### 📊 系统信息
            
            **文档片段数**: {len(doc_chunks)}
            
            ### 💡 使用提示
            
            - 🔍 问具体问题效果更好
            - 📝 可以问项目介绍、团队、融资等
            - 🌐 支持中英文问答
            - 💬 支持连续对话
            
            ### 示例问题
            
            - OracleX是什么项目?
            - 团队有多少人?
            - 融资情况如何?
            - 有哪些合作伙伴?
            """)
    
    # 绑定事件
    submit_btn.click(
        fn=ask_question,
        inputs=[question_input, chatbot],
        outputs=chatbot
    ).then(
        lambda: "",
        outputs=question_input
    )
    
    question_input.submit(
        fn=ask_question,
        inputs=[question_input, chatbot],
        outputs=chatbot
    ).then(
        lambda: "",
        outputs=question_input
    )
    
    clear_btn.click(lambda: [], outputs=chatbot)

# 启动应用
if __name__ == "__main__":
    demo.launch()
```

#### 2. `requirements.txt` - 依赖库清单

```txt
gradio
openai
requests
```

#### 3. `oraclex_info.txt` - 你的知识库文档

```txt
# 在这里放入你的项目文档内容
# 每个段落用空行分隔

OracleX是一个区块链预言机项目...

团队成员包括...

融资情况：已完成A轮融资...
```

#### 4. `README.md` - 项目说明（可选）

```markdown
# OracleX RAG 智能问答系统

基于 RAG 技术的项目文档智能问答助手。

## 功能
- 自动检索相关文档
- 智能生成回答
- 支持中英文对话
```

---

### 第三步：上传文件

1. **进入 Files 页面**
   - 在 Space 页面，点击 **"Files"** 标签

2. **上传文件**
   - 点击 **"Add file"** → **"Upload files"**
   - 依次上传以下文件：
     - `app.py`
     - `requirements.txt`
     - `oraclex_info.txt`
     - `README.md`（可选）

3. **提交更改**
   - 在页面底部填写提交信息：`Initial commit`
   - 点击 **"Commit changes to main"**

::: warning 重要提醒
**不要**上传包含 API Key 的文件（如 `.env`），API Key 应该通过 Secrets 配置！
:::

---

### 第四步：配置 API 密钥（Secrets）

这是最重要的一步，确保 API 密钥安全！

1. **进入 Settings**
   - 在 Space 页面，点击 **"Settings"** 标签

2. **添加 Secret**
   - 找到 **"Repository secrets"** 部分
   - 点击 **"New secret"**

3. **填写密钥信息**
   - **Name**: `OPENAI_API_KEY`
   - **Value**: 你的 OpenAI API Key（如 `sk-proj-xxx...`）
   - 点击 **"Add"**

::: tip 为什么要用 Secrets？
Secrets 是加密存储的环境变量，不会在代码中暴露，保护你的 API Key 不被泄露。
:::

---

### 第五步：等待部署

1. **自动构建**
   - Space 会自动开始构建（约 2-3 分钟）
   - 你可以在 **"Logs"** 标签查看构建进度

2. **检查状态**
   - 构建成功后，状态会变为 **"Running"**
   - 页面会显示你的应用界面

3. **获取链接**
   - 你的应用地址：`https://huggingface.co/spaces/你的用户名/oraclex-rag`
   - 可以分享给任何人使用！

---

## 常见错误及解决方案

### 错误 1: SyntaxError: invalid character '：' (U+FF1A)

::: danger 问题描述
```
File "/app/app.py", line 215
确保内容是：
     ^
SyntaxError: invalid character '：' (U+FF1A)
```
:::

**原因：** 代码中使用了中文标点符号（全角冒号 `：`）

**解决方案：**

1. **检查代码中的标点符号**
   - 确保所有冒号都是英文半角 `:`
   - 不要使用中文全角 `：`

2. **常见位置：**
   ```python
   # ❌ 错误（中文冒号）
   def load_documents()：
   
   # ✅ 正确（英文冒号）
   def load_documents():
   ```

3. **快速修复：**
   - 使用查找替换功能
   - 查找：`：`（中文冒号）
   - 替换：`:`（英文冒号）

### 错误 2: FileNotFoundError: oraclex_info.txt

**原因：** 知识库文档文件未上传

**解决方案：**
1. 确认 `oraclex_info.txt` 已上传到 Space
2. 检查文件名是否完全一致（区分大小写）
3. 确保文件不为空

### 错误 3: OpenAI API Error 401

**原因：** API Key 无效或未正确配置

**解决方案：**
1. 检查 Secrets 中的 `OPENAI_API_KEY` 是否正确
2. 确认 API Key 有效且有余额
3. 重新添加 Secret 并重启 Space

### 错误 4: 内存不足 (Out of Memory)

**原因：** 文档太大，超出免费 CPU 资源限制

**解决方案：**
1. 减少文档大小（建议 < 1MB）
2. 将文档分块处理
3. 考虑升级到更高的 Hardware tier

---

## 测试你的应用

### 基本功能测试

1. **访问应用**
   - 打开你的 Space 链接
   - 确认界面正常显示

2. **提问测试**
   - 在输入框输入问题
   - 点击"发送"按钮
   - 检查是否返回合理答案

3. **示例问题：**
   ```
   - OracleX是什么项目？
   - 团队有多少人？
   - 融资情况如何？
   - 主要技术特点是什么？
   ```

### 性能测试

- ⏱️ **响应速度**：通常 2-5 秒
- 📊 **准确度**：答案是否基于文档内容
- 🔄 **连续对话**：多轮对话是否正常

---

## 更新和维护

### 更新文档内容

1. **编辑文件**
   - 在 Space 页面点击 `oraclex_info.txt`
   - 点击铅笔图标编辑
   - 修改内容
   - 点击 "Commit changes"

2. **自动重新部署**
   - Space 会自动检测更改
   - 重新构建（约 1-2 分钟）
   - 新内容即可生效

### 更新代码

同样的流程：
1. 编辑 `app.py`
2. 修改代码
3. 提交更改
4. 等待自动部署

### 暂停和重启

- **暂停**：Settings → Factory reboot → Pause
- **重启**：Settings → Factory reboot → Restart

---

## 优化建议

### 提高准确度

1. **优化文档结构**
   - 使用清晰的段落分隔
   - 每个段落聚焦一个主题
   - 添加标题和关键词

2. **调整检索参数**
   ```python
   # 增加检索的文档片段数量
   relevant_docs = retrieve_documents(question, top_k=5)  # 从3改为5
   ```

3. **优化提示词**
   ```python
   prompt = f"""你是OracleX项目的专业顾问。
   请基于以下资料准确回答问题，如果资料中没有相关信息，请诚实说明。
   
   资料：{context}
   问题：{question}
   
   回答："""
   ```

### 降低成本

1. **使用更便宜的模型**
   ```python
   # 改用 GPT-3.5-turbo（已经是最便宜的了）
   "model": "gpt-3.5-turbo"
   ```

2. **限制 token 数量**
   ```python
   "max_tokens": 300  # 从500降到300
   ```

3. **缓存常见问题**
   - 对高频问题预先生成答案
   - 存储在文档中直接返回

### 增强用户体验

1. **添加加载动画**
   ```python
   with gr.Row():
       status = gr.Textbox(label="状态", value="就绪")
   ```

2. **添加问题建议**
   ```python
   examples = gr.Examples(
       examples=[
           "OracleX是什么？",
           "团队成员有哪些？",
           "如何联系你们？"
       ],
       inputs=question_input
   )
   ```

3. **改进界面设计**
   - 使用自定义主题
   - 添加品牌 Logo
   - 优化移动端显示

---

## 进阶功能

### 支持多文档上传

```python
def load_multiple_documents(file_list):
    all_chunks = []
    for file in file_list:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
            chunks = [chunk.strip() for chunk in content.split('\n\n')]
            all_chunks.extend(chunks)
    return all_chunks
```

### 添加对话历史记忆

```python
def ask_with_history(question, history):
    # 获取最近3轮对话作为上下文
    recent_context = "\n".join([
        f"Q: {q}\nA: {a}" 
        for q, a in history[-3:] 
        if q and a
    ])
    
    prompt = f"""对话历史：
{recent_context}

当前问题：{question}
...
"""
```

### 集成向量数据库

使用 ChromaDB 或 FAISS 替代简单的余弦相似度：

```python
import chromadb

# 创建向量数据库
client = chromadb.Client()
collection = client.create_collection("oraclex_docs")

# 添加文档
collection.add(
    documents=doc_chunks,
    ids=[str(i) for i in range(len(doc_chunks))]
)

# 检索
results = collection.query(
    query_texts=[question],
    n_results=3
)
```

---

## 成本估算

### OpenAI API 费用

**Embedding（文本嵌入）：**
- 模型：`text-embedding-3-small`
- 价格：$0.00002 / 1K tokens
- 示例：1000 个文档片段 ≈ $0.02

**Chat Completion（对话生成）：**
- 模型：`gpt-3.5-turbo`
- 价格：$0.0015 / 1K tokens（输入）+ $0.002 / 1K tokens（输出）
- 示例：100 次对话 ≈ $0.30

**总成本：** 约 $5-10/月（中等使用量）

### Hugging Face 费用

- CPU Basic Space：**完全免费** ✅
- 存储空间：50GB 免费
- 带宽：无限制

---

## 检查清单

部署完成后，确认以下内容：

- [ ] Space 状态显示 "Running"
- [ ] 应用界面正常显示
- [ ] 能够输入问题并获得回答
- [ ] 答案基于文档内容
- [ ] API Key 安全存储在 Secrets 中
- [ ] 所有文件已正确上传
- [ ] 日志中无错误信息
- [ ] 可以分享链接给他人使用

---

## 更多资源

- [Hugging Face Spaces 官方文档](https://huggingface.co/docs/hub/spaces)
- [Gradio 官方文档](https://gradio.app/docs/)
- [OpenAI API 文档](https://platform.openai.com/docs/)
- [RAG 技术详解](https://www.anthropic.com/research/retrieval-augmented-generation)

---

::: tip 下一步
部署成功后，你可以：
1. 添加更多知识库文档
2. 优化界面和交互体验
3. 集成到你的网站或产品中
4. 分享给团队成员使用
:::
