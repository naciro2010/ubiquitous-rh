import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'RH Manager - Gestion RH Complète pour Entreprises Marocaines',
    template: '%s | RH Manager',
  },
  description:
    'Solution complète de gestion des ressources humaines adaptée aux entreprises marocaines. Gérez vos employés, congés, présences, paie et recrutement avec IA intégrée.',
  keywords: [
    'RH',
    'Ressources Humaines',
    'Maroc',
    'Gestion Employés',
    'Paie',
    'CNSS',
    'Congés',
    'Présences',
    'Recrutement',
    'ATS',
  ],
  authors: [{ name: 'RH Manager Team' }],
  creator: 'RH Manager',
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://naciro2010.github.io/ubiquitous-rh/',
    title: 'RH Manager - Gestion RH Moderne',
    description:
      'Solution complète de gestion RH pour entreprises marocaines',
    siteName: 'RH Manager',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RH Manager - Gestion RH Moderne',
    description:
      'Solution complète de gestion RH pour entreprises marocaines',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
