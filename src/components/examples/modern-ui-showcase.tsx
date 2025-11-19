'use client'

/**
 * Modern UI Showcase - Exemples d'utilisation des composants 2025
 *
 * Ce fichier démontre l'utilisation de tous les nouveaux composants
 * avec les tendances design 2025.
 */

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import {
  Sparkles,
  ArrowRight,
  Zap,
  Heart,
  Star,
  Download,
  Upload,
  Send,
  Trash2,
} from 'lucide-react'

export function ModernUIShowcase() {
  return (
    <div className="min-h-screen bg-background padding-responsive padding-responsive-y">
      <div className="container mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <Badge variant="gradient" size="lg" className="animate-scale-in">
            <Icon variant="primary" animation="pulse">
              <Sparkles className="h-4 w-4" />
            </Icon>
            Design System 2025
          </Badge>
          <h1 className="text-responsive-2xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Modern UI Components
          </h1>
          <p className="text-responsive-base text-muted-foreground max-w-2xl mx-auto">
            Découvrez les dernières tendances UI/UX avec des composants modernes,
            responsives et accessibles.
          </p>
        </div>

        {/* Buttons Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-responsive-xl font-bold mb-2">Boutons</h2>
            <p className="text-muted-foreground">Variantes modernes avec animations fluides</p>
          </div>

          {/* Button Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-responsive">

            {/* Default Gradient */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-base">Default Gradient</CardTitle>
                <CardDescription>Gradient moderne avec glow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Default Button</Button>
                <Button size="lg" className="w-full" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right">
                  With Icon
                </Button>
                <Button size="sm" className="w-full" loading>
                  Loading State
                </Button>
              </CardContent>
            </Card>

            {/* Glass Variant */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-base">Glassmorphism</CardTitle>
                <CardDescription>Effet de verre moderne</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="glass" className="w-full">Glass Button</Button>
                <Button variant="glass" size="lg" className="w-full" icon={<Zap className="h-5 w-5" />}>
                  Glass + Icon
                </Button>
                <Button variant="glass" size="sm" className="w-full">
                  Small Glass
                </Button>
              </CardContent>
            </Card>

            {/* Gradient Animated */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-base">Gradient Animé</CardTitle>
                <CardDescription>Gradient vivid en mouvement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="gradient" className="w-full">Gradient</Button>
                <Button variant="gradient" size="lg" className="w-full" icon={<Star className="h-5 w-5" />}>
                  Animated
                </Button>
                <Button variant="gradient" size="sm" className="w-full">
                  Small
                </Button>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-base">Actions</CardTitle>
                <CardDescription>Boutons d'action colorés</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="success" className="w-full" icon={<Download className="h-4 w-4" />}>
                  Download
                </Button>
                <Button variant="destructive" className="w-full" icon={<Trash2 className="h-4 w-4" />}>
                  Delete
                </Button>
                <Button variant="secondary" className="w-full" icon={<Upload className="h-4 w-4" />}>
                  Upload
                </Button>
              </CardContent>
            </Card>

            {/* Outline & Ghost */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-base">Outline & Ghost</CardTitle>
                <CardDescription>Variants subtils</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">Outline</Button>
                <Button variant="ghost" className="w-full">Ghost</Button>
                <Button variant="link" className="w-full">Link</Button>
              </CardContent>
            </Card>

            {/* Neumorphism */}
            <Card variant="glass">
              <CardHeader>
                <CardTitle className="text-base">Neumorphism</CardTitle>
                <CardDescription>Design avec profondeur</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="neo" className="w-full">Neo Button</Button>
                <Button variant="neo" size="lg" className="w-full">
                  Large Neo
                </Button>
                <Button variant="neo" size="icon" className="mx-auto">
                  <Heart className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

          </div>

          {/* Icon Buttons */}
          <div className="text-center space-y-4">
            <h3 className="text-responsive-lg font-semibold">Icon Buttons</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Button size="icon" variant="default">
                <Send className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="glass">
                <Download className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="gradient">
                <Star className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="success">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="destructive">
                <Trash2 className="h-5 w-5" />
              </Button>
              <Button size="icon-lg" variant="outline">
                <Sparkles className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-responsive-xl font-bold mb-2">Badges</h2>
            <p className="text-muted-foreground">Tags modernes et vibrants</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="gradient" size="lg">Gradient</Badge>
            <Badge variant="glass">Glass</Badge>
            <Badge variant="neon">Neon</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Error</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="soft" size="lg">Soft</Badge>
          </div>
        </section>

        {/* Icons Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-responsive-xl font-bold mb-2">Icons Animés</h2>
            <p className="text-muted-foreground">Icônes avec animations et effets</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            <div className="text-center space-y-2">
              <Icon variant="primary" animation="pulse" size="xl">
                <Sparkles />
              </Icon>
              <p className="text-xs text-muted-foreground">Pulse</p>
            </div>
            <div className="text-center space-y-2">
              <Icon variant="secondary" animation="spin" size="xl">
                <Zap />
              </Icon>
              <p className="text-xs text-muted-foreground">Spin</p>
            </div>
            <div className="text-center space-y-2">
              <Icon variant="success" animation="bounce" size="xl">
                <Heart />
              </Icon>
              <p className="text-xs text-muted-foreground">Bounce</p>
            </div>
            <div className="text-center space-y-2">
              <Icon variant="warning" animation="float" size="xl">
                <Star />
              </Icon>
              <p className="text-xs text-muted-foreground">Float</p>
            </div>
            <div className="text-center space-y-2">
              <Icon variant="destructive" animation="scale" size="xl">
                <ArrowRight />
              </Icon>
              <p className="text-xs text-muted-foreground">Scale</p>
            </div>
            <div className="text-center space-y-2">
              <Icon variant="gradient" animation="rotate" size="xl">
                <Sparkles />
              </Icon>
              <p className="text-xs text-muted-foreground">Rotate</p>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-responsive-xl font-bold mb-2">Cards</h2>
            <p className="text-muted-foreground">Cards modernes avec effets</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-responsive">
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Card standard avec hover</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contenu de la card avec shadow et hover effect.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="glass">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription>Effet glassmorphism</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card avec effet de verre et backdrop blur.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="glass" size="sm" className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card variant="gradient">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Border gradient</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Card avec border en gradient coloré.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="gradient" size="sm" className="w-full">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Responsive Demo */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-responsive-xl font-bold mb-2">Responsive Design</h2>
            <p className="text-muted-foreground">Adapté à toutes les tailles d'écran</p>
          </div>

          <Card variant="glass" className="padding-responsive">
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <h3 className="text-responsive-lg font-semibold">Breakpoints</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    <span>Mobile: &lt; 640px</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-secondary"></span>
                    <span>Tablet: 640px - 1024px</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-success"></span>
                    <span>Desktop: &gt; 1024px</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="glass" className="w-full sm:w-auto">
                  Mobile: Full Width
                </Button>
                <Button variant="gradient" className="w-full sm:w-auto">
                  Desktop: Auto Width
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <div className="text-center padding-responsive-y border-t">
          <p className="text-sm text-muted-foreground">
            Design System 2025 - Tous les composants sont accessibles WCAG 2.2 AA
          </p>
        </div>

      </div>
    </div>
  )
}
