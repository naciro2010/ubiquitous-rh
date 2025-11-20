import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Copilot } from '@/components/landing/copilot'
import { Integrations } from '@/components/landing/integrations'
import { Pricing } from '@/components/landing/pricing'
import { FAQ } from '@/components/landing/faq'
import { CTA } from '@/components/landing/cta'
import { Navigation } from '@/components/landing/navigation'
import { Footer } from '@/components/landing/footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-background">
        <Hero />
        <Features />
        <Copilot />
        <Integrations />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
