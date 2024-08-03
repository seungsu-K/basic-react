import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

// Flat Config (ESLint v9+)
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, // globalThis, window, console, alert, ...
        ...globals.node, // global, process, ...
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      // React.createElement()를 대신할 jsx API를 사용해 React를 import 하지 않아도 됨
      'react/react-in-jsx-scope': 'off',
      // propTypes 작성하지 않으면 경고
      'react/prop-types': 'warn',
    },
  },
];
