import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        // Clean primary badge
        default:
          'bg-primary text-primary-foreground',

        // Subtle secondary badge
        secondary:
          'bg-muted text-foreground',

        // Destructive badge
        destructive:
          'bg-destructive text-destructive-foreground',

        // Success badge
        success:
          'bg-success text-success-foreground',

        // Warning badge
        warning:
          'bg-warning text-warning-foreground',

        // Clean outline badge
        outline:
          'border border-border bg-background text-foreground',

        // Soft subtle badge
        soft:
          'bg-accent text-foreground',
      },
      size: {
        sm: 'text-[10px] px-2 py-0.5',
        default: 'text-xs px-2.5 py-0.5',
        lg: 'text-sm px-3 py-1',
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
