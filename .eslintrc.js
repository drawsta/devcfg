// See https://eslint.org/docs/user-guide/configuring/
module.exports = {
  root: true,
  // https://www.npmjs.com/package/eslint-config-airbnb
  // npm info "eslint-config-airbnb@latest" peerDependencies
  // npx install-peerdeps --dev eslint-config-airbnb
  extends: "airbnb",
  plugins: ["jest"], // ESLint plugin for Jest (eslint-plugin-jest)
  // Predefined global variables
  env: {
    browser: true, // browser global variables
    node: true, // Node.js global variables and Node.js scoping.
    es6: true, // enable all ECMAScript 6 features except for modules
    "jest/globals": true, // Jest global variables
  },
  parser: "esprima", // By default, ESLint uses Espree as its parser
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module", // 默认是script，module表示代码为ECMAScript模块
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，警告级别，不会导致程序退出
   * "error" 或 2 - 开启规则，错误级别，触发时程序会退出
   */
  rules: {
    // warn
    quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    "max-params": [1, 5], // 函数最多5个参数
    "comma-dangle": [
      "warn",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    // error
    curly: [2, "all"],
    "newline-before-return": "error",
    "id-length": ["error", { max: 30 }], // 变量名长度最长30
    "max-depth": ["error", 4], // 最大嵌套块深度4
    complexity: ["error", { max: 20 }], // 最大圈复杂度（Cyclomatic complexity, CC）20
    // max-nested-callbacks: ["error", 10], // 回调函数最大嵌套深度
  },
  // Extra global variables
  globals: {
    // var1: "writable", // allow the variable to be overwritten
    // var2: "readonly", // disallow overwriting
  },
  overrides: [
    {
      files: ["src/**/*.js"],
      rules: {},
    },
  ],
};
