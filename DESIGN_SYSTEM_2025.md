# 🎨 Design System 2025 - RH Manager

## Vue d'ensemble

Ce design system intègre les dernières tendances UI/UX de 2025 avec un focus sur la modernité, la fluidité et la responsivité.

---

## ✨ Tendances 2025 implémentées

### 1. **Glassmorphism Avancé**
Effet de verre avec backdrop blur pour une profondeur visuelle moderne.

```tsx
<Button variant="glass">Click me</Button>
<Card variant="glass">Content</Card>
<Badge variant="glass">New</Badge>
```

### 2. **Gradients Dynamiques**
Dégradés vibrants qui s'animent au survol.

```tsx
<Button variant="gradient">Gradient Button</Button>
<Badge variant="gradient">Gradient Badge</Badge>
```

### 3. **Micro-interactions**
Animations fluides sur tous les composants (scale, rotate, glow).

```tsx
<Icon animation="scale" variant="primary">
  <Sparkles />
</Icon>
```

### 4. **Neumorphism Soft**
Design avec profondeur et relief subtil.

```tsx
<Button variant="neo">Neumorphic Button</Button>
```

---

## 🎯 Composants

### Button

**Variantes disponibles:**
- `default` - Gradient moderne avec effet glow
- `glass` - Glassmorphism avec backdrop blur
- `gradient` - Gradient animé vivid
- `destructive` - Pour actions destructives
- `outline` - Outline avec shimmer effect
- `secondary` - Style secondaire avec profondeur
- `success` - Variante success
- `ghost` - Transparent avec hover
- `link` - Style lien
- `neo` - Neumorphism

**Tailles:**
- `xs` - 7px height
- `sm` - 9px height
- `default` - 10px height
- `lg` - 12px height
- `xl` - 14px height
- `icon` - 10x10px
- `icon-sm` - 8x8px
- `icon-lg` - 12x12px

**Exemple d'utilisation:**

```tsx
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

// Basic button
<Button>Click me</Button>

// Glass variant avec icon
<Button variant="glass" size="lg" icon={<ArrowRight />} iconPosition="right">
  Continue
</Button>

// Gradient avec loading
<Button variant="gradient" loading>
  Loading...
</Button>
```

---

### Icon

Wrapper pour icônes avec animations et effets modernes.

**Variantes:**
- `default` - Standard
- `primary` - Couleur primaire avec glow
- `secondary` - Couleur secondaire
- `muted` - Atténué
- `success` - Vert
- `warning` - Jaune
- `destructive` - Rouge
- `gradient` - Dégradé
- `glass` - Glass effect

**Animations:**
- `none` - Pas d'animation
- `spin` - Rotation continue
- `pulse` - Pulsation douce
- `bounce` - Rebond subtil
- `float` - Flottement
- `scale` - Scale au hover
- `rotate` - Rotation au hover
- `wiggle` - Mouvement au hover

**Exemple:**

```tsx
import { Icon } from '@/components/ui/icon'
import { Sparkles } from 'lucide-react'

<Icon variant="primary" animation="pulse" size="lg">
  <Sparkles />
</Icon>
```

---

### Badge

**Variantes:**
- `default` - Gradient moderne
- `secondary` - Secondary avec shimmer
- `destructive` - Rouge avec glow
- `success` - Vert moderne
- `warning` - Jaune vibrant
- `outline` - Outline avec shimmer
- `glass` - Glassmorphism
- `gradient` - Gradient rainbow
- `soft` - Subtle soft
- `neon` - Effet néon

**Tailles:**
- `sm` - Petit
- `default` - Standard
- `lg` - Grand

**Exemple:**

```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="gradient" size="lg">
  New Feature
</Badge>
```

---

### Card

**Variantes:**
- `default` - Card moderne avec hover
- `glass` - Glassmorphism effect
- `elevated` - Card élevée avec gradient
- `outline` - Outline subtil
- `gradient` - Gradient border
- `flat` - Flat minimal

**Exemple:**

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

<Card variant="glass">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

---

## 📱 Responsivité

### Breakpoints Tailwind

