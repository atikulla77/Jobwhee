/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        './src/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        screens: {
            xx: "445px",

            gx: "540px",

            sm: "640px",

            md: "768px",

            dm: "860px",

            lg: "1024px",

            xl: "1280px",

            xxl: "1440px",

            "2xl": "1536px",

            "3xl": "1921px"
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                customGreen: "#CBEC5E",
                customDarkGreen: "#18470D",
            },
            zIndex: {
                200: "2000",
            },
        },
    },
}
plugins: [ require("@tailwindcss/typography") ]

