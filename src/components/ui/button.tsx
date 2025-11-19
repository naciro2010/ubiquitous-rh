import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'btn-base inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:grayscale active:scale-[0.97] relative overflow-hidden group',
  {
    variants: {
      variant: {
        // Modern gradient primary with glow effect
        default: 'bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',

        // Glassmorphism variant - ultra moderne 2025
        glass: 'bg-background/40 backdrop-blur-xl border border-border/50 text-foreground shadow-glass hover:bg-background/60 hover:border-border/80 hover:shadow-2xl hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/10 before:to-secondary/10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500',

        // Gradient vivid - tendance 2025
        gradient: 'bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/40 hover:bg-right hover:scale-[1.02] animate-gradient',

        // Destructive avec effet néon
        destructive: 'bg-gradient-to-br from-destructive to-destructive/90 text-destructive-foreground shadow-lg shadow-destructive/25 hover:shadow-xl hover:shadow-destructive/40 hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity',

        // Outline moderne avec effet shimmer
        outline: 'border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:shadow-md hover:scale-[1.02] relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',

        // Secondary avec profondeur
        secondary: 'bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/20 hover:shadow-xl hover:shadow-secondary/35 hover:scale-[1.02] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/15 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',

        // Success variant
        success: 'bg-gradient-to-br from-success via-success to-success/90 text-success-foreground shadow-lg shadow-success/25 hover:shadow-xl hover:shadow-success/40 hover:scale-[1.02]',

        // Ghost moderne
        ghost: 'hover:bg-accent/80 hover:text-accent-foreground backdrop-blur-sm hover:shadow-md hover:scale-[1.02] transition-all',

        // Link avec underline animé
        link: 'text-primary underline-offset-4 hover:underline decoration-2 decoration-primary/50 hover:decoration-primary transition-all',

        // Neumorphism soft - tendance 2025
        neo: 'bg-background text-foreground shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.7)] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(255,255,255,0.02)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.7)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.15),inset_-6px_-6px_12px_rgba(255,255,255,0.5)]',
      },
      size: {
        default: 'h-10 px-5 py-2 rounded-xl text-sm',
        xs: 'h-7 rounded-lg px-3 text-xs',
        sm: 'h-9 rounded-xl px-4 text-sm',
        lg: 'h-12 rounded-xl px-8 text-base',
        xl: 'h-14 rounded-2xl px-12 text-lg font-bold',
        icon: 'h-10 w-10 rounded-xl',
        'icon-sm': 'h-8 w-8 rounded-lg',
        'icon-lg': 'h-12 w-12 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    loading = false,
    icon,
    iconPosition = 'left',
    children,
    disabled,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-label="Loading"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && iconPosition === 'left' && (
          <span className="inline-flex shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-[-2deg]">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {!loading && icon && iconPosition === 'right' && (
          <span className="inline-flex shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-[2deg]">
            {icon}
          </span>
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
