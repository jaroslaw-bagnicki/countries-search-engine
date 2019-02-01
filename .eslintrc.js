module.exports = {
    "env": {
        "browser": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "indent": ["error",2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error","single"],
        "semi": ["error", "always"],
        "no-console": "warn",
        "no-unused-vars": "warn"
    },
    'globals': {
        "debounce": true
    }
};