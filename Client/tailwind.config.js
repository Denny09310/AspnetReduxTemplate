const typography = require('@tailwindcss/typography')
const daisyui = require('daisyui')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [typography, daisyui],
};

