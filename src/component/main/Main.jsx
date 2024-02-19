import React from "react";
import api from "../../axios/api";
import { useDispatch } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Main() {
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default Main;
