/** @type {import('tailwindcss').Config} */
const withAlpha = (cssVar) =>
  `color-mix(in srgb, var(${cssVar}) calc(<alpha-value> * 100%), transparent)`

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
          DEFAULT: withAlpha('--color-cinnabar'),
          light: withAlpha('--color-cinnabar-light'),
          dark: withAlpha('--color-cinnabar-dark'),
        },
        gilt: {
          DEFAULT: withAlpha('--color-gilt'),
          light: withAlpha('--color-gilt-light'),
          dark: withAlpha('--color-gilt-dark'),
        },
        imperial: {
          DEFAULT: withAlpha('--color-imperial'),
          light: withAlpha('--color-imperial-light'),
          dark: withAlpha('--color-imperial-dark'),
        },
        xuan: {
          DEFAULT: withAlpha('--color-xuan'),
          paper: withAlpha('--color-xuan-paper'),
          card: withAlpha('--color-xuan-card'),
          elevated: withAlpha('--color-xuan-elevated'),
        },
        ink: {
          DEFAULT: withAlpha('--color-ink'),
          secondary: withAlpha('--color-ink-secondary'),
          muted: withAlpha('--color-ink-muted'),
        },
        dunhuang: {
          cyan: withAlpha('--color-dunhuang-cyan'),
          jade: withAlpha('--color-dunhuang-jade'),
          ochre: withAlpha('--color-dunhuang-ochre'),
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
