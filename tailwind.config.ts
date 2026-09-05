import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#FBE697",
          400: "#F5D061",
          500: "#E5C158",
          600: "#D4AF37",
          700: "#AA771C",
          800: "#7E540C",
        },
        silver: {
          100: "#F8FAFC",
          200: "#F1F5F9",
          300: "#E2E8F0",
          400: "#94A3B8",
          500: "#64748B",
        },
        charcoal: {
          950: "#08080A",
          900: "#0F1015",
          850: "#161822",
          800: "#1D202D",
          700: "#272C3E",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
          hover: "#1EBE5D",
          light: "#DCF8C6",
          chatbg: "#0B141A",
          bubbleOut: "#005C4B",
          bubbleIn: "#202C33",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "Cairo", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5D061 0%, #E5C158 50%, #AA771C 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #FFE07D 0%, #F5D061 50%, #C48E28 100%)",
        "silver-gradient": "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, #1c1d28 0%, #0c0d12 55%, #08080a 100%)",
        "gold-radial": "radial-gradient(circle at 50% 30%, rgba(212, 175, 55, 0.15) 0%, rgba(15, 16, 21, 0) 70%)",
      },
      boxShadow: {
        "gold-sm": "0 0 15px rgba(212, 175, 55, 0.2)",
        "gold-md": "0 0 25px rgba(212, 175, 55, 0.35)",
        "gold-lg": "0 0 45px rgba(212, 175, 55, 0.5)",
        "whatsapp-glow": "0 0 20px rgba(37, 211, 102, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 4s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;