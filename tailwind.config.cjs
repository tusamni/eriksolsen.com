/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,js,mdx,ts,css,scss}"],
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
