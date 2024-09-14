/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  // other configurations
  theme: {
    extend: {
      colors: {
        accent: '#your-accent-color',
        'accent-hover': '#your-accent-hover-color',
        primary: '#your-primary-color',
        'primary-dark': '#your-primary-dark-color',
      },
    },
  },
  // other configurations
}










module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
       
      },
      fontFamily:{
        primary: " var(--font-jetbrainsMono)",
      },
      extend : {
        colors: {
          primary : "#1c1c22",
          accent :{
            DEFAULT : "#00ff99",
            hover : "#00e187",
          },
          
        },

        keyframes : {

        },
        animation : {

        },


      },
    },
    plugins :  [require ("tailwindcss-animate")],
  };
    
    