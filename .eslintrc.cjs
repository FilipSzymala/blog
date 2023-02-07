module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['src'],
      },
    },
  },
  plugins: [
    'react',
    'simple-import-sort',
    'import',
    'unused-imports',
    'prettier',
    'promise',
  ],
  rules: {
    'react/require-default-props': 'off',
    'no-void': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-indent': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': ['error'],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.jsx', '**/setupTests.js'] },
    ],
    'unused-imports/no-unused-imports-ts': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draftState'] },
    ],
    'prefer-destructuring': [
      'error',
      { AssignmentExpression: { array: false } },
    ],
    'consistent-return': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/no-array-index-key': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-uses-react': 'off',
    'no-console': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    curly: ['error', 'multi-line'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/avoid-new': 'off',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-restricted-exports': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
}
4:58
package.json
{
  "name": "blog",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "3.0.0",
    "antd": "5.1.6",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "vite": "4.0.0",
    "vite-jsconfig-paths": "2.0.1"
  },
  "devDependencies": {
    "@types/node": "18.11.19",
    "@types/react": "18.0.26",
    "@types/react-dom": "18.0.9",
    "eslint": "8.33.0",
    "eslint-config-airbnb": "19.0.4",
    "eslint-config-prettier": "8.6.0",
    "eslint-config-react-app": "7.0.1",
    "eslint-plugin-import": "2.27.5",
    "eslint-plugin-jsx-a11y": "6.7.1",
    "eslint-plugin-prettier": "4.2.1",
    "eslint-plugin-promise": "6.1.1",
    "eslint-plugin-react": "7.32.2",
    "eslint-plugin-react-hooks": "4.6.0",
    "eslint-plugin-simple-import-sort": "10.0.0",
    "eslint-plugin-unused-imports": "2.0.0",
    "prettier": "2.8.3",
    "prettier-eslint": "15.0.1"
  },
  "main": "index.js",
  "license": "MIT"
}