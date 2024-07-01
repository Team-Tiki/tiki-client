import { Global, ThemeProvider } from "@emotion/react";
import Test from "./TestComponent/Test";
import { globalStyle } from "./common/style/globalStyle";
import { theme } from "./common/style/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Test></Test>
    </ThemeProvider>
  );
}

export default App;
