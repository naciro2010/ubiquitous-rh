'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useRTL } from '@/hooks/useRTL'

export function Hero() {
  const t = useTranslations()
  const { dir } = useRTL()

  return (
    <section className="relative overflow-hidden border-b border-border/50" dir={dir}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/30 via-background to-background" />

      <div className="container mx-auto px-6 pb-20 pt-32 md:pb-32 md:pt-40 lg:pt-48">
        <div className="mx-auto max-w-4xl text-center">
          {/* Clean badge */}
          <div className="mb-8 inline-flex">
            <Badge variant="secondary" size="lg" className="gap-2 shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span className="font-medium">Version 3.0 avec IA intégrée</span>
            </Badge>
          </div>

          {/* Title - Clean and bold */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground">
            {t('landing.hero_title')}
          </h1>

          {/* Subtitle - Better readability */}
          <p className="mb-12 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            {t('landing.hero_subtitle')}
          </p>

          {/* CTA Buttons - Clean and simple */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto min-w-[180px]"
            >
              <Link href="/auth/demo" className="inline-flex items-center gap-2">
                {t('landing.cta_demo')}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto min-w-[180px]"
            >
              <Link href="/auth/login">{t('landing.cta_login')}</Link>
            </Button>
          </div>

          {/* Stats - Clean and minimal */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 border-t border-border/50 pt-16">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                {t('landing.stats_companies')}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                10K+
              </div>
              <div className="text-sm text-muted-foreground">
                {t('landing.stats_employees')}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                99%
              </div>
              <div className="text-sm text-muted-foreground">
                {t('landing.stats_satisfaction')}
              </div>
            </div>
          </div>
        </div>

        {/* Product Screenshot - Clean and minimal */}
        <div className="mx-auto mt-20 md:mt-24 max-w-6xl">
          <div className="overflow-hidden rounded-xl border border-border bg-muted/50 p-2 shadow-2">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-accent/20 to-muted relative overflow-hidden">
              {/* Simple grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
