'use client'

import { useLocale } from 'next-intl'
import { isRTL, type Locale } from '@/config/i18n'

export function useRTL() {
  const locale = useLocale() as Locale
  const rtl = isRTL(locale)

  return {
    isRTL: rtl,
    dir: rtl ? 'rtl' : 'ltr',
    locale,
  }
}
