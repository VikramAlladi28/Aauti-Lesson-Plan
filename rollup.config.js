import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'

import packageJSON from './package.json'

export default [
  {
    input: './src/index.js',
    output: [
      {
        dir: packageJSON.main,
        format: 'cjs',
      },
      {
        dir: packageJSON.module,
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      terser(),
      commonjs(),
    ],
  },
]
