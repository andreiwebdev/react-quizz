/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
            colors: {
                error: "#EE5454",
                white: "#FFFFFF",
                lightBlue: "#ABC1E1",
                darkNavy: "#313E51",
                lightBackground: "#F4F6FA",
                greyNavy: "#626C7F",
            },
            backgroundImage: {
                "mobile-light":
                    "url('src/assets/images/img/pattern-background-mobile-light.svg')",
                "tablet-light":
                    "url('/src/assets/images/img/pattern-background-tablet-light.svg')",
                "desktop-light":
                    "url('/src/assets/images/img/pattern-background-desktop-light.svg')",
            },
        },
    },
    plugins: [],
};
