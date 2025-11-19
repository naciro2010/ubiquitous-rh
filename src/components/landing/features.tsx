'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import {
  Users,
  Calendar,
  Clock,
  Wallet,
  Target,
  BarChart3,
  Shield,
  Globe2,
} from 'lucide-react'
import { useRTL } from '@/hooks/useRTL'

const features = [
  {
    icon: Users,
    key: 'employees',
  },
  {
    icon: Calendar,
    key: 'leaves',
  },
  {
    icon: Clock,
    key: 'attendance',
  },
  {
    icon: Wallet,
    key: 'payroll',
  },
  {
    icon: Target,
    key: 'recruitment',
  },
  {
    icon: BarChart3,
    key: 'analytics',
  },
  {
    icon: Shield,
    key: 'security',
  },
  {
    icon: Globe2,
    key: 'multilang',
  },
]

export function Features() {
  const t = useTranslations('features')
  const { dir } = useRTL()

  return (
    <section id="features" className="border-b border-border/50 py-20 md:py-32" dir={dir}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 md:mb-20 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            {t('title', { ns: 'landing' })}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Une solution complète pour tous vos besoins RH
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.key}
                className="group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {t(`${feature.key}_title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`${feature.key}_desc`)}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
