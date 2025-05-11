// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#facc15', // Ensure this color is defined
        }
      }
    }
  },
  plugins: [],
}
