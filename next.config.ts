import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs',               // 静态文件输出到 docs
  basePath: '/personal-website', // 你的仓库名
  trailingSlash: true,
}

export default nextConfig
