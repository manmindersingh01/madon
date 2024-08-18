/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        moli: ["Mulish", "sans-serif"],
        oswald: ["Oswald", "sans-serif"]
      }
    },
  },
  plugins: [],
}

