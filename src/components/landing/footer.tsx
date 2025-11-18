'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Building2 } from 'lucide-react'
import { useRTL } from '@/hooks/useRTL'

export function Footer() {
  const t = useTranslations()
  const { dir } = useRTL()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30" dir={dir}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Building2 className="h-5 w-5 text-primary" />
              <span>{t('common.app_name')}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Solution complète de gestion des ressources humaines pour les
              entreprises marocaines.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Produit</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-foreground">
                  Démo
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-foreground">
                  Intégrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/docs" className="hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-foreground">
                  Statut
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-foreground">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-foreground">
                  Sécurité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {t('common.app_name')}. Tous droits réservés.
          </p>
          <p className="mt-2">
            Développé avec ❤️ pour les entreprises marocaines
          </p>
        </div>
      </div>
    </footer>
  )
}
