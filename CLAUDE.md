# my_ui — Agent 工作入口

> 这是 Claude 的工作入口文档。开始任何工作前，先阅读 `.claude/` 目录下的相关文档。

---

## 必读文档

按顺序阅读：

1. [`.claude/GOAL.md`](./.claude/GOAL.md) — **最终目标**。了解项目要达到什么状态。
2. [`.claude/CONSTRAINTS.md`](./.claude/CONSTRAINTS.md) — **限制要求**。Agent 必须严格遵守的规则（Git、代码规范、技术约束等）。
3. [`.claude/README.md`](./.claude/README.md) — **项目介绍**。技术栈、目录结构、命名规范。
4. [`.claude/CLAUDE.md`](./.claude/CLAUDE.md) — **项目规范**。开发工作流、部署、维护记录。
5. [`.claude/DESIGN.md`](./.claude/DESIGN.md) — **设计设定集**。Design Tokens、组件规范、动画时序。

---

## 快速参考

| 项目 | 内容 |
|------|------|
| 框架 | Next.js (App Router) |
| 样式 | Tailwind CSS |
| 语言 | TypeScript |
| 部署 | Vercel |
| 包管理 | pnpm |
| 分支 | 只有 `main`，不创建 feature 分支 |
| Commit | 任何修改后立即 commit，commit 后立即 push |

---

## 当前阶段

**阶段 1：主站骨架**

目标：初始化 Next.js + Tailwind + TypeScript 项目，搭建基础目录结构，配置 Design Tokens，实现首页素材网格和详情页路由。

详情见 [`.claude/GOAL.md`](./.claude/GOAL.md) 的"当前阶段目标"章节。
