# my_ui

个人 UI 设计作品集。

一个可交互的 UI 作品展示网站，同时作为可复用的素材与组件库。

---

## 在线预览

> 部署地址待添加（Vercel）

---

## 技术栈

- **框架**: Next.js 15 (App Router)
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

# 构建（静态导出）
pnpm build
```

---

## 项目结构

```
my_ui/
├── app/              # Next.js 主站
│   ├── page.tsx      # 首页
│   ├── about/        # About 页面
│   └── works/        # 素材详情页
├── components/       # React 组件
│   ├── ui/           # 基础 UI 组件
│   ├── preview/      # 预览相关组件
│   └── layout/       # 布局组件
├── registry/         # 素材库（每个作品独立实现）
├── data/             # 素材注册表
├── styles/           # Design Tokens
└── public/           # 静态资源
```

---

## 功能

- **首页**: 素材网格展示 + 分类筛选 + 技术栈介绍
- **详情页**: 素材信息 + iframe 实时预览（loading/error/loaded 状态）
- **About**: 项目介绍、技术架构、设计原则
- **设计系统**: 跨作品共享的 Design Tokens（颜色、字体、间距、动画）
- **滚动动画**: Intersection Observer 驱动的淡入效果

---

## 素材浏览

访问主站首页，浏览所有作品的缩略图网格。点击任意作品进入详情页，查看完整交互效果。

每个作品也支持独立打开：直接打开 `registry/NN-slug/index.html`。

---

## 作者

0xWeakSheep
