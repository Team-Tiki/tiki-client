import { Global } from "@emotion/react";
import Test from "./TestComponent/Test";
import { globalStyle } from "./common/style/globalStyle";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Test></Test>
    </>
  );
}

export default App;
