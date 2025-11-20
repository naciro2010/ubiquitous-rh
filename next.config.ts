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

  // Build cache configuration for faster rebuilds
  // Cache is stored in .next/cache directory
  // This significantly improves build times for subsequent builds
  generateBuildId: async () => {
    // Use a consistent build ID for better caching
    // In CI/CD, you might want to use the git commit hash
    return process.env.BUILD_ID || 'build-' + Date.now()
  },
}

export default withNextIntl(nextConfig)
