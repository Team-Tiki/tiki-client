import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { PluginOption, defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      visualizer({
        filename: './dist/bundle.html',
        open: true,
      }) as PluginOption,
      react({
        jsxImportSource: '@emotion/react',
      }),
      tsconfigPaths(),
      commonjs(),
      resolve(),
      svgr({
        svgrOptions: {
          icon: true,
          exportType: 'default',
        },
      }),
      sentryVitePlugin({
        org: 'tiki-4h',
        project: 'tiki_web',
        authToken: env.VITE_SENTRY_AUTH_TOKEN,
        sourcemaps: {
          filesToDeleteAfterUpload: '**/*.js.map',
        },
      }),
    ],

    optimizeDeps: {
      include: ['@tiki/ui'],
    },
    resolve: {
      alias: {
        '@tiki/ui': path.resolve(__dirname, '../../packages/ui/dist'),
        '@tiki/icon': path.resolve(__dirname, '../../packages/icon/dist'),
      },
    },
    build: {
      sourcemap: true,
      commonjsOptions: {
        include: ['/@tiki/ui/', '/@tiki/icon/'],
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('date-fns')) return 'date-fns';
            if (id.includes('lodash')) return 'lodash';
            if (id.includes('sentry')) return 'sentry';
          },
        },
      },
    },
  };
});
