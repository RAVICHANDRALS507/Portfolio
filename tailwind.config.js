// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["'Outfit'", "sans-serif"],
      },
      colors: {
        dark: "#161513",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "marquee-left": "marqueeLeft 20s linear infinite",
        "marquee-right": "marqueeRight 20s linear infinite",
      },
    },
  },
  plugins: [],
};
