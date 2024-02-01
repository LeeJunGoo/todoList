import Header from "component/header/Header";
import Main from "component/main/Main";
import Footer from "component/footer/Footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
     margin: 0;
  }
`




//html 구조를 활용
const App = () => {
  return (
    <>
    <GlobalStyles></GlobalStyles>
      <Header/>
      <Main/>    
      <Footer/>
    
      </>
  );
};

export default App;
