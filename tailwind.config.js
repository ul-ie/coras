module.exports = {
  content: [
    "./content/**/*.{html,md}",
    "./inc/**/*.{html,md,svg}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
