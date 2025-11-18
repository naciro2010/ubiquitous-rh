import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cairo } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import { isRTL, type Locale } from '@/config/i18n'

// Font configurations
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()
  const direction = isRTL(locale as Locale) ? 'rtl' : 'ltr'

  return (
    <html
      lang={locale}
      dir={direction}
      suppressHydrationWarning
      className="smooth-scroll"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <NextIntlClientProvider messages={messages}>
            {/* Skip to content link for accessibility */}
            <a href="#main-content" className="skip-to-content">
              Skip to content
            </a>

            {children}

            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
