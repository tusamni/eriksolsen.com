/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{astro,js,mdx,ts,css}"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ["Manrope", ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: [],
}
