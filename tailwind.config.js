module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: {
      // Configure your color palette here
      'pink': '#CF2BD0',
      'blue': '#00EBFE',
      'blueligth': '#01BAD9',
      'blueblack': '#021855',
      'gray': '#B91646',
    },
    borderColor:  {
      'pink': '#CF2BD0',
      'red': '#00EBFE',
      'blueligth': '#01BAD9',
      'blueblack': '#021855',
      'gray': '#B91646',
          
            }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
