module.exports = {
  "extends": [
      "standard",
      'plugin:jest/recommended'
  ],
  "plugins": [
      "standard",
      "promise",
      "jest"
  ],
  "rules": {
      "semi": [2, "always"]
  },
  "env": {
      "node": true,
      'jest/globals': true
    }
};