/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A55',
          950: '#111A35',
          900: '#1B2A55',
          800: '#263A70',
          700: '#344B86',
          600: '#49639D',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E5CA78',
          dark: '#A98318',
        },
        body: '#24304F',
        muted: '#6B7280',
        'bg-light': '#F5F5F3',
        page: '#F5F5F3',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        card: "0 2px 10px rgba(27,42,85,.07)",
        soft: "0 12px 30px rgba(27,42,85,.14)",
        glow: "0 0 25px rgba(201, 162, 39, 0.35)",
        luxury: "0 20px 40px -15px rgba(27, 42, 85, 0.18)"
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        float: 'float 3.5s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}