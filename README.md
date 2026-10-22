# 远坂のBlog · TohsakaRinz の 藏身处

一个记录技术实验与生活碎片的个人站点，基于 Next.js 16、React 19 和 Tailwind CSS 4。

- 线上计划域名：https://www.tohsaka.site （需要在 Vercel 与 DNS 中另行配置）
- GitHub：https://github.com/TohsakaRinz
- 内容：CiRCLE Wangan、CiRCLE Garage 2.0、Android 4.2 车机实验、硬件排障、AI 工具与游戏相关随想

## 本地开发

需要 Node.js 20.9 或更新版本。

```bash
npm ci
npm run dev
```

打开 http://localhost:3000 查看本地站点；`npm run build` 用于构建验证。

## 内容组织

- `posts/`：Markdown 技术文章
- `chatters/`：Markdown 杂谈
- `moments/`：Markdown 短动态
- `app/about/about.md`：关于我正文
- `data/projects.ts`：项目展示
- `siteConfig.ts`：个人资料、外观、音乐、天气、备案及社交入口配置

## XHBlogs 管理器同步提醒

本站代码和本地 `my-blog-manager` 各有独立的 `siteConfig.ts`，管理器的「同步 Blog」操作会覆盖目标文件并替换部分内容目录。同步前必须先备份，再确认双方配置一致，避免恢复原作者默认数据。

## 项目来源与署名

本站基于 [XHBlogs / XinghuisamaBlogs](https://github.com/heiehiehi/XinghuisamaBlogs) 进行个人化改造。原项目作者及其贡献应获得适当署名；请遵守原项目声明的 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) 许可。这个来源说明是开源归属，不代表原作者的姓名、研究经历或联系方式属于本站博主。
