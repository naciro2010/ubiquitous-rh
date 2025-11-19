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
          <div className="mb-8 inline-flex animate-scale-in">
            <Badge variant="gradient" size="lg" className="gap-2 shadow-lg">
              <Sparkles className="h-4 w-4 animate-pulse-soft" />
              <span className="font-bold">Version 3.0 avec IA intégrée</span>
            </Badge>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
            {t('landing.hero_title')}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 text-base text-muted-foreground sm:text-lg md:mb-12 md:text-xl lg:text-2xl max-w-3xl mx-auto animate-fade-in">
            {t('landing.hero_subtitle')}
          </p>

          {/* CTA Buttons - Responsive & Modern */}
          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto sm:flex-row animate-slide-in-bottom">
            <Button
              size="xl"
              variant="gradient"
              asChild
              className="group w-full sm:w-auto min-w-[200px] shadow-2xl"
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              <Link href="/auth/demo">
                {t('landing.cta_demo')}
              </Link>
            </Button>
            <Button
              size="xl"
              variant="glass"
              asChild
              className="w-full sm:w-auto min-w-[200px]"
            >
              <Link href="/auth/login">{t('landing.cta_login')}</Link>
            </Button>
          </div>

          {/* Stats - Responsive Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 border-t border-border/50 pt-8 sm:pt-12 md:pt-16 animate-fade-in">
            <div className="space-y-2 p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm sm:text-xs md:text-sm text-muted-foreground font-medium">
                {t('landing.stats_companies')}
              </div>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-gradient-to-br from-secondary/5 to-transparent hover:from-secondary/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                10K+
              </div>
              <div className="text-sm sm:text-xs md:text-sm text-muted-foreground font-medium">
                {t('landing.stats_employees')}
              </div>
            </div>
            <div className="space-y-2 p-4 rounded-2xl bg-gradient-to-br from-success/5 to-transparent hover:from-success/10 transition-all duration-300 hover:scale-105">
              <div className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                99%
              </div>
              <div className="text-sm sm:text-xs md:text-sm text-muted-foreground font-medium">
                {t('landing.stats_satisfaction')}
              </div>
            </div>
          </div>
        </div>

        {/* Product Screenshot Placeholder - Glassmorphism */}
        <div className="mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-24 max-w-6xl px-4 sm:px-0 animate-scale-in">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-border/30 bg-gradient-to-br from-background/60 to-muted/40 backdrop-blur-xl p-3 sm:p-4 md:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] group">
            <div className="aspect-video w-full rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/15 to-success/10 relative overflow-hidden">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(110,143,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(110,143,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px]" />
              {/* Center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/20 blur-3xl rounded-full animate-pulse-soft" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
