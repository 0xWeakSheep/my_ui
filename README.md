# my_ui

个人 UI 设计作品集。

一个可交互的 UI 作品展示网站，同时作为可复用的素材与组件库。

---

## 在线预览

> 部署地址待添加

---

## 技术栈

- **框架**: Next.js (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **部署**: Vercel

---

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建
pnpm build
```

---

## 项目结构

```
my_ui/
├── app/            # Next.js 主站
├── components/     # React 组件
├── registry/       # 素材库（每个作品独立实现）
├── data/           # 素材注册表
├── styles/         # Design Tokens
└── public/         # 静态资源
```

每个作品放在 `registry/NN-slug/` 下，包含独立的 HTML/CSS/JS，可直接在浏览器中运行。主站通过 iframe 嵌入展示。

---

## 素材浏览

访问主站首页，浏览所有作品的缩略图网格。点击任意作品进入详情页，查看完整交互效果。

每个作品也支持独立打开：直接打开 `registry/NN-slug/index.html`。

---

## 作者

0xWeakSheep
