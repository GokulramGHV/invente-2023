/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'cse': "url('/cse.png')",
          'it': "url('/it.png')"
      },
      colors: {
        'steel': 'rgba(28, 26, 36, 1)',
      }
    },
  },
  plugins: [],
}
