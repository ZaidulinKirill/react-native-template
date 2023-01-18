module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["module-resolver", {
      root: ["./src/"],
      extensions: ['.ts', '.tsx', '.js', '.json', '.svg', '.png', '.jpg'],
      alias: {
        '@env': './src/constants/env',
        "icons": "./assets/icons",
        "images": "./assets/images"
      }
    }],
  ],
}
