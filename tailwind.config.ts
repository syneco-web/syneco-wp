import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Noto Sans JP', 'sans-serif'],
      },
      width: {
        main: 'clamp(0px, 1050px, 90vw)', // 基本は1050px、画面が小さくなると90vw
      },
    },
  },
  plugins: [],
}
export default config
