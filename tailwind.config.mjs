/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'prussian-blue': '#003049',
        'cinnabar': '#D62828',
        'orange-peel': '#F77F00',
        'maize': '#FCBF49',
        'bone': '#EAE2B7',
        
        // Secondary Colors
        'burnt-sienna': '#e56b49',
        'dark-slate': '#2b2e44',
        'deep-red': '#953137',
        'gray-blue': '#a1a4b0',
        'taupe-gray': '#a0949c',
        
        // Accent Colors
        'coral': '#FC8862',
        'light-coral': '#FC7174',
      },
    },
  },
  plugins: [],
}
