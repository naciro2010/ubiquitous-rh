'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkles, Command, Brain, Zap } from 'lucide-react'
import { useRTL } from '@/hooks/useRTL'

export function Copilot() {
  const t = useTranslations('features')
  const { dir } = useRTL()

  return (
    <section className="border-b bg-muted/30 py-24" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="space-y-6">
            <Badge variant="secondary" className="gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Nouveau
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t('copilot_title')}
            </h2>

            <p className="text-lg text-muted-foreground">
              {t('copilot_desc')}
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Command className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Recherche sémantique</h4>
                  <p className="text-sm text-muted-foreground">
                    Trouvez instantanément n&apos;importe quelle information RH avec
                    le langage naturel
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">
                    Suggestions intelligentes
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    L&apos;IA vous propose des actions contextuelles et anticipe vos
                    besoins
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold">Automatisation</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatisez les tâches répétitives et concentrez-vous sur
                    l&apos;essentiel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square w-full bg-gradient-to-br from-primary/20 via-secondary/10 to-background p-8">
                <div className="flex h-full flex-col justify-center space-y-4">
                  {/* Command palette mockup */}
                  <div className="rounded-lg border bg-background p-4 shadow-2">
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <Command className="h-4 w-4" />
                      <span>Tapez une commande...</span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-md bg-primary/10 p-2 text-sm">
                        💼 Voir les congés de Sarah
                      </div>
                      <div className="rounded-md bg-muted p-2 text-sm text-muted-foreground">
                        📊 Générer rapport de paie
                      </div>
                      <div className="rounded-md bg-muted p-2 text-sm text-muted-foreground">
                        ✉️ Envoyer rappel pointage
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
