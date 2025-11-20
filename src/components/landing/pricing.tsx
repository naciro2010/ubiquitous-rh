'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { useRTL } from '@/hooks/useRTL'

const plans = [
  {
    name: 'Starter',
    price: '1,990',
    period: '/mois',
    description: 'Pour les petites entreprises',
    features: [
      'Jusqu\'à 25 employés',
      'Gestion des congés',
      'Présences basiques',
      'Support par email',
      '1 utilisateur admin',
    ],
    cta: 'Commencer',
    popular: false,
  },
  {
    name: 'Professional',
    price: '3,990',
    period: '/mois',
    description: 'Pour les entreprises en croissance',
    features: [
      'Jusqu\'à 100 employés',
      'Toutes les fonctionnalités',
      'Paie automatique + CNSS',
      'Support prioritaire',
      '5 utilisateurs admin',
      'Intégrations avancées',
    ],
    cta: 'Essayer gratuitement',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    period: '',
    description: 'Pour les grandes organisations',
    features: [
      'Employés illimités',
      'Fonctionnalités sur mesure',
      'Onboarding dédié',
      'Support 24/7',
      'Utilisateurs illimités',
      'SLA garanti',
    ],
    cta: 'Nous contacter',
    popular: false,
  },
]

export function Pricing() {
  const t = useTranslations('landing')
  const { dir } = useRTL()

  return (
    <section id="pricing" className="border-b bg-muted/30 py-24" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('pricing_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            Choisissez le plan adapté à votre entreprise. Tarifs en MAD (Dirham
            marocain).
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular
                  ? 'border-primary shadow-2 ring-2 ring-primary/20'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge>Populaire</Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Tous les plans incluent une période d&apos;essai gratuite de 14 jours.
          <br />
          Conformité CNSS et Code du Travail marocain garantie.
        </p>
      </div>
    </section>
  )
}
