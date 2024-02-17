import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";
//초기값 설정

const todoObj = {
  id: 0,
  title: "리액트 공부하기",
  content: "리액트 기초를 공부해봅시다.",
  isDone: false,
  deadline: new Date(),
};

function Main() {
  const [todo, setTodo] = useState([todoObj]);

  return (
    <main>
      <TodoForm setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo}></TodoList>
    </main>
  );
}

export default Main;
