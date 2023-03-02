/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      colors: {
        rosewood: {
          400: "#CD1313",
          500: "#850005",
          600: "#632D2C",
          700: "#64030f",
        },
        payne: {
          50: "#fcfcfc",
          200: "#f4f4f4",
          300: "#d7d7d7",
          400: "#a0a0a0",
          500: "#424248",
          600: "#303034",
          700: "#0c0c0c",
        },
        mango: "#dd6611",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-quotes-bg": theme("colors.payne[200]"),
            a: {
              color: theme("colors.mango"),
              textDecoration: "none",
            },
            "a:hover": {
              color: theme("colors.rosewood.500"),
              textDecoration: "underline",
            },
            hr: {
              height: ".0625rem",
              padding: "0",
              border: "0",
              borderTop: "1px solid rgb(160, 160, 160)",
              margin: "1em 0",
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            blockquote: {
              border: "none",
              fontStyle: "normal",
              backgroundColor: "var(--tw-prose-quotes-bg)",
              margin: "0.5em 1.25rem",
              padding: "0.825em 1.25em",
              clear: "both",
              boxShadow:
                "inset 0 0 0 0.0625rem rgba(215, 215, 215, 0.5), inset 0.0625rem 0 0 0 rgba(215, 215, 215, 0.5), inset 0 -0.0625rem 0 0 rgba(215, 215, 215, 0.75)",
              fontWeight: 400,
            },
            th: {
              color: theme("colors.payne.200"),
              backgroundColor: theme("colors.rosewood.700"),
              padding: "0.5em 1em",
              verticalAlign: "middle",
            },
            td: {
              padding: "0.5em",
              verticalAlign: "middle",
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-quotes-bg": theme("colors.payne[600]"),
            // blockquote: { backgroundColor: theme("colors.payne.600") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
