/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',        // teal
        primaryDark: '#0F766E',
        accent: '#6366F1',         // indigo
        background: '#F9FAFB',
        surface: '#FFFFFF',
        text: { 
          primary: '#0F172A', 
          secondary: '#475569' 
        },
        success: '#10B981',
        error: '#F43F5E',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
        display: ['Satoshi', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'lead': ['1.125rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
