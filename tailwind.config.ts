import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },

    backgroundImage: {
      "custom-gradient":
        "linear-gradient(226.25deg, #E6E5E6 16.85%, #FAF9FA 50.33%, #E5E5E6 81.23%)",
        'how-to-cards-custom-gradient': 'linear-gradient(152.2deg, #5F2388 0%, #391551 100%)',
    },
    extend: {
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Gray100: "#BEB7C2",
        Gray300: "#D0D5DD",
        Gray500: "#59505E",
        Gray600: "#3F3842",
        Gray700: "#3D3842",
        Gray800: "#242127",
        Gray900: "#0A090B",
        Primary500: "#5F2388",
        Primary900: "#1A0429"
      },
    },
  },
  plugins: [],
} satisfies Config;
