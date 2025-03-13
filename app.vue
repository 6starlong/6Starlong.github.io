<script setup>
onMounted(() => {
  const typingElements = document.querySelectorAll('.typing-effect')
  const cursorLine = document.getElementById('cursor-line')
  const contactCommandLine = document.querySelector('.contact-command')
  const contactCommand = document.querySelector('.typing-command')
  const contactItems = document.querySelector('.contact-items')

  // 初始化元素状态
  initializeElements(contactCommandLine, contactCommand, contactItems, cursorLine)

  // 处理打字效果
  handleTypingEffect(typingElements, contactCommandLine, contactCommand, contactItems, cursorLine)
})

// 初始化元素状态
function initializeElements(contactCommandLine, contactCommand, contactItems, cursorLine) {
  contactCommandLine.style.opacity = '0'
  contactCommand.textContent = ''
  contactItems.style.opacity = '0'
  cursorLine.style.opacity = '0'
}

// 处理打字效果
function handleTypingEffect(typingElements, contactCommandLine, contactCommand, contactItems, cursorLine) {
  typingElements.forEach((element) => {
    if (element.closest('.contact-items')) return

    const children = Array.from(element.children)
    let delay = 0

    // 初始化所有子元素为隐藏状态
    children.forEach((child) => {
      child.style.opacity = '0'
      child.style.display = 'block'
    })

    // 逐个显示子元素
    children.forEach((child, index) => {
      setTimeout(() => {
        child.style.opacity = '1'
        child.classList.add('typed')

        // 最后一个元素显示完成后开始显示contact命令
        if (index === children.length - 1) {
          setTimeout(() => showContactCommand(contactCommandLine, contactCommand, contactItems, cursorLine), 400)
        }
      }, delay)
      delay += 800
    })
  })
}

// 显示联系方式命令
function showContactCommand(contactCommandLine, contactCommand, contactItems, cursorLine) {
  contactCommandLine.style.opacity = '1'

  setTimeout(() => {
    typeText(contactCommand, 'contact --show', 0, () => {
      setTimeout(() => showContactItems(contactItems, cursorLine), 400)
    })
  }, 200)
}

// 逐字输入文本
function typeText(element, text, index, callback) {
  if (index < text.length) {
    element.textContent += text.charAt(index)
    setTimeout(() => typeText(element, text, index + 1, callback), 100)
  } else if (callback) {
    callback()
  }
}

// 显示联系方式项目
function showContactItems(contactItems, cursorLine) {
  const items = Array.from(contactItems.children)
  contactItems.style.opacity = '1'

  items.forEach((item, i) => {
    item.style.opacity = '0'
    item.style.transform = 'translateY(-10px)'
    setTimeout(() => {
      item.style.opacity = '1'
      item.style.transform = 'translateY(0)'
    }, i * 200)
  })

  // 所有内容显示完后显示光标
  setTimeout(() => {
    cursorLine.style.opacity = '1'
  }, items.length * 200 + 300)
}
</script>

<template>
  <div class="container">
    <BackgroundAnimation />
    <div class="terminal">
      <div class="terminal-header">
        <div class="terminal-buttons">
          <div class="terminal-button close" />
          <div class="terminal-button minimize" />
          <div class="terminal-button maximize" />
        </div>
        <div class="terminal-title">
          user@starlong:~
        </div>
      </div>
      <div class="terminal-content">
        <div class="command-line">
          <span class="prompt">$ </span>
          <span class="command">cat about.me</span>
        </div>
        <div class="output">
          <div class="typing-effect">
            <h1>你好，世界！👋</h1>
            <p>我是一名热爱编程的高级前端开发者。</p>
            <p>专注于构建高性能的现代 Web 应用，热衷于新技术以及 AI 领域的探索。</p>
            <p>正在使用 JavaScript/TypeScript, Vue, React, Node.js 🚀</p>
            <p class="code-line">
              <span class="code-keyword">if </span>
              <span class="code-parens">(</span>
              <span class="code-object">coffee</span>.<span class="code-method">isEmpty</span><span class="code-parens">()</span>
              <span class="code-parens">)</span>
              <span class="code-parens"> { </span>
              <span class="code-object">coffee</span>.<span class="code-method">refill</span><span class="code-parens">()</span>
              <span class="code-parens"> }</span>
              <span class="code-comment">// 来杯咖啡，聊聊代码</span>
              <span class="code-emoji">☕</span>
            </p>
          </div>
        </div>
        <div class="command-line contact-command">
          <span class="prompt">$ </span>
          <span class="command typing-command" />
        </div>
        <div class="output contact-info">
          <div class="contact-items typing-effect">
            <div class="contact-item">
              <a href="https://github.com/6starlong" target="_blank" class="contact-link">
                <svg height="18" width="18" viewBox="0 0 16 16" class="contact-icon">
                  <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span class="contact-text">GitHub</span>
              </a>
            </div>
            <div class="contact-item">
              <a href="mailto:starlong.lu@gmail.com" class="contact-link">
                <svg height="18" width="18" viewBox="0 0 24 24" class="contact-icon">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span class="contact-text">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div id="cursor-line" class="command-line">
          <span class="prompt">$ </span>
          <span class="command blink">_</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* 全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: 'Fira Code', monospace;
  background-color: #0a0e14;
  color: #e6e6e6;
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
}

