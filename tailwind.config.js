module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fff7fa",
          100: "#f2f2f7",
          300: "#dadada",
          400: "#afafaf",
          500: "#a7a7a7",
          600: "#7e7e7e",
          900: "#1e1e1e",
          "600_33": "#71717133",
          "50_01": "#f8f8f8",
          "900_4c": "#1e1e1e4c",
          "600_01": "#a74e75",
          "500_33": "#a4a4a433",
          "100_00": "#f5f5f500",
        },
        pink: {
          50: "#ffd7eb",
          100: "#ffaed6",
          300: "#d774a3",
          "300_4c": "#ff4fa74c",
        },
        black: { 900: "#101010", "900_01": "#000000" },
        blue_gray: { 100: "#d9d9d9", 900: "#1c274c", "100_33": "#cecece33" },
        purple: { 50: "#f1caff" },
        deep_purple: { 50: "#eee2ff" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs4: "0px 4px  30px 0px #cecece33",
        bs2: "0px 4px  20px 0px #ff4fa74c",
        bs: "0px 4px  20px 0px #1e1e1e4c",
        bs1: "0px 4px  30px 0px #a4a4a433",
        bs3: "0px 4px  30px 0px #71717133",
      },
      backgroundImage: {
        gradient: "linear-gradient(135deg ,#ffaed6,#d774a3,#a74e75)",
        gradient1: "linear-gradient(180deg ,#ffd7eb,#f5f5f500)",
        gradient2: "linear-gradient(180deg ,#eee2ff,#f5f5f500)",
        gradient3: "linear-gradient(180deg ,#f1caff,#f5f5f500)",
      },
      fontFamily: {
        montserrat: "Montserrat",
        inter: "Inter",
        respublica: "Res Publica",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};