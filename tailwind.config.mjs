/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        blueray: '#1E3A8A',
        blue: '#2ccbf3ff',
        violet: '#bb99fa',
        green: '#b6d161',
        beige: '#f5b7a4',
        dark: {
          bg: '#0a0a0f',
          surface: '#111118',
          card: '#1a1a24',
          border: '#2a2a3a'
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: []
}
