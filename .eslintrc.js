/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  env: {
    jest: true,
    node: true
  },
  extends: [
    './node_modules/eslint-config-hackreactor/index.js'
  ],
  rules: {
    indent: ['error', 2]
  }
};