module.exports = {
  "extends": "eslint:recommended",
  "plugins": ["angular"],
  "env": {
    "es6": true,
    "browser": true,
    "jasmine": true
  },
  "ecmaFeatures": {
    "modules": true
  },
  "globals": {
    "angular": true,
    "module": true,
    "inject": true,
    "jQuery": true,
    "$": true,
    "define": true,
    "require": true,
    "moment": true,
    "__dirname": true
  }
};