import Header from "component/header/Header";
import Main from "component/main/Main";
import Footer from "component/footer/Footer";
import { GlobalStyle } from "../src/shared/GlobalStyle";

//html 구조를 활용
const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
