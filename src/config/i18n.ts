import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const locales = ['fr', 'ar', 'en'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

// RTL languages
export const rtlLocales: Locale[] = ['ar']

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locale = await requestLocale
  if (!locales.includes(locale as Locale)) notFound()

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
