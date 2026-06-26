import type { NextConfig } from "next";

// NEXT_PUBLIC_BASE_PATH:
//   不设置         → /personal-blog  (GitHub Pages 构建)
//   设为 "/"       → 根路径,无前缀   (国内服务器构建)
//   设为 "/custom" → 自定义路径
const rawBase = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = rawBase === "/" ? "" : rawBase || "/personal-blog";
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  // Dev 模式不加 basePath，可直接 localhost:3000 访问
  basePath: isDev ? "" : basePath,
  assetPrefix: isDev ? "" : basePath,
  // 构建时注入环境变量供客户端读取
  env: {
    NEXT_PUBLIC_ICP_BEIAN: process.env.NEXT_PUBLIC_ICP_BEIAN ?? "",
    NEXT_PUBLIC_GABEI: process.env.NEXT_PUBLIC_GABEI ?? "",
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
