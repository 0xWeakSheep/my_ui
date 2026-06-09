# my_ui — 项目规范

> 个人 UI 设计作品集。主站用 Next.js，部署在 Vercel。每个作品是独立的 HTML/CSS/JS 实现，同时被主站聚合展示。

---

## 项目目标

1. **对外展示**：主站是一个可访问的网站，展示所有 UI 作品。首页以缩略图/卡片形式呈现所有素材，点击进入后可查看该素材。
2. **素材复用**：作品中沉淀的组件、动效、布局、颜色系统可以被抽取，用于未来的新作品或外部项目。
3. **独立运行**：每个作品可以脱离主站独立运行，直接在浏览器中打开即可工作。

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
├── README.md                     # 对外说明
├── CLAUDE.md                     # 本文档
└── DESIGN.md                     # 设计设定集
```

### 关键目录说明

- **`app/`** — Next.js 主站。首页是素材网格，点击素材进入详情页。详情页目前只需能正常进入即可，渲染方式后续确定。
- **`registry/`** — 素材库。每个作品是一个独立模块，可以脱离主站运行。编号：`01`, `02`, `03`...（两位数）。
- **`data/works.ts`** — 素材注册表。所有作品的元数据集中在这里，主站从这里读取。
- **`styles/tokens.css`** — Design Tokens，跨所有作品共享。

### 素材集成方式（后续确定）

主站目前只需要实现路由入口：首页点击素材卡片 → 进入详情页。详情页如何渲染该素材（iframe、独立页面、React 组件封装等）后续根据素材复杂度逐步确定。

素材类型差异：
- 简单素材：纯 HTML/CSS/JS，可能通过 iframe 或静态托管直接展示。
- 复杂素材：涉及 Canvas、WebGL、第三方库，渲染方式需单独处理。

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

## 开发工作流

### Commit 频率

**任何修改后必须立即 commit。** 包括代码、样式、素材、文案、文档。不允许积攒多个修改再一次性提交。

### Commit 规范

```
<类型>: <中文描述>

<可选的详细说明>
```

类型：

| 类型 | 用途 |
|------|------|
| `feat` | 新功能、新作品、新组件 |
| `fix` | 修复问题 |
| `style` | 样式调整 |
| `refactor` | 重构，不改变功能 |
| `docs` | 文档更新 |
| `asset` | 素材更新 |
| `chore` | 配置、脚本等杂项 |

### 推送规则

**每次 commit 后立即 push。**

```bash
git add .
git commit -m "type: 描述"
git push origin main
```

### 分支策略

- `main` 是唯一分支，始终可运行、可展示。
- 不创建 feature 分支，所有开发在 main 上进行。

---

## 部署

项目托管在 Vercel，绑定 GitHub 仓库。每次 push 到 `main` 自动部署。

---

## 维护记录

| 日期 | 事件 |
|------|------|
| 2026-06-10 | 初始化项目，确定技术架构与目录结构 |
