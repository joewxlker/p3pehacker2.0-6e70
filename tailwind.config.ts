import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      colors: {
        p1: "#eab308", // Bright yellow
        s1: "#0369a1", // Dark background
        s2: "#082f49", // Slightly lighter background
        s3: "#101010", // Even lighter background
        t1: "#ffffff", // White text
        t2: "#309930", // Light gray text
        shadow: "#10b98130", // Slight shadow
      },
    },
  },
  plugins: [],
} satisfies Config;
