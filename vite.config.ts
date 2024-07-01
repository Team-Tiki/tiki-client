import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*절대 경로 설정*/
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
      { find: '@page', replacement: path.resolve(__dirname, 'src/page') },
      { find: '@shared', replacement: path.resolve(__dirname, 'src/shared') },
    ],
  },
});
