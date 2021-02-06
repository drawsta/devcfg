// prettier.config.js or .prettierrc.js
// See https://prettier.io/docs/en/options.html
module.exports = {
  useTabs: false,
  tabWidth: 2,
  semi: true, // Print semicolons at the ends of statements.
  singleQuote: false,
  printWidth: 120, // Specify the line length that the printer will wrap on
  trailingComma: "all", // Print trailing commas wherever possible when multi-line
  bracketSpacing: true, // Print spaces between brackets in object literals (true - Example: { foo: bar })
  jsxBracketSameLine: false, // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
  arrowParens: "always", // Include parentheses around a sole arrow function parameter ("always" - Example: (x) => x)
};
