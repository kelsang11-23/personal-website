import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出（关键配置）
  images: {
    unoptimized: true, // 禁用Next.js图片优化（GitHub Pages不支持）
  },
  basePath: '/personal-website', // 替换为你的GitHub仓库名（必须一致）
};

export default nextConfig;
