/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1E3A8A',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
          DEFAULT: '#1E3A8A',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#D97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#D97706',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#334155',
        },
        navy: {
          DEFAULT: '#0F172A',
          light: '#1e293b',
          dark: '#020617',
        },
        coolWhite: {
          DEFAULT: '#F8FAFC',
        },
        neutralGray: {
          DEFAULT: '#475569',
          light: '#64748b',
          dark: '#334155',
        },
      },
      borderRadius: {
        'brand': '8px',
      },
      boxShadow: {
        'brand': '0 2px 8px rgba(30, 58, 138, 0.12)',
        'brand-hover': '0 4px 16px rgba(30, 58, 138, 0.2)',
        'accent': '0 2px 8px rgba(217, 119, 6, 0.15)',
        'soft': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #1E3A8A, #334155)',
      },
    },
  },
  plugins: [],
};
