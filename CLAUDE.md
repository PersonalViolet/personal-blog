# VIOLET 个人博客项目

基于 Next.js 16 (App Router) 构建的个人博客网站。

## 项目结构

- `app/` - Next.js App Router 页面
  - `page.tsx` - 首页 (Hero + 精选项目 + 博客列表)
  - `blog/` - 博客列表和文章详情 `[slug]`
  - `projects/` - 项目展示页
- `components/` - React 组件
- `lib/` - 工具函数 (GitHub API, 博客加载)
- `content/blog/` - Markdown 博客文章
- `__tests__/` - Vitest 测试

## 命令

```bash
npm run dev        # 开发服务器 (localhost:3000)
npm run build      # 生产构建
npm test           # 运行测试
```

## 添加博客文章

在 `content/blog/` 目录下创建 `.md` 文件，包含 frontmatter (title, date, description, tags)。
