/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'neumorphic': '#eef1f8',
        'neumorphic-shadow': '#cacdd3',
        'neumorphic-highlight': '#ffffff',
        'accent': '#5ba4cf',
        'accent-hover': '#4a93be',
    },
    boxShadow: {
        'neumorphic': '20px 20px 60px #cacdd3, -20px -20px 60px #ffffff',
        'neumorphic-inset': 'inset 4px 4px 8px #cacdd3, inset -4px -4px 8px #ffffff',
        'neumorphic-button': '4px 4px 8px #cacdd3, -4px -4px 8px #ffffff',
        'neumorphic-button-hover': '2px 2px 4px #cacdd3, -2px -2px 4px #ffffff',
    },

    },
  },
  plugins: [],
}

