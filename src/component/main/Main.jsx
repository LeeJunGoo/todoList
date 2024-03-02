import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Main() {
  return (
    <StMain>
      <TodoForm />
      <TodoList />
    </StMain>
  );
}

export default Main;

const StMain = styled.main`
  width: 100%;
  padding: 50px;
`;
