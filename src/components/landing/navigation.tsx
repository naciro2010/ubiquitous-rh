'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRTL } from '@/hooks/useRTL'
import { Building2 } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSwitcher } from '@/components/language-switcher'

export function Navigation() {
  const t = useTranslations()
  const { dir } = useRTL()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm" dir={dir}>
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity">
          <Building2 className="h-5 w-5 text-primary" />
          <span className="text-base">{t('common.app_name')}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t('landing.features_title')}
          </Link>
          <Link
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t('landing.pricing_title')}
          </Link>
          <Link
            href="#faq"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t('landing.faq_title')}
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/auth/login">{t('auth.login')}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/demo">{t('landing.cta_demo')}</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
