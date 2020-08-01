module.exports = {
  setupFilesAfterEnv: ['<rootDir>/config/jest/setUpTests.js'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/jest/assetsTransformer.js",
    "\\.(sass|scss)$": "<rootDir>/config/jest/assetsTransformer.js" }
};