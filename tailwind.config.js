/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "heroImage":"url('/src/img/nightsky.jpg')",
        "mountain":"url('/src/img/mountain.jpg')",
      },
    },
    fontFamily:{
      companyname:["Great Vibes"]
    }
  },
  variants: {
    display: ["group-hover"]
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
