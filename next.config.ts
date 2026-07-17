import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

// 支持两种部署形态：
//   - GitHub Pages 静态托管：BUILD_TARGET=export → 产出 out/，关闭服务端图片优化
//   - Docker/容器部署：默认 standalone → 保留 SSR 与服务端图片优化
const isStaticExport = process.env.BUILD_TARGET === 'export'

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  output: isStaticExport ? 'export' : 'standalone',
  images: {
    unoptimized: isStaticExport,
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default nextConfig
