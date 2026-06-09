# DESIGN.md — 设计设定集

> my_ui 的跨作品共享设计系统。所有 Design Token、组件规范、动画时序定义在此。

---

## 设计原则

1. **从摄影到界面**：每个作品从一个真实视觉锚点（照片/场景）出发，将其"翻译"为适合界面使用的视觉系统。
2. **沉浸式背景**：画面不是装饰，而是界面的第一层信息。文字、控件、面板融入场景。
3. **克制 UI**：不使用过度装饰的字体、强烈弹跳动画或花哨渐变。界面保持安静，让背景呼吸。
4. **电影感调色**：偏好 Teal & Gold（蓝绿阴影 + 金色高光）、低角度逆光、景深层次、边缘晕影。

---

## 颜色系统

### 背景层级

| Token | 值 | 用途 |
|-------|-----|------|
| `--bg-base` | `#070909` | 页面底色 |
| `--bg-elevated` | `#0d1112` | 卡片、面板底色 |
| `--bg-overlay` | `rgba(8, 12, 12, 0.38)` | 玻璃面板 |
| `--bg-overlay-strong` | `rgba(6, 9, 10, 0.62)` | 强玻璃面板 |

### 文字层级

| Token | 值 | 用途 |
|-------|-----|------|
| `--text-primary` | `#f4efe3` | 标题、主文字 |
| `--text-secondary` | `rgba(244, 239, 227, 0.68)` | 副标题、描述 |
| `--text-tertiary` | `rgba(244, 239, 227, 0.46)` | 辅助信息、标签 |

### 强调色

| Token | 值 | 用途 |
|-------|-----|------|
| `--accent-gold` | `#d9a13a` | 主强调色、按钮 hover |
| `--accent-amber` | `#f2c46d` | 高亮、活跃状态 |
| `--accent-sky` | `#648899` | 冷色强调、次要操作 |

### 边框与分割线

| Token | 值 |
|-------|-----|
| `--border-subtle` | `rgba(244, 239, 227, 0.18)` |
| `--border-strong` | `rgba(244, 239, 227, 0.32)` |

### 功能色

| Token | 值 | 用途 |
|-------|-----|------|
| `--success` | `#4ade80` | 成功状态 |
| `--warning` | `#f2c46d` | 警告状态 |
| `--error` | `#f87171` | 错误状态 |

---

## 字体系统

### 字体族

| Token | 值 |
|-------|-----|
| `--font-sans` | `"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` |

### 字号

| Token | 值 | 用途 |
|-------|-----|------|
| `--text-xs` | 12px | 标签、时间、辅助信息 |
| `--text-sm` | 13px | 导航链接、次要文字 |
| `--text-base` | 14px | 正文、按钮 |
| `--text-md` | 16px | 描述段落 |
| `--text-lg` | 20px | 副标题 |
| `--text-xl` | `clamp(48px, 6.5vw, 94px)` | Hero 大标题 |

### 字重

| Token | 值 |
|-------|-----|
| `--font-normal` | 400 |
| `--font-medium` | 500 |
| `--font-semibold` | 650 |
| `--font-bold` | 750 |

### 字间距

| Token | 值 | 用途 |
|-------|-----|------|
| `--tracking-tight` | -0.02em | 大标题紧凑 |
| `--tracking-normal` | 0 | 正文默认 |
| `--tracking-wide` | 0.08em | 标签、分类 |
| `--tracking-wider` | 0.12em | eyebrow 标签（大写） |

---

## 间距系统

基于 `4px` 网格：

| Token | 值 | 用途 |
|-------|-----|------|
| `--space-1` | 4px | 图标间距 |
| `--space-2` | 8px | 按钮内边距 |
| `--space-3` | 12px | 列表项间距 |
| `--space-4` | 16px | 卡片内边距 |
| `--space-5` | 20px | 面板内边距 |
| `--space-6` | 24px | 组件组间距 |
| `--space-8` | 32px | 区块间距 |
| `--space-10` | 40px | 大区块间距 |
| `--space-12` | 48px | 页面级间距 |

