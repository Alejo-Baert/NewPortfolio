/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hat': ['Red Hat Display', 'Verdana', 'system-ui']
      }
    },
  },
  plugins: [],
}