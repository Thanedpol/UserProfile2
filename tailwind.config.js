/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#003AFF",
        primaryContent: "#000000",
        primarySubcontent: "#00fbff",
        primaryBase: "#81ecff",
        primaryAccent: "#000000",
      },
      backgroundImage: {
        'primaryBg': 'linear-gradient(20deg,#00D8FF,#6A9BFF,#F7FF00)', // เปลี่ยนสี Linear Gradient ตามที่คุณต้องการ
      },
    },
  },
  plugins: [],
}