---

## 圆角系统

| Token | 值 |
|-------|-----|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--radius-xl` | 16px |
| `--radius-full` | 999px（胶囊形） |

---

## 阴影系统

| Token | 值 |
|-------|-----|
| `--shadow-sm` | `0 1px 2px rgba(0, 0, 0, 0.1)` |
| `--shadow-md` | `0 4px 12px rgba(0, 0, 0, 0.15)` |
| `--shadow-lg` | `0 12px 40px rgba(0, 0, 0, 0.2)` |
| `--shadow-glow` | `0 0 18px rgba(242, 196, 109, 0.22)` |

---

## 动画时序

| Token | 值 | 用途 |
|-------|-----|------|
| `--duration-instant` | 100ms | 微交互 |
| `--duration-fast` | 180ms | hover、focus |
| `--duration-normal` | 300ms | 状态切换 |
| `--duration-slow` | 500ms | 面板展开 |
| `--duration-slower` | 800ms | 页面过渡 |

| Token | 值 |
|-------|-----|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

---

## 响应式断点

| 名称 | 宽度 | 用途 |
|------|------|------|
| `sm` | 640px | 小屏手机 |
| `md` | 768px | 平板竖屏 |
| `lg` | 1024px | 平板横屏 / 小笔记本 |
| `xl` | 1280px | 桌面 |
| `2xl` | 1536px | 大屏桌面 |

---

## 玻璃效果

跨作品共享的玻璃面板模式：

```css
.glass {
  background: var(--bg-overlay);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  border: 1px solid var(--border-subtle);
}

.glass-strong {
  background: var(--bg-overlay-strong);
  backdrop-filter: blur(26px);
  -webkit-backdrop-filter: blur(26px);
  border: 1px solid var(--border-subtle);
}
```

---

## 组件规范

### 基础组件

位于 `components/ui/`，遵循以下原则：

- TypeScript，Props 类型显式定义
- 支持 `className` 透传，使用 `cn()` 合并类名
- 支持 `ref` 转发
- 默认样式基于 Design Tokens

基础组件（按需扩展）：

| 组件 | 变体 |
|------|------|
| Button | primary / secondary / ghost |
| Card | 容器 |
| Badge | 标签 |
| Separator | 分割线 |
| Skeleton | 加载骨架 |
| Tooltip | 提示框 |

### 预览组件

位于 `components/preview/`，主站专用：

| 组件 | 用途 |
|------|------|
| WorkCard | 素材预览卡片（缩略图 + 标题 + 标签） |
| WorkGrid | 素材网格布局 |
| PreviewFrame | iframe 预览容器 |
| ModeSwitcher | 模式切换控件 |

### 布局组件

位于 `components/layout/`：

| 组件 | 用途 |
|------|------|
| Header | 顶部导航（Logo + 链接 + 搜索） |
| Footer | 页脚 |
| Nav | 导航菜单 |

---

## 可复用布局模式

沉淀自作品的通用布局结构：

- **Hero 文案区**：左侧大标题 + eyebrow 标签 + 副标题 + 双按钮组
- **信号面板**：右上角数据卡片，带环形图、波形条、指标列表
- **模式切换条**：底部按钮组，切换整体氛围
- **顶部导航栏**：Logo + 导航链接 + 图标按钮，玻璃效果
- **前景视差层**：基于鼠标位置的 CSS 3D 变换，制造深度感

---

## 无障碍

- 所有交互元素支持键盘导航
- 包含 `prefers-reduced-motion` 媒体查询，尊重用户减少动画的偏好
- iframe 嵌入时设置适当的 `title` 和 `aria-label`

---

## 维护记录

| 日期 | 事件 |
|------|------|
| 2026-06-10 | 创建设计设定集，定义完整的 Token 系统与组件规范 |
