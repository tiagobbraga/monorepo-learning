module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "airbnb", "plugin:jest/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "node/no-extraneous-import": 0,
    "react/jsx-filename-extension": [1, {extensions: [".js", ".jsx"]}],
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "never",
        imports: "always",
        exports: "always",
        functions: "never"
      }
    ],
    semi: ["error", "always", {omitLastInOneLineBlock: true}],
    "array-bracket-spacing": [
      "error",
      "never",
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    "object-curly-spacing": [
      "error",
      "never",
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ]
  }
};

// error module is not defined
// R: https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
// ---
// error  'describe' is not defined (prettier)
// error  'test' is not defined (prettier)
// error  'expect' is not defined (prettier)
// R: https://stackoverflow.com/questions/31629389/how-to-use-eslint-with-jest
// ---
// error  JSX not allowed in files with extension '.js'
// R: https://stackoverflow.com/questions/43031126/jsx-not-allowed-in-files-with-extension-js-with-eslint-config-airbnb
