# VIOLET 的个人博客

基于 Next.js 16 构建的个人技术博客，展示 GitHub 开源项目与 Markdown 技术文章。

## 功能

- **GitHub 项目展示** — 自动拉取仓库信息，支持精选/一般两级展示
- **Markdown 博客** — 将 `.md` 文件放入 `content/blog/` 即可发布
- **深浅色主题** — 手动切换，跟随系统偏好
- **响应式设计** — 适配桌面与移动端

## 技术栈

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- React Markdown + Gray Matter
- Lucide Icons
- Vitest + Testing Library

## 本地开发

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 生产构建
npm test         # 运行测试
```

## 添加博客文章

在 `content/blog/` 目录下创建 `.md` 文件：

```md
---
title: "文章标题"
date: "2026-01-01"
description: "文章简介"
tags: ["标签1", "标签2"]
---

文章内容...
```

## 许可证

MIT
