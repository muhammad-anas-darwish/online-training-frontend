import xo from 'eslint-config-xo';
import vueParser from 'vue-eslint-parser';
import { defineFlatConfig } from 'eslint-define-config';

export default defineFlatConfig([
  {
    ...xo,
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },
  
  {
    files: ['**/*.vue'],
    plugins: {
      vue: require('eslint-plugin-vue')
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-indent': ['error', 2]
    }
  },
  
  {
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never']
    }
  }
]);