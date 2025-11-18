'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { FileSpreadsheet, Database, Zap, Link2 } from 'lucide-react'
import { useRTL } from '@/hooks/useRTL'

const integrations = [
  {
    name: 'Microsoft Excel',
    description: 'Import/Export vos données RH depuis/vers Excel',
    icon: FileSpreadsheet,
  },
  {
    name: 'Sage Compta',
    description: 'Synchronisation automatique avec votre comptabilité',
    icon: Database,
  },
  {
    name: 'Badgeuse',
    description: 'Connectez votre système de pointage existant',
    icon: Zap,
  },
  {
    name: 'API Ouverte',
    description: 'Intégrez RH Manager à vos outils métier',
    icon: Link2,
  },
]

export function Integrations() {
  const t = useTranslations('features')
  const { dir } = useRTL()

  return (
    <section className="border-b py-24" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('integrations_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('integrations_desc')}
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {integrations.map((integration) => {
            const Icon = integration.icon
            return (
              <Card
                key={integration.name}
                className="group transition-all duration-180 hover:shadow-2"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {integration.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
