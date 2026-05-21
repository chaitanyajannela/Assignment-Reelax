/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        page: '#f2f2f2',
        primary: '#1977f2',
        'primary-border': 'rgba(67, 136, 255, 0.3)',
        'primary-bg': 'rgba(67, 120, 255, 0.05)',
        'primary-border-light': 'rgba(67, 111, 255, 0.3)',
        'primary-muted': 'rgba(49, 113, 255, 0.2)',
        'primary-highlight': 'rgba(67, 136, 255, 0.1)',
        'wallet-bg': 'rgba(239, 246, 255, 0.3)',
        heading: '#111827',
        'heading-muted': '#505050',
        label: '#353535',
        muted: '#6b7280',
        optional: '#9c9c9c',
        placeholder: '#b0b5be',
        border: '#e5e7eb',
        'border-light': '#eaeaea',
        input: '#f8fafc',
        coupon: 'rgba(243, 244, 246, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'price-xl': ['30px', { lineHeight: '36px', fontWeight: '800' }],
        'price-lg': ['24px', { lineHeight: '32px', fontWeight: '800' }],
      },
      borderRadius: {
        card: '10px',
        input: '4px',
        pill: '24px',
      },
      boxShadow: {
        card: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
}
