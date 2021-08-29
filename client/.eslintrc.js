module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'warn',
    treatUndefinedAsUnspecified: 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
};
