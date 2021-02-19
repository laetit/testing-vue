module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/*.spec.js"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
}