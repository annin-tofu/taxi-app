// Restart the server after modding anything in babel.config.js file

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // below "plugins" needs to be added for .env
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
    //
  };
};