/* 终端样式 */
.terminal {
  width: 70%;
  max-width: 700px;
  height: 60vh;
  background-color: rgba(16, 20, 27, 0.75);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 10;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(100, 100, 100, 0.3);
  position: relative;
}

.terminal-header {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(30, 34, 42, 0.9);
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.close {
  background-color: #ff5f56;
}

.minimize {
  background-color: #ffbd2e;
}

.maximize {
  background-color: #27c93f;
}

.terminal-title {
  margin-left: 20px;
  font-size: 14px;
  color: #a9b1d6;
}

.terminal-content {
  padding: 15px 20px;
  height: calc(100% - 60px);
  overflow-y: auto;
}

.command-line {
  display: flex;
  margin-bottom: 12px;
  font-size: 15px;
  align-items: center;
}

.prompt {
  color: #50fa7b;
  margin-right: 8px;
  font-weight: 500;
}

.command {
  color: #f8f8f2;
}

.output {
  margin: 12px 0 25px 0;
  line-height: 1.6;
  color: #f8f8f2;
  padding-left: 8px;
}

/* 打字机效果 */
.typing-effect h1, .typing-effect p {
  transition: opacity 0.5s ease;
  margin: 0;
}

.typing-effect h1 {
  color: #ff79c6;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
}

.typing-effect p {
  color: #f8f8f2;
  margin-bottom: 10px;
  font-size: 15px;
}

.typing-effect p:last-child {
  margin-bottom: 0;
}

.typed::after {
  content: '';
  display: inline-block;
  width: 0;
}

/* 闪烁的光标 */
.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 联系方式样式 */
.contact-info {
  margin: 12px 0 25px 0;
  padding-left: 8px;
}

.contact-items {
  opacity: 0;
  display: flex;
  gap: 12px;
}

.contact-item {
  margin: 0;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(-8px);
}

.contact-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #7d8590;
  font-size: 13.5px;
  padding: 7px 10px;
  border-radius: 5px;
  transition: all 0.2s ease;
  background-color: rgba(125, 133, 144, 0.1);
}

.contact-link:hover {
  color: #2f81f7;
  background-color: rgba(47, 129, 247, 0.1);
  transform: translateY(-2px);
}

.contact-icon {
  margin-right: 8px;
}

.contact-text {
  font-weight: 500;
}

.contact-link:hover .contact-icon {
  color: inherit;
}

.typing-command {
  white-space: pre;
}

.contact-command {
  opacity: 0;
  transition: opacity 0.3s ease;
}

#cursor-line {
  margin-top: 3px;
  opacity: 0;
}

/* 代码样式 */
.code-line {
  font-family: 'Fira Code', monospace;
  font-size: 0.95em;
  padding: 0.2em;
  color: #e6e6e6;
}

.code-keyword {
  color: #ff79c6;
}

.code-object {
  color: #8be9fd;
}

.code-method {
  color: #50fa7b;
}

.code-parens {
  color: #f8f8f2;
}

.code-comment {
  color: #6272a4;
  margin-left: 0.5em;
}

.code-emoji {
  margin-left: 0.3em;
  font-size: 1.1em;
}

.code-line:hover {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  transition: background 0.3s ease;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .terminal {
    width: 95%;
    height: 80vh;
  }

  .terminal-content {
    padding: 12px 15px;
  }

  .typing-effect h1 {
    font-size: 20px;
    margin-bottom: 12px;
  }

  .typing-effect p {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .output, .contact-info {
    padding-left: 5px;
    margin: 10px 0 20px 0;
  }

  .contact-items {
    gap: 8px;
  }

  .contact-link {
    padding: 6px 8px;
    font-size: 13px;
  }
}
</style>
