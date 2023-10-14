module.exports = {
  css: {
    plugins: [
      {
        "postcss-import": {},
        "tailwindcss/nesting": "postcss-nesting",
        tailwindcss: {},
        plugin: require("postcss-nested"),
        before: "tailwindcss",
        "postcss-preset-env": {
          features: { "nesting-rules": false },
        },
      },
      require("postcss-nested"),
      require("tailwindcss"),
    ],
  },
};
// postcss.config.js
// postcss.config.js
(module.exports = {
  plugins: {
    "postcss-import": true,
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
});
