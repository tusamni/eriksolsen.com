/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,js,ts,mdx,css,scss}"],
    theme: {
        extend: {
            typography: {
                "3xl": {
                    css: {
                        fontSize: "1.875rem",
                        lineHeight: "1.625",
                    },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
