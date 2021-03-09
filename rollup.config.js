const StachePlugin = require('rollup-plugin-stache');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const path = require('path');

module.exports = [
  {
    input: 'main.js',
    output: {
      dir: 'dist-rollup',
      format: 'esm',
    },
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify( 'production')
      }),
      resolve(),
      commonjs({
        include: path.join(__dirname, 'node_modules/**'),
      }),
      StachePlugin()
    ]
  },
]
