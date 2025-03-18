/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        mixBlendMode: ['hover', 'group-hover'],
      },
    },
  plugins: [],
}