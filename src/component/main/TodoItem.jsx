import React from "react";
import styled from "styled-components";

function TodoItem({ curTodo, ToggleButton, DeleteButton, btnText }) {
  const date = new Date(curTodo.deadline);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return (
    <Card>
      <CardBody>
        <CardContent $isDone={curTodo.isDone}>{curTodo.title} </CardContent>
        <CardContent $isDone={curTodo.isDone}>{curTodo.content}</CardContent>
        <CardDate>{date.toLocaleDateString("ko-KR", options)}</CardDate>
      </CardBody>

      <CardAction>
        <CardButton onClick={() => ToggleButton(curTodo.id)}>
          {btnText}
        </CardButton>
        <CardButton onClick={() => DeleteButton(curTodo.id)}>삭제</CardButton>
      </CardAction>
    </Card>
  );
}

export default TodoItem;

const Card = styled.section`
  border: 1px solid tan;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBody = styled.article`
  border: 1px solid yellowgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  margin-bottom: 5px;
`;

const CardAction = styled.article`
  border: 1px solid yellowgreen;
  display: flex;
  flex-direction: row;
`;

const CardContent = styled.p`
  border: 1px solid black;
  padding: 5px;
  text-decoration: ${(props) =>
    props.$isDone ? "red wavy underline" : "none"};
  display: flex;
  justify-content: center;
`;

const CardDate = styled.time`
  margin: 1px;
  border: 1px solid black;
  display: flex;
  justify-content: right;
`;

const CardButton = styled.button`
  margin: 2px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: center;
`;
