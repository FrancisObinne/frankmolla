// babel.config.js
module.exports = {
  presets: [
    // 1. Preset for transforming TypeScript/ESNext features
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // Target the current Node.js version for Jest
        },
      },
    ],
    // 2. Preset for transforming React JSX and TSX
    "@babel/preset-react",
    // 3. Preset for TypeScript-specific features
    "@babel/preset-typescript",
  ],
};
