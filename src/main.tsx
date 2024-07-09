import { Global, ThemeProvider } from '@emotion/react';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppRouter } from '@/common/router/Router';
import { globalStyle } from '@/common/style/globalStyle';
import { theme } from '@/common/style/theme/theme';

import { worker } from '@/mock/browser';

const queryClient = new QueryClient();

const main = async () => {
  if (import.meta.env.DEV) {
    await worker.start({
      serviceWorker: {
        url: 'mockServiceWorker.js',
      },
    });
  }

  const root = createRoot(document.getElementById('root')!);

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global styles={globalStyle} />
          <AppRouter />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

main();
