import { Global, ThemeProvider } from '@emotion/react';

import { globalStyle } from '@/common/style/globalStyle';
import { theme } from '@/common/style/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
    </ThemeProvider>
  );
};

export default App;
