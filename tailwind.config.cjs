/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{astro,js,ts,mdx,ts,css,scss}"],
    theme: {
        fontSize: {
            xs: [
                "0.75rem",
                {
                    lineHeight: "1rem",
                },
            ],
            sm: [
                "0.875rem",
                {
                    lineHeight: "1.5rem",
                },
            ],
            base: [
                "1rem",
                {
                    lineHeight: "1.75rem",
                },
            ],
            lg: [
                "1.125rem",
                {
                    lineHeight: "2rem",
                },
            ],
            xl: [
                "1.25rem",
                {
                    lineHeight: "2rem",
                },
            ],
            "2xl": [
                "1.5rem",
                {
                    lineHeight: "2rem",
                },
            ],
            "3xl": [
                "2rem",
                {
                    lineHeight: "2.5rem",
                },
            ],
            "4xl": [
                "2.5rem",
                {
                    lineHeight: "3.5rem",
                },
            ],
            "5xl": [
                "3rem",
                {
                    lineHeight: "3.5rem",
                },
            ],
            "6xl": [
                "3.75rem",
                {
                    lineHeight: "1",
                },
            ],
            "7xl": [
                "4.5rem",
                {
                    lineHeight: "1.1",
                },
            ],
            "8xl": [
                "6rem",
                {
                    lineHeight: "1",
                },
            ],
            "9xl": [
                "8rem",
                {
                    lineHeight: "1",
                },
            ],
        },
        extend: {
            colors: {
                black: "#0C1824",
                regent: {
                    50: "#F4F9FB",
                    100: "#E9F3F6",
                    200: "#D7E9EF",
                    300: "#C1DCE6",
                    400: "#AFD2DF",
                    500: "#99C6D6",
                    600: "#66A9C2",
                    700: "#3F839C",
                    800: "#2A596A",
                    900: "#142B33",
                },
                lila: {
                    50: "#F8F8FC",
                    100: "#F1F2F9",
                    200: "#DFE2F2",
                    300: "#CDD1EA",
                    400: "#B3BBE0",
                    500: "#9CA6D6",
                    600: "#8894CE",
                    700: "#7683C6",
                    800: "#5969BA",
                    900: "#3C4A90",
                },
                yellow: {
                    50: "#FFFCFA",
                    100: "#FFFAF5",
                    200: "#FFF5EB",
                    300: "#FFF0E0",
                    400: "#FFE8D1",
                    500: "#FFE3C7",
                    600: "#FFC78F",
                },
                pink: {
                    50: "#FEFBFB",
                    100: "#FDF6F8",
                    200: "#FBEAED",
                    300: "#F9DDE2",
                    400: "#F7D4DA",
                    500: "#F4C4CD",
                    600: "#EFA9B6",
                },
            },
            fontFamily: {
                sans: ["General Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/container-queries")],
};
