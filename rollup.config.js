import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const parserOptions = {
  sourceType: 'module',
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/bundle.js',
        format: 'iife',
      }
    ],
    plugins: [
      resolve(),
      commonJS(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
    ],
  },
];