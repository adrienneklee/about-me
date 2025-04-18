// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        worksans: ['Work Sans', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
        fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
    },
  },
  plugins: [],
};
