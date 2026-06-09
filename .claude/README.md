# my_ui — 项目介绍

> 个人 UI 设计作品集。主站用 Next.js，部署在 Vercel。每个作品是独立的 UI 演示，同时被主站聚合展示。

---

## 项目概述

这是我的个人 UI 设计作品集。每个作品都是完整的前端实现，可以直接在浏览器中打开运行。主站（Next.js）将这些作品聚合展示，访问者可以在首页浏览所有素材，点击进入查看完整交互。

同时，作品中的组件、动效、布局、颜色系统可以被抽取出来，作为素材库用于未来的新作品或外部项目。

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js (App Router) |
| 样式 | Tailwind CSS + CSS Variables |
| 语言 | TypeScript |
| 部署 | Vercel |
| 包管理 | pnpm |

---

## 目录结构

```
my_ui/
├── app/                          # Next.js 主站
│   ├── layout.tsx                # 根布局
│   ├── page.tsx                  # 首页：素材网格
│   ├── globals.css               # 全局样式
│   ├── works/[slug]/page.tsx     # 素材详情页
│   └── ...
│
├── components/
│   ├── ui/                       # 基础 UI 组件
│   ├── preview/                  # 预览相关组件
│   └── layout/                   # 布局组件（Header, Footer）
│
├── lib/
│   └── utils.ts                  # 工具函数
│
├── data/
│   └── works.ts                  # 素材注册表（元数据索引）
│
├── types/
│   └── work.ts                   # TypeScript 类型
│
├── public/
│   └── works/                    # 预览图、缩略图
│
├── registry/                     # 素材库（核心）
│   ├── 01-field/                 # 作品 1：编号 + slug
│   │   ├── meta.ts               # 元数据
│   │   ├── design.md             # 设计文档
│   │   ├── index.html            # 独立运行入口（或其他入口文件）
│   │   └── assets/               # 图片等素材
│   ├── 02-night/                 # 作品 2
│   └── ...
│
├── styles/
│   └── tokens.css                # Design Tokens
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── pnpm-lock.yaml
├── .gitignore
└── README.md                     # 对外说明
```

### 关键目录说明

- **`app/`** — Next.js 主站。首页是素材网格，点击素材进入详情页。详情页目前只需能正常进入即可，渲染方式后续确定。
- **`registry/`** — 素材库。每个作品是一个独立模块，可以脱离主站运行。编号：`01`, `02`, `03`...（两位数）。
- **`data/works.ts`** — 素材注册表。所有作品的元数据集中在这里，主站从这里读取。
- **`styles/tokens.css`** — Design Tokens，跨所有作品共享。

---

## 主站与素材库的关系

### 主站（Next.js）

- 负责素材的聚合展示：首页网格、详情页入口。
- 负责全局的导航、搜索、分类筛选。
- 使用 React + TypeScript + Tailwind CSS 实现。

### 素材库（registry/）

- 每个素材是独立的技术单元，技术栈不做限制。
- 简单素材：HTML/CSS/JS。
- 复杂素材：可引入 Canvas、WebGL、Three.js、GSAP 等任何库。
- 每个素材必须能独立运行（直接打开 `index.html`）。

### 集成方式（后续确定）

主站目前只需要实现路由入口：首页点击素材卡片 → 进入详情页。详情页如何渲染该素材（iframe、独立页面跳转、React 组件封装等）后续根据素材复杂度逐步确定。

---

## 文件命名规范

### 作品文件夹

`NN-slug/`，如 `01-field`、`02-night`、`03-ocean`。两位数编号，留足扩展空间。

### 作品内部文件（当前阶段）

每个作品至少包含：

| 文件名 | 用途 |
|--------|------|
| `meta.ts` | 作品元数据 |
| `design.md` | 设计文档 |
| `index.html` | 独立运行入口 |
| `assets/` | 图片、字体、视频等素材 |

> 文件结构后续根据素材复杂度调整。简单素材可能只有 HTML/CSS/JS；复杂素材可能包含 Canvas、WebGL、构建产物或多个入口文件。

### 素材文件前缀

| 前缀 | 用途 |
|------|------|
| `01-` | 原始参考图 |
| `02-` | Web 背景图 |
| `03-` | UI 概念图 / Mockup |
| `04-` | 移动端素材 |

---

## 部署

项目托管在 Vercel，绑定 GitHub 仓库。每次 push 到 `main` 自动部署。

---

## 维护记录

| 日期 | 事件 |
|------|------|
| 2026-06-10 | 初始化项目，确定技术架构与目录结构 |
