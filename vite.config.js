const { resolve } = require('path')
const StachePlugin = require('rollup-plugin-stache');
const resolvePlugin = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('@rollup/plugin-replace');
import cleanup from 'rollup-plugin-cleanup';

module.exports = {
  build: {
    // manifest: true,
    minify: false,
    polyfillDynamicImport: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'main.js'),
      },
      output: {
        dir: 'dist-vite',
        format: 'esm',
      },
    }
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify( 'production')
    }),
    resolvePlugin(),
    commonjs({
      include: 'node_modules/**',
    }),
    StachePlugin(),
    cleanup({
      comments: "license"
    })
  ]
}
