/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,js,mdx,ts,css,scss}"],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        p: {
                            letterSpacing: "-0.025em",
                        },
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