```
sm: 640px   - Mobile landscape / Small tablet
md: 768px   - Tablet portrait
lg: 1024px  - Tablet landscape / Small desktop
xl: 1280px  - Desktop
2xl: 1536px - Large desktop
```

### Utilitaires Responsive

Classes personnalisées pour un design responsive rapide:

```tsx
// Text responsive
<h1 className="text-responsive-2xl">Responsive Title</h1>
<p className="text-responsive-base">Responsive paragraph</p>

// Padding responsive
<div className="padding-responsive padding-responsive-y">
  Content with responsive padding
</div>

// Gap responsive
<div className="flex gap-responsive">
  Items with responsive gap
</div>
```

### Bonnes pratiques Mobile-First

1. **Toujours commencer par mobile** puis ajouter les breakpoints
2. **Utiliser flex-col sur mobile** puis flex-row sur desktop
3. **Utiliser w-full sur mobile** puis w-auto sur desktop
4. **Padding/margin adaptés** selon la taille d'écran

**Exemple:**

```tsx
// Mobile-first approach
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
  <Button className="w-full sm:w-auto">Action 1</Button>
  <Button className="w-full sm:w-auto">Action 2</Button>
</div>
```

---

## 🎨 Animations

### Animations disponibles

```css
animate-gradient      - Gradient animé (4s)
animate-glow         - Effet glow (2s)
animate-float        - Flottement (3s)
animate-pulse-soft   - Pulsation douce (2s)
animate-scale-in     - Scale in (0.2s)
animate-bounce-subtle - Rebond subtil (1s)
animate-shimmer      - Shimmer effect (2s)
```

### Usage

```tsx
<div className="animate-float">
  Floating element
</div>

<Badge className="animate-pulse-soft">
  Pulsing badge
</Badge>
```

---

## 🎯 Accessibilité

Tous les composants respectent:
- ✅ WCAG 2.2 Level AA
- ✅ Focus states visibles
- ✅ Support clavier complet
- ✅ ARIA labels appropriés
- ✅ Reduced motion support

---

## 🚀 Performance

- **Animations GPU-accelerated** (transform, opacity)
- **Backdrop-blur optimisé** pour le glassmorphism
- **Transitions fluides** avec easing curves optimisées
- **Lazy loading** des animations lourdes

---

## 💡 Exemples d'utilisation

### Hero Section Moderne

```tsx
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Icon } from '@/components/ui/icon'
import { Sparkles, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="padding-responsive padding-responsive-y">
      <div className="text-center max-w-4xl mx-auto">
        {/* Badge animé */}
        <Badge variant="gradient" size="lg" className="mb-8 animate-scale-in">
          <Icon variant="primary" animation="pulse">
            <Sparkles className="h-4 w-4" />
          </Icon>
          Version 3.0
        </Badge>

        {/* Titre responsive */}
        <h1 className="text-responsive-2xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Bienvenue dans le futur
        </h1>

        {/* CTA responsive */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            variant="gradient"
            size="xl"
            icon={<ArrowRight className="h-5 w-5" />}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            Commencer
          </Button>
          <Button
            variant="glass"
            size="xl"
            className="w-full sm:w-auto"
          >
            En savoir plus
          </Button>
        </div>
      </div>
    </section>
  )
}
```

### Card Grid Responsive

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-responsive-lg">
      <Card variant="glass" className="animate-scale-in">
        <CardHeader>
          <CardTitle>Feature 1</CardTitle>
        </CardHeader>
        <CardContent>
          Description
        </CardContent>
      </Card>
      {/* More cards... */}
    </div>
  )
}
```

---

## 🎨 Palette de couleurs

Les couleurs sont définies via CSS variables pour supporter le dark mode:

```css
/* Light mode */
--ui-accent: 221 83% 68%        /* Primary blue */
--ui-accent-2: 265 75% 71%      /* Secondary purple */
--ui-success: 142 76% 36%       /* Green */
--ui-warning: 38 92% 50%        /* Orange */
--ui-danger: 0 84% 60%          /* Red */

/* Dark mode - automatically adjusted */
```

---

## 📚 Ressources

- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
- [Lucide Icons](https://lucide.dev)
- [Class Variance Authority](https://cva.style)

---

**Version:** 3.0
**Date:** 2025
**Auteur:** Design System Team
