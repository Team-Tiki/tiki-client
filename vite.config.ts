import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { rmSync } from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import electron from 'vite-plugin-electron/simple';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

rmSync(path.join(__dirname, 'dist'), { recursive: true, force: true });

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
      electron({
        main: {
          // Shortcut of `build.lib.entry`
          entry: 'electron/main/index.ts',
          vite: {
            build: {
              // For Debug
              sourcemap: true,
              outDir: 'dist/electron/main',
            },
            plugins: [],
          },
        },
        preload: {
          // Shortcut of `build.rollupOptions.input`
          input: {
            index: path.join(__dirname, 'electron/preload/index.ts'),
          },
          vite: {
            build: {
              // For Debug
              sourcemap: 'inline',
              outDir: 'dist/electron/preload',
            },
          },
        },
        // Optional: Use Node.js API in the Renderer process
        renderer: {},
      }),
    ],

    build: {
      sourcemap: true,
    },
  };
});
