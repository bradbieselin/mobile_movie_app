/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [

        './app/**/*.{js,jsx,ts,tsx}',

        './components/**/*.{js,jsx,ts,tsx}',

    ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        light: {
          100: '#AAB8C2',
          200: '#E1E8ED',
          300: '#F5F8FA',
        },
        dark: {
          100: '#657786',
          200: '#14171A',
          300: '#000000',
        },
      }
    },
  },
  plugins: [],
}