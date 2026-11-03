/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cinnabar: {
          DEFAULT: 'var(--color-cinnabar)',
          light: 'var(--color-cinnabar-light)',
          dark: 'var(--color-cinnabar-dark)',
        },
        gilt: {
          DEFAULT: 'var(--color-gilt)',
          light: 'var(--color-gilt-light)',
          dark: 'var(--color-gilt-dark)',
        },
        imperial: {
          DEFAULT: 'var(--color-imperial)',
          light: 'var(--color-imperial-light)',
          dark: 'var(--color-imperial-dark)',
        },
        xuan: {
          DEFAULT: 'var(--color-xuan)',
          paper: 'var(--color-xuan-paper)',
          card: 'var(--color-xuan-card)',
          elevated: 'var(--color-xuan-elevated)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          secondary: 'var(--color-ink-secondary)',
          muted: 'var(--color-ink-muted)',
        },
        dunhuang: {
          cyan: 'var(--color-dunhuang-cyan)',
          jade: 'var(--color-dunhuang-jade)',
          ochre: 'var(--color-dunhuang-ochre)',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', '"Songti SC"', '"SimSun"', 'serif'],
        sans: ['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'scroll': '0 10px 35px -5px rgba(28, 24, 21, 0.08), 0 4px 12px -2px rgba(168, 36, 36, 0.05)',
        'gilt': '0 0 25px -4px rgba(200, 155, 64, 0.28)',
        'museum': '0 20px 50px -12px rgba(28, 20, 16, 0.16)'
      }
    }
  },
  plugins: []
}
