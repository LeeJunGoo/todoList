import { Link } from "react-router-dom";
import styled from "styled-components";

function TodoItem({ curTodo, ToggleButton, DeleteButton, btnText }) {
  const date = new Date(curTodo.deadline);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return curTodo.isDone === false ? (
    <Card>
      <StP>{curTodo.title}</StP>
      <StTime>{date.toLocaleDateString("ko-KR", options)}</StTime>

      <div>
        <Link $isDone={curTodo.isDone} to={`/detail/${curTodo.id}`}>
          닉네임
        </Link>
        <p>프로필 사진</p>
      </div>
      <StP2 $isDone={curTodo.isDone}>{curTodo.content}</StP2>
      <StDiv>
        <button onClick={() => ToggleButton({ id: curTodo.id, isDone: !curTodo.isDone })}>{btnText}</button>
        <button onClick={() => DeleteButton(curTodo.id)}>삭제</button>
      </StDiv>
    </Card>
  ) : null;
}

export default TodoItem;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid tan;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  height: 400px;
  gap: 5px;
`;

const StP = styled.p`
  font-size: 40px;
`;

const StTime = styled.time`
  display: flex;
  justify-content: right;
`;

const StP2 = styled.p`
  height: 210px;
`;
const StDiv = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 100px;
    height: 30px;
  }
`;
