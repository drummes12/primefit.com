/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ffae66'
      },
      fontFamily: {
        'special-elite': ['Special Elite', 'system-ui'],
        tourney: ['Tourney', 'system-ui']
      }
    }
  },
  plugins: []
}
