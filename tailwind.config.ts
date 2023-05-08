import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.orange[700]"),
              textDecoration: "none",
              transition: theme("transitionProperty[DEFAULT]"),
              transitionDuration: theme("transitionDuration[200]"),
              "&:hover": {
                textDecoration: "underline",
                color: theme("colors.red[900]"),
              },
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            blockquote: {
              marginLeft: "2ch",
              marginRight: "2ch",
              marginTop: "1ex",
              marginBottom: 0,
              padding: "1.5ex 2ch",
              border: "0px",
              fontStyle: "inherit",
              fontWeight: "inherit",
              "& hr": {
                marginTop: theme("spacing[2.5]"),
                marginBottom: 0,
              },
            },
            th: {
              color: theme("colors.zinc[100]"),
              borderColor: theme("colors.zinc[400]"),
              backgroundColor: theme("colors.red[900]"),
              padding: "0.5em 1em",
              verticalAlign: "middle",
            },
            td: {
              borderColor: theme("colors.zinc[400]"),
              padding: theme("spacing[2]"),
              verticalAlign: "middle",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
