/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./pages/index.js",
        "./pages/about.js",
        "./component/Navbar.js",
        "./component/Footer.js",
        "./component/Layout.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
            },
        },

    },
    plugins: [],
};
