import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        '2xl': '1280px', // Max container width
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--ui-border))',
        input: 'hsl(var(--ui-input))',
        ring: 'hsl(var(--ui-ring))',
        background: 'hsl(var(--ui-bg))',
        foreground: 'hsl(var(--ui-text))',
        primary: {
          DEFAULT: 'hsl(var(--ui-accent))',
          foreground: 'hsl(var(--ui-accent-fg))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--ui-accent-2))',
          foreground: 'hsl(var(--ui-accent-2-fg))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--ui-danger))',
          foreground: 'hsl(var(--ui-danger-fg))',
        },
        success: {
          DEFAULT: 'hsl(var(--ui-success))',
          foreground: 'hsl(var(--ui-success-fg))',
        },
        warning: {
          DEFAULT: 'hsl(var(--ui-warning))',
          foreground: 'hsl(var(--ui-warning-fg))',
        },
        muted: {
          DEFAULT: 'hsl(var(--ui-elev-1))',
          foreground: 'hsl(var(--ui-text-muted))',
        },
        accent: {
          DEFAULT: 'hsl(var(--ui-elev-2))',
          foreground: 'hsl(var(--ui-text))',
        },
        popover: {
          DEFAULT: 'hsl(var(--ui-elev-2))',
          foreground: 'hsl(var(--ui-text))',
        },
        card: {
          DEFAULT: 'hsl(var(--ui-elev-1))',
          foreground: 'hsl(var(--ui-text))',
        },
      },
      borderRadius: {
        sm: 'var(--ui-radius-sm)',
        DEFAULT: 'var(--ui-radius)',
        md: 'var(--ui-radius-md)',
        lg: 'var(--ui-radius-lg)',
        xl: 'calc(var(--ui-radius-lg) + 4px)',
        '2xl': 'calc(var(--ui-radius-lg) + 8px)',
      },
      spacing: {
        '4.5': '1.125rem',    // 18px
        '18': '4.5rem',       // 72px
        '88': '22rem',        // 352px
        '128': '32rem',       // 512px
      },
      boxShadow: {
        '1': 'var(--ui-shadow-1)',
        '2': 'var(--ui-shadow-2)',
        '3': 'var(--ui-shadow-3)',
        'glass': 'var(--ui-shadow-glass)',
      },
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],      // 10px
        'xs': ['0.75rem', { lineHeight: '1rem' }],            // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],        // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],           // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],        // 18px
        'xl': ['1.25rem', { lineHeight: '1.875rem' }],        // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],            // 24px
        '3xl': ['1.75rem', { lineHeight: '2.25rem' }],        // 28px
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],        // 36px
        '5xl': ['3rem', { lineHeight: '3.5rem' }],            // 48px
        '6xl': ['3.75rem', { lineHeight: '4.25rem' }],        // 60px
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
      },
      lineHeight: {
        'tight': '1.35',
        'normal': '1.5',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.01em',
        'wider': '0.02em',
        'widest': '0.05em',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-in-from-top': {
          from: { transform: 'translateY(-8px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-bottom': {
          from: { transform: 'translateY(8px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.9' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-in-top': 'slide-in-from-top 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'slide-in-bottom': 'slide-in-from-bottom 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)',
        'fade-in': 'fade-in 0.15s ease-out',
        'shimmer': 'shimmer 2s infinite linear',
        'gradient': 'gradient 4s ease infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale-in': 'scale-in 0.2s ease-out',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '8px',
        'glass-md': '12px',
      },
      transitionTimingFunction: {
        'ui': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        '120': '120ms',
        '180': '180ms',
        '250': '250ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}

export default config
