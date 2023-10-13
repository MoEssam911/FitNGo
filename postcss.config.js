module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
module.exports = {
  css: {
    plugins: [
      {
        plugin: require('postcss-nested'),
        before: 'tailwindcss',
      },
      require('tailwindcss'),
    ],
  },
};