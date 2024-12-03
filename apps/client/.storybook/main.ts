import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@tiki/ui': path.resolve(__dirname, '../../../packages/ui'),
        '@tiki/icon': path.resolve(__dirname, '../../../packages/icon'),
        '@': path.resolve(__dirname, '../src'),
        '@/common': path.resolve(__dirname, '../src/common'),
        '@/page': path.resolve(__dirname, '../src/page'),
        '@/shared': path.resolve(__dirname, '../src/shared'),
      };
    }
    return config;
  },
};
export default config;
