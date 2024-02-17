import React, { Children, useState } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const WorkingArea = styled.section`
  border: 1px solid black;
`;

const DoneArea = styled.section`
  border: 1px solid black;
`;

const WorkingList = styled.article`
  display: flex;
  flex-direction: row;
`;
const DoneList = styled.article`
  display: flex;
  flex: row;
`;

const FontSize = styled.h1`
  font-size: 5rem;
`;

function TodoList({ todo, setTodo }) {
  const DoneTodo = todo.filter((item) => (item.isDone ? true : false)); //true
  const WorkingTodo = todo.filter((item) => (!item.isDone ? true : false)); //false

  const ToggleButtonHandler = (id) => {
    setTodo((prev) => {
      const findNext = prev.find((item) => (item.id === id ? true : false)); // 해당 id값을 객체로 출력
      findNext.isDone = !findNext.isDone; //해당 객체의 상태 반전

      const filterPrev = prev.filter((item) => (item.id !== id ? true : false)); // 해당 되지 않는 나머지를 배열로 출력
      return [...filterPrev, findNext];
    });
  };

  const DeleteButtonHandler = (id) =>
    setTodo((prev) => prev.filter((item) => item.id !== id));

  return (
    <article className="todoList-area">
      <WorkingArea>
        <FontSize>Working</FontSize>
        <WorkingList>
          {WorkingTodo.map((item) => (
            <TodoItem
              key={item.id}
              curTodo={item}
              ToggleButton={ToggleButtonHandler}
              DeleteButton={DeleteButtonHandler}
              btnText="완료"
            />
          ))}
        </WorkingList>
      </WorkingArea>

      <DoneArea>
        <FontSize>Done</FontSize>
        <DoneList>
          {DoneTodo.map((item) => (
            <TodoItem
              key={item.id}
              curTodo={item}
              ToggleButton={ToggleButtonHandler}
              DeleteButton={DeleteButtonHandler}
              btnText="취소"
            />
          ))}
        </DoneList>
      </DoneArea>
    </article>
  );
}

export default TodoList;
