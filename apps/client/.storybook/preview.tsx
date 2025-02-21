import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { ToastContainer, ToastProvider, theme } from '@tiki/ui';

import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { GlobalStyle } from '../src/common/style/globalStyle';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
          <ToastContainer />
          <ToastProvider />
        </ThemeProvider>
      </QueryClientProvider>
    </MemoryRouter>
  ),
];

export default preview;
