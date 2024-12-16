import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    if (config.resolve) {
      (config.resolve.preserveSymlinks = true),
        (config.resolve.alias = {
          ...config.resolve.alias,
          '@': resolve(__dirname, '../src'),
          '@/common': resolve(__dirname, '../src/common'),
          '@/page': resolve(__dirname, '../src/page'),
          '@/shared': resolve(__dirname, '../src/shared'),
          '@tiki/ui': resolve(__dirname, '../../../packages/ui/dist'),
        });
    }

    return mergeConfig(config, {
      optimizeDeps: ['@tiki/ui', '@tiki/icon'],
    });
  },
};
export default config;
