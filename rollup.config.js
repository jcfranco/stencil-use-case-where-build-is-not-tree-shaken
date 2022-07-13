import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: [{ dir: 'public', format: 'es' }],
  plugins: [
    resolve(), // tells Rollup how to find node_modules
    copy({ // copy over the calcite-components assets
      targets: [
        {
          src: './node_modules/@esri/calcite-components/dist/calcite/assets',
          dest: './public'
        },
      ]
    }),
    production && terser() // minify, but only in production
  ]
};
