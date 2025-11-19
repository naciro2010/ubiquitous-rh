'use client'

import { useTranslations } from 'next-intl'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useRTL } from '@/hooks/useRTL'

const faqs = [
  {
    question: 'Est-ce que RH Manager est conforme au Code du Travail marocain ?',
    answer:
      'Oui, RH Manager est entièrement conforme au Code du Travail marocain. Le calcul des congés, de la CNSS (4.48%), de l\'IR et des bulletins de paie respecte la législation en vigueur.',
  },
  {
    question: 'Puis-je importer mes données depuis Excel ?',
    answer:
      'Absolument. RH Manager permet d\'importer vos données employés, congés et présences depuis des fichiers Excel (.xlsx). Nous fournissons des modèles prêts à l\'emploi.',
  },
  {
    question: 'Comment fonctionne l\'intégration avec Sage ?',
    answer:
      'L\'export vers Sage se fait en un clic. Vos données de paie sont formatées automatiquement pour être importées directement dans Sage Comptabilité.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'La sécurité est notre priorité. Vos données sont chiffrées (AES-256), hébergées au Maroc, avec sauvegardes quotidiennes et conformité RGPD.',
  },
  {
    question: 'Puis-je personnaliser les champs et formulaires ?',
    answer:
      'Oui, RH Manager offre un système de champs personnalisés et un Form Builder pour adapter l\'outil à vos processus RH spécifiques.',
  },
  {
    question: \'L\'IA Copilot fonctionne en arabe ?',
    answer:
      'Oui, notre assistant IA est multilingue (français, arabe, anglais) et comprend le contexte RH marocain.',
  },
]

export function FAQ() {
  const t = useTranslations('landing')
  const { dir } = useRTL()

  return (
    <section id="faq" className="border-b py-24" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('faq_title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            Réponses aux questions les plus fréquentes
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
