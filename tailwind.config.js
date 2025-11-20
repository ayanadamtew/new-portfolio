/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPurple: "#a855f7",
        neonBlue: "#3b82f6",
        neonPink: "#ec4899",
        darkBg: "#0f172a",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: "0 0 20px rgba(168, 85, 247, 0.5)",
      }
    },
  },
  plugins: [],
}