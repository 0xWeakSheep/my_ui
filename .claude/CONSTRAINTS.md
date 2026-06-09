# CONSTRAINTS — Agent 限制要求

> 以下规则必须严格遵守。任何修改、实现、重构都必须在这些约束下进行。

---

## Git 工作流

### Commit 频率

**任何修改后必须立即 commit。**

包括但不限于：
- 代码新增或修改
- 样式调整
- 素材替换
- 文案修改
- 文档更新

**禁止**积攒多个修改后再一次性提交。

### Commit 规范

```
<类型>: <中文描述>

<可选的详细说明>
```

| 类型 | 用途 |
|------|------|
| `feat` | 新功能、新作品、新组件 |
| `fix` | 修复问题 |
| `style` | 样式调整（CSS、颜色、布局） |
| `refactor` | 重构代码，不改变功能 |
| `docs` | 文档更新 |
| `asset` | 图片、字体等素材更新 |
| `chore` | 配置、脚本等杂项 |

示例：

```
style: 调整 Golden 模式下粒子透明度

将 pollenCanvas 的 mix-blend-mode 从 screen 改为 lighten，
避免在暗色背景上过度曝光。
```

### 推送规则

**每次 commit 后立即推送到远程仓库。**

```bash
git add .
git commit -m "type: 描述"
git push origin main
```

**禁止**本地积累多个未推送的 commit。

### 分支策略

- `main` 是唯一分支，始终可运行、可展示。
- **不创建 feature 分支**。所有开发直接在 main 上进行。

---

## 技术约束

- **主站框架**：Next.js (App Router)，不可更换为其他框架。
- **样式方案**：Tailwind CSS + CSS Variables，不可引入其他 CSS-in-JS 方案。
- **语言**：TypeScript，所有代码必须有类型定义。
- **包管理**：pnpm，不可使用 npm 或 yarn。
- **部署平台**：Vercel，不可更换。

### 素材库约束

- 每个素材必须能**独立运行**，脱离主站后在浏览器中直接打开即可工作。
- 素材库的技术栈**不做限制**：可以是纯 HTML/CSS/JS，也可以引入 Canvas、WebGL、Three.js、GSAP 等任何库。
- 主站目前**只负责路由入口**：首页展示素材卡片 → 点击进入详情页。详情页如何渲染素材后续确定，当前阶段只需保证能进入。

---

## 代码规范

- 所有组件使用 TypeScript，Props 类型显式定义。
- 组件支持 `className` 透传，使用 `cn()` 工具合并类名。
- 组件支持 `ref` 转发。
- 使用 BEM 命名法或 Tailwind 的 utility class，保持一致。
- 所有交互元素必须有适当的 `aria-label`、`aria-hidden` 或 ARIA 角色标注。
- 包含 `prefers-reduced-motion` 媒体查询，尊重用户减少动画的偏好。

---

## 文档约束

- 每次新增作品时，必须在 `registry/NN-slug/` 下创建 `meta.ts` 和 `design.md`。
- 每次修改 Design Tokens 时，必须同步更新 `styles/tokens.css` 和 `tailwind.config.ts`。
- 维护记录（维护记录表格）必须在每次重大变更后更新。

---

## 禁止事项

- 禁止在主分支上积累未提交的修改。
- 禁止创建 feature 分支。
- 禁止在 commit message 中使用无意义的描述（如 "update"、"fix"、"xxx"）。
- 禁止在主站中引入与 Next.js 不兼容的构建工具（如 Webpack 自定义配置需经确认）。
