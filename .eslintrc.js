module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.dev.json",
  },
  ignorePatterns: [
    "src/**/*.test.ts", 
    "build/*.js", 
    ".*.js", 
    ".*.ts"
  ],
  extends: [
    // My set of defaults
    "matt123miller",
    // Add the default recommendations @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended", 
    // Add prettier settings to avoid rules conflicts @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", 
    // Add prettier plugin
    "plugin:prettier/recommended", 
  ],
};
