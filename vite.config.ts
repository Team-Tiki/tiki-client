import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
      tsconfigPaths(),
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

    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.indexOf('node_modules')) {
              const module = id.split('node_modules/').pop()?.split('/')[0];

              if (module) return `vendor/${module}`;
            }
          },
        },
      },
    },
  };
});
