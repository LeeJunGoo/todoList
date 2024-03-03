import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <StMain>
      <button onClick={() => navigate("/login")}>로그인</button>
      <TodoForm />
      <TodoList />
    </StMain>
  );
}

export default Main;

const StMain = styled.main`
  width: 100%;
  padding: 161px 50px 50px 50px;
`;
