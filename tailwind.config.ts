
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				jockepay: {
					blue: '#1F6FEB',
					darkblue: '#0A2E69',
					neon: '#00FFCC',
					dark: '#0A192F',
					light: '#F8FAFC',
					success: '#00c896',
					danger: '#ff4c4c',
					warning: '#FFAB00',
					neutral: '#8E9196'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Space Grotesk', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '16px',
				'2xl': '20px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'flow': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'fade-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'data-flow': {
					'0%': { 
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'20%': { 
						opacity: '1'
					},
					'80%': { 
						opacity: '1'
					},
					'100%': { 
						transform: 'translateX(100vw)',
						opacity: '0'
					}
				},
				'pulse-width': {
					'0%, 100%': { width: '70%', opacity: '1' },
					'50%': { width: '60%', opacity: '0.7' }
				},
				'grow': {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'status-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'node-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.05)', opacity: '0.8' }
				},
				'appear': {
					'0%': { opacity: '0', transform: 'scale(0.96)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 10px 2px rgba(0,255,204,0.2)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(0,255,204,0.4)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'flow': 'flow 8s ease-in-out infinite',
				'fade-up': 'fade-up 0.8s ease-out forwards',
				'float': 'float 8s infinite ease-in-out',
				'float-delayed': 'float 10s infinite ease-in-out reverse',
				'data-flow': 'data-flow 5s infinite ease-in-out',
				'pulse-width': 'pulse-width 2s infinite ease-in-out',
				'grow': 'grow 2s forwards ease-out',
				'shimmer': 'shimmer 2s infinite linear',
				'status-pulse': 'status-pulse 2s infinite ease-in-out',
				'node-pulse': 'node-pulse 3s infinite ease-in-out',
				'appear': 'appear 0.4s ease-out forwards',
				'glow': 'glow 2s infinite ease-in-out',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-hero': 'linear-gradient(135deg, #0A192F 0%, #1F6FEB 100%)',
				'gradient-card': 'linear-gradient(to bottom, rgba(31,111,235,0.03), rgba(0,255,204,0.03))',
				'gradient-tech': 'linear-gradient(to bottom right, #0A192F, #1F6FEB)',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'mesh-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%231F6FEB' fill-opacity='0.05' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/svg%3E\")",
			},
			transitionProperty: {
				'width': 'width',
				'spacing': 'margin, padding',
				'height': 'height',
				'backdrop': 'backdrop-filter',
			},
			spacing: {
				'1/6': '16.666667%',
				'5/6': '83.333333%',
			},
			backdropBlur: {
				xs: '2px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
