import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative overflow-hidden group',
  {
    variants: {
      variant: {
        // Modern gradient primary
        default:
          'bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-105',

        // Secondary with shimmer
        secondary:
          'bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 hover:scale-105',

        // Destructive with glow
        destructive:
          'bg-gradient-to-r from-destructive to-destructive/90 text-destructive-foreground shadow-md shadow-destructive/20 hover:shadow-lg hover:shadow-destructive/30 hover:scale-105',

        // Success modern
        success:
          'bg-gradient-to-r from-success to-success/90 text-success-foreground shadow-md shadow-success/20 hover:shadow-lg hover:shadow-success/30 hover:scale-105',

        // Warning vibrant
        warning:
          'bg-gradient-to-r from-warning to-warning/90 text-warning-foreground shadow-md shadow-warning/20 hover:shadow-lg hover:warning/30 hover:scale-105',

        // Outline moderne avec effet shimmer
        outline:
          'border-2 border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent hover:scale-105 before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',

        // Glass effect - tendance 2025
        glass:
          'bg-background/40 backdrop-blur-md border border-border/50 text-foreground shadow-glass hover:bg-background/60 hover:border-border/80 hover:scale-105',

        // Gradient rainbow - tendance 2025
        gradient:
          'bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/40 hover:bg-right hover:scale-105',

        // Soft subtle
        soft:
          'bg-muted/50 text-foreground border border-border/30 backdrop-blur-sm hover:bg-muted hover:scale-105',

        // Neon effect
        neon:
          'bg-background border-2 border-primary text-primary shadow-[0_0_10px_rgba(110,143,255,0.3)] hover:shadow-[0_0_20px_rgba(110,143,255,0.5)] hover:scale-105',
      },
      size: {
        sm: 'text-[10px] px-2 py-0.5 rounded-full',
        default: 'text-xs px-3 py-1 rounded-full',
        lg: 'text-sm px-4 py-1.5 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
