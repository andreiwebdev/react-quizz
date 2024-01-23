/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
            colors: {
                purple: "#A729F5",
                error: "#EE5454",
                white: "#FFFFFF",
                lightBlue: "#ABC1E1",
                darkNavy: "#313E51",
                lightBackground: "#F4F6FA",
                greyNavy: "#626C7F",
                lightBluish: "#ABC1E1",
                navy: "#3B4D66",
                lightGray: "#F4F6FA",
            },
            backgroundImage: {
                "mobile-light":
                    "url('src/assets/images/img/pattern-background-mobile-light.svg')",
                "tablet-light":
                    "url('/src/assets/images/img/pattern-background-tablet-light.svg')",
                "desktop-light":
                    "url('/src/assets/images/img/pattern-background-desktop-light.svg')",
                "mobile-dark":
                    "url('src/assets/images/img/pattern-background-mobile-dark.svg')",
                "tablet-dark":
                    "url('/src/assets/images/img/pattern-background-tablet-dark.svg')",
                "desktop-dark":
                    "url('/src/assets/images/img/pattern-background-desktop-dark.svg')",
                "icon-sun-light":
                    "url('/src/assets/images/img/icon-sun-light.svg')",
                "icon-sun-dark":
                    "url('/src/assets/images/img/icon-sun-dark.svg')",
                "icon-moon-light":
                    "url('/src/assets/images/img/icon-moon-light.svg')",
                "icon-moon-dark":
                    "url('/src/assets/images/img/icon-moon-dark.svg')",
            },
            boxShadow: {
                "card-light": "0px 16px 40px 0px rgba(143, 160, 193, 0.14)",
                "card-dark": "0px 16px 40px 0px rgba(49, 62, 81, 0.14)",
            },
        },
    },
    plugins: [],
};
