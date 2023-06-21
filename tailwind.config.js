/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,js,mdx,ts,css,scss}"],
    darkMode: "class",
    plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
