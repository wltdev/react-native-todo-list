module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', '@typescript-eslint', 'eslint-plugin-import-helpers'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import-helpers/order-imports': [
          'warn',
          {
            newlinesBetween: 'always', // new line between groups
            groups: ['/^react/', '/^@react/', 'module', '/^@/', ['parent', 'sibling', 'index']],
            alphabetize: { order: 'asc', ignoreCase: true }
          }
        ]
      }
    }
  ]
}
