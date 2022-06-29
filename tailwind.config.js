const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',

      }
    },
    extend: {
      fontFamily: {
        'sans': ['Patrick Hand', 'Arial', 'sans-serif', 'cursive']
      }
    },
  },
  plugins: [
      plugin(function({ addUtilities }) {
        addUtilities({
          '.bg-search': {
            'background-image': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E")`,
            'background-repeat': 'no-repeat',
            'background-position' : '20px'
          },
        })
      })
    ]
}
