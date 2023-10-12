import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'title': '#fff',
        'info': '#4E515E',
        'card': '#1A1B22',
        'body': "#131517",
        'primary': "#FF9F10",
      }
    },
  },
  plugins: [],
}
export default config
