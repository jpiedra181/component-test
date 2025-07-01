// tailwind.config.js
const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./src/**/*.{html,js,ts}"],
    theme: {
        extend: {
            colors: {
                primary: "#2b7fff",
                secondary: "#ff2056",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                ":root": {
                    "--color-primary": theme("colors.primary"),
                    "--color-secondary": theme("colors.secondary"),
                    "--radius-btn": theme("borderRadius.lg"),
                    "--padding-btn": theme("spacing.4"),
                },
            })
        }),
    ],
}
