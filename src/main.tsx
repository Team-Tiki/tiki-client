import { Global, ThemeProvider } from '@emotion/react';

import React from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import ToastContainer from '@/common/component/ToastContainer/ToastContainer';
import ToastProvider from '@/common/component/ToastContainer/ToastProvider';
import { AppRouter } from '@/common/router/Router';
import { GlobalStyle } from '@/common/style/globalStyle';
import { theme } from '@/common/style/theme/theme';

import { worker } from '@/mock/browser';

const queryClient = new QueryClient();

const main = async () => {
  if (import.meta.env.DEV) {
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
  }

  const root = createRoot(document.getElementById('root')!);

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Global
            styles={[
              GlobalStyle,
              {
                '@font-face': {
                  fontFamily: 'Pretendard Variable',
                  src: "url('/font/subset-PretendardVariable.woff2') format('woff2') url('/font/subset-PretendardVariable.woff') format('woff')",
                  fontStyle: 'normal',
                  fontDisplay: 'swap',
                },
              },
            ]}
          />
          <AppRouter />
          <ToastContainer />
          <ToastProvider />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

main();
