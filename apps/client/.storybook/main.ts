import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(import.meta.resolve(join(value, 'package.json')));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');

    if (config.resolve) {
      config.resolve.preserveSymlinks = true;
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(__dirname, '../src'),
        '@/common': resolve(__dirname, '../src/common'),
        '@/page': resolve(__dirname, '../src/page'),
        '@/shared': resolve(__dirname, '../src/shared'),
        '@tiki/ui': resolve(__dirname, '../../../packages/ui/dist'),
      };
    }

    return mergeConfig(config, {
      optimizeDeps: ['@tiki/ui', '@tiki/icon'],
    });
  },
};

export default config;
