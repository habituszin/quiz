import { Config } from '@stencil/core';

// eslint-disable-next-line import/prefer-default-export
export const config: Config = {
  namespace: 'quiz',
  tsconfig: 'tsconfig.json',
  srcDir: './',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      dir: '../backend/views/web-components',
      polyfills: true,
      empty: true,
    },
  ],
};
