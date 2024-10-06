/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#e46c2b',
        'secondary-color': '#31382E',
        'tertiary-color': '#00FFC8',
        'accent-color': '#FFE1D0',
        'background-color': '#1b171d'
      }
    }
  },
  plugins: []
}
