module.exports = {
  important: true,
  //Purging for Production is configured in PostCSS Config
  purge:{    
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Caveat', 'Oswald'],
      'body': ['Open Sans'],
            }
  },
  variants: {},
  plugins: [],
};
