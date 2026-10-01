// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
    colors: {
      midnight: "#050816",
      surface: "#0B1120",
      electric: "#2563EB",
      cyan: "#38BDF8",
    },

    boxShadow: {
      glow: "0 0 60px rgba(37, 99, 235, 0.15)",
    },

  keyframes: {
    float: {
      "0%, 100%": {
        transform: "translateY(0px)",
      },
      "50%": {
        transform: "translateY(-14px)",
      },
    },
  },

  animation: {
    float: "float 5s ease-in-out infinite",
  },
},
  },
  plugins: [],
};