import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: '@emotion/react',
  }), tsconfigPaths(), svgr({
    svgrOptions: {
      icon: true,
      exportType: 'default',
    },
  }), sentryVitePlugin({
    org: "tiki-4h",
    project: "tiki_web"
  })],

  build: {
    sourcemap: true
  }
});