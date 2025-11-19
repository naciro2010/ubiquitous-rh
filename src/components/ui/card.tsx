import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const cardVariants = cva(
  'rounded-2xl transition-all duration-300 ease-out',
  {
    variants: {
      variant: {
        // Default modern card
        default:
          'bg-card text-card-foreground border border-border shadow-lg hover:shadow-xl hover:scale-[1.01]',

        // Glassmorphism effect - tendance 2025
        glass:
          'bg-background/40 backdrop-blur-xl border border-border/50 text-foreground shadow-glass hover:bg-background/60 hover:border-border/80 hover:shadow-2xl hover:scale-[1.01]',

        // Elevated card with gradient
        elevated:
          'bg-gradient-to-br from-card via-card to-muted/30 text-card-foreground border-0 shadow-2xl hover:shadow-3xl hover:scale-[1.01]',

        // Outline subtle
        outline:
          'bg-background border-2 border-border text-foreground hover:border-primary/50 hover:shadow-lg hover:scale-[1.01]',

        // Gradient border - moderne
        gradient:
          'bg-card text-card-foreground relative before:absolute before:inset-0 before:rounded-[inherit] before:p-[2px] before:bg-gradient-to-br before:from-primary before:to-secondary before:-z-10 shadow-lg hover:shadow-xl hover:scale-[1.01]',

        // Flat minimal
        flat:
          'bg-muted/30 text-foreground border-0 shadow-none hover:bg-muted/50 hover:shadow-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
)
Card.displayName = 'Card'

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
