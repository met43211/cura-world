import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-shadow': 'var(--primary-shadow)',
      },
      animation: {
        blink: 'blink 1s linear infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '100%' },
          '50%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
