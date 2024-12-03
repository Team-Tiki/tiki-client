import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { theme } from '@tiki/ui/dist/index';

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GlobalStyle } from '../src/common/style/globalStyle';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: { ...customViewports },
      defaultViewport: 'Default',
    },
  },
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <Story />
        </ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>
  ),
];

export default preview;
