'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useRTL } from '@/hooks/useRTL'

export function CTA() {
  const t = useTranslations('landing')
  const { dir } = useRTL()

  return (
    <section className="border-b bg-gradient-to-br from-primary/5 to-secondary/5 py-24" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Prêt à transformer votre gestion RH ?
          </h2>
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
            Rejoignez les centaines d&apos;entreprises marocaines qui ont simplifié
            leur RH avec notre solution.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="xl" asChild className="group">
              <Link href="/auth/demo">
                {t('cta_demo')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <Link href="/contact">Parler à un expert</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Essai gratuit 14 jours · Sans carte bancaire · Support en français
          </p>
        </div>
      </div>
    </section>
  )
}
