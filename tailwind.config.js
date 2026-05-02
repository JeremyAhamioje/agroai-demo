/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        leaf: {
          50: '#f0faf0',
          100: '#d8f3d8',
          200: '#b1e6b1',
          300: '#7dd07d',
          400: '#4ab84a',
          500: '#2d9e2d',
          600: '#1f7d1f',
          700: '#196319',
          800: '#154f15',
          900: '#0f3b0f',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#cddccd',
          300: '#a8c2a8',
          400: '#7da17d',
          500: '#5c825c',
          600: '#476847',
          700: '#3a543a',
          800: '#2f432f',
          900: '#263826',
        },
        soil: {
          50: '#faf7f2',
          100: '#f2ebe0',
          200: '#e3d3bc',
          300: '#d0b490',
          400: '#bc9265',
          500: '#a97a48',
          600: '#8e6239',
          700: '#744f30',
          800: '#5e402a',
          900: '#4d3524',
        }
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(45, 158, 45, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(45, 158, 45, 0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%': { top: '0%' },
          '50%': { top: '95%' },
          '100%': { top: '0%' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(45,158,45,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45,158,45,0.05) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(45,158,45,0.15) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,250,240,0.9) 100%)',
      },
    },
  },
  plugins: [],
}
