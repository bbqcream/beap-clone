module.exports = {
  presets: ["module:react-native", "@babel/preset-typescript"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
      },
    ],
  ],
};
