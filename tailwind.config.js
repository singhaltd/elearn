module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      'primary': '#f000b8',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'white':"#ffff"
    })
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
