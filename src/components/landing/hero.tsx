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
    <section className="relative overflow-hidden border-b" dir={dir}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-4 pb-16 pt-24 md:pb-24 md:pt-32 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex">
            <Badge variant="secondary" className="gap-1.5 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Version 3.0 avec IA intégrée</span>
            </Badge>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t('landing.hero_title')}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl md:mb-12 md:text-2xl">
            {t('landing.hero_subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="xl" asChild className="group">
              <Link href="/auth/demo">
                {t('landing.cta_demo')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/auth/login">{t('landing.cta_login')}</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t pt-12 md:mt-20 md:gap-12 md:pt-16">
            <div className="space-y-2">
              <div className="text-3xl font-bold md:text-4xl">500+</div>
              <div className="text-sm text-muted-foreground">
                {t('landing.stats_companies')}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold md:text-4xl">10K+</div>
              <div className="text-sm text-muted-foreground">
                {t('landing.stats_employees')}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold md:text-4xl">99%</div>
              <div className="text-sm text-muted-foreground">
                {t('landing.stats_satisfaction')}
              </div>
            </div>
          </div>
        </div>

        {/* Product Screenshot Placeholder */}
        <div className="mx-auto mt-16 max-w-6xl md:mt-24">
          <div className="overflow-hidden rounded-xl border bg-muted/30 p-2 shadow-2 md:rounded-2xl md:p-4">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
