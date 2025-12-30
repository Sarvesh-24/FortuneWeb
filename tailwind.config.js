/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",  // 🔥 Auto-switch based on system theme
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#00619F",
                secondary: "#09659D",
                light: "#F1F2F2",
                danger: "#ED4F4A",
                dark: "#191919",

                /* Optional extra shades */
                "bg-dark-1": "#0A0F1A",
                "bg-dark-2": "#0F1624",
                "bg-light-1": "#F6F9FF",
                "bg-light-2": "#EEF4FF",
            },
        },
    },
    plugins: [],
};
