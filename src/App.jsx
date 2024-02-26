import { GlobalStyle } from "../src/shared/GlobalStyle";
import { Router } from "./shared/Router";

//html 구조를 활용
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
