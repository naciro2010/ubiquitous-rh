import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/config/i18n.ts')

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Base path for GitHub Pages (will be set in GitHub Actions)
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  reactStrictMode: true,

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Trailing slash for better static hosting compatibility
  trailingSlash: true,

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

export default withNextIntl(nextConfig)
