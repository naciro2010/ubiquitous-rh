import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const iconVariants = cva(
  'inline-flex items-center justify-center transition-all duration-300 ease-out',
  {
    variants: {
      variant: {
        // Standard icon
        default: 'text-foreground',

        // Primary color with glow
        primary: 'text-primary group-hover:drop-shadow-[0_0_8px_rgba(110,143,255,0.5)]',

        // Secondary color
        secondary: 'text-secondary group-hover:drop-shadow-[0_0_8px_rgba(162,119,255,0.5)]',

        // Muted for subtle icons
        muted: 'text-muted-foreground',

        // Success
        success: 'text-success group-hover:drop-shadow-[0_0_8px_rgba(22,163,74,0.5)]',

        // Warning
        warning: 'text-warning group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]',

        // Destructive
        destructive: 'text-destructive group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]',

        // Gradient effect
        gradient: 'bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent',

        // Glass effect
        glass: 'text-foreground/80 backdrop-blur-sm',
      },
      animation: {
        none: '',
        spin: 'animate-spin',
        pulse: 'animate-pulse-soft',
        bounce: 'animate-bounce-subtle',
        float: 'animate-float',
        scale: 'hover:scale-110 active:scale-95',
        rotate: 'hover:rotate-12 active:rotate-0',
        wiggle: 'hover:animate-bounce-subtle',
      },
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        default: 'h-5 w-5',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-10 w-10',
        '2xl': 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      animation: 'none',
      size: 'default',
    },
  }
)

export interface IconProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof iconVariants> {
  children: React.ReactNode
  asChild?: boolean
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ className, variant, animation, size, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(iconVariants({ variant, animation, size, className }))}
        {...props}
      >
        {children}
      </span>
    )
  }
)
Icon.displayName = 'Icon'

export { Icon, iconVariants }
