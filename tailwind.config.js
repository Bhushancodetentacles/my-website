/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        primary : "var(--primary-color)",
        secondary: "var(--secondary-color)",  
        navbarlight: "var(--navbar-light-color)",
      },
      fontFamily: {
        inria: ["var(--default-font)"],
        navbarfont: ["var(--navbar-font)"],
      },
      fontSize: {
        sm: "12px",
        md: "14px",
        lg: "18px",
        xl: "21px",
        "2xl": "24px",
        "3xl": "2.5rem",
        "4xl": "3rem",
      },
      container: {
        center: true, 
        padding: '1rem', 
        screens: {
          DEFAULT: '100%', 
          lg: '1320px', 
        },
      },
      containerfluid: {
        center: true, 
        padding: '2rem', 
        screens: {
          DEFAULT: '100%', 
          lg: '100%', 
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right top, #ada1c0, #b9aec9, #c5bcd3, #d1c9dc, #ddd7e6, #ddd7e6, #ddd7e6, #ddd7e6, #d1c9dc, #c5bcd3, #b9aec9, #ada1c0)',
        'button-gradient': 'linear-gradient(to right top, #cc4594, #a73e8d, #833782, #602f73, #3f2762)'
      },
    },
  },
  plugins: [],
}

