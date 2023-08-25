import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // I hate this
      typography: (theme: (arg0: string) => any) => ({
        invert: {
          css: {
            a: {
              color: theme("colors.orange.600"),
              "&:hover": {
                color: theme("colors.orange.500"),
              },
            },
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.orange.700"),
              textDecoration: "none",
              transition: theme("transitionProperty.DEFAULT"),
              transitionDuration: theme("transitionDuration.200"),
              "&:hover": {
                textDecoration: "underline",
                color: theme("colors.red.900"),
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
            },
            th: {
              color: theme("colors.zinc.100"),
              borderColor: theme("colors.zinc.400"),
              backgroundColor: theme("colors.red.900"),
              padding: "0.5em 1em",
              verticalAlign: "middle",
            },
            td: {
              borderColor: theme("colors.zinc.400"),
              padding: theme("spacing.2"),
              verticalAlign: "middle",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
