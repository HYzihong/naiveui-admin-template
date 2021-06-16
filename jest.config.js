module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/tests/unit/**/*.[jt]s?(x)"],
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
};
