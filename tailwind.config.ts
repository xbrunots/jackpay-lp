
import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xs": "475px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "jockepay-dark": "#080b12",
        "jockepay-blue": "#3b82f6",
        "jockepay-neon": "#00f2ea",
        "jockepay-success": "#00c896",
        "jockepay-warning": "#f59e0b",
        "jockepay-danger": "#ef4444",
        "jockepay-green": "#10b981",
        "jockepay-purple": "#8b5cf6",
        "jockepay-orange": "#f97316",
        "jockepay-teal": "#14b8a6",
        // Nova paleta secundária para criar mais nuances
        "jockepay-blue-light": "#60a5fa",
        "jockepay-blue-dark": "#2563eb",
        "jockepay-neon-light": "#5cfff8",
        "jockepay-neon-dark": "#00c9c3",
        "jockepay-green-light": "#34d399",
        "jockepay-green-dark": "#059669",
        "jockepay-gray": {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        // Sistema coerente para arredondamentos
        'button': '0.75rem',
        'card': '1rem',
        'input': '0.625rem',
        'avatar': '9999px',
      },
      boxShadow: {
        // Sistema coerente de elevação com 4 níveis
        'subtle': '0 2px 5px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 10px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'strong': '0 10px 25px rgba(0, 0, 0, 0.08), 0 5px 10px rgba(0, 0, 0, 0.12)',
        'intense': '0 20px 40px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 15px rgba(59, 130, 246, 0.4)',
        'neon': '0 0 15px rgba(0, 242, 234, 0.4)',
        'green': '0 0 15px rgba(16, 185, 129, 0.4)',
        'purple': '0 0 15px rgba(139, 92, 246, 0.4)',
        'inner-light': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      gridTemplateColumns: {
        'fluid': 'repeat(auto-fit, minmax(250px, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        'auto-fill-sm': 'repeat(auto-fill, minmax(150px, 1fr))',
        'auto-fill-md': 'repeat(auto-fill, minmax(250px, 1fr))',
        'auto-fill-lg': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 15px rgba(0, 242, 234, 0.2)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 25px rgba(0, 242, 234, 0.4)' },
        },
        'status-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '0.6' },
        },
        'grow': {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        'appear': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        // Novas animações
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'reveal': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' }
        },
        'typing': {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        'blink': {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' }
        },
        'morph': {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'glow': 'glow 2s ease-in-out infinite',
        'status-pulse': 'status-pulse 1.5s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
        'grow': 'grow 0.8s ease-out forwards',
        'appear': 'appear 0.4s ease-out forwards',
        'spin-slow': 'spin-slow 3s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'scale': 'scale 0.3s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'ripple': 'ripple 1s ease-out forwards',
        'slide-left': 'slide-left 0.4s ease-out forwards',
        'slide-right': 'slide-right 0.4s ease-out forwards',
        // Novas animações
        'shimmer': 'shimmer 2s infinite',
        'reveal': 'reveal 0.6s ease-out forwards',
        'typing': 'typing 2s steps(40, end), blink .7s step-end infinite',
        'morph': 'morph 8s ease-in-out infinite'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config;
