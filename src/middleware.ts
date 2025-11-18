import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './config/i18n'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // Don't prefix the default locale
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|ar|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
