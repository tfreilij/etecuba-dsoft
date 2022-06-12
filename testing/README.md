npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest



babel.config.js


module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};