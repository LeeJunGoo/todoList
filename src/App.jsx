import Header from "./components/layout/Header";
import TodoController from "./components/todo/TodoController";

// 현재 컴포넌트가 어떠한 기능을 하는 지 파악하기 힘들기 때문에
// 간소화 시키기
const App = () => {
  return (
    <>
      <Header /> {/* <header>태그로 구역 구별 */}
      <TodoController />  {/* 중앙 컨트롤러 역할 */}
    </>
  );
};

export default App;
