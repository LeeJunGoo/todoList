import React from "react";
import api from "../../axios/api";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/todos";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTodos();
  }, []);

  //1. axios.get: 데이터 읽어오기
  const fetchTodos = async () => {
    const { data } = await api.get("/todos");

    return data.map((item) => {
      return dispatch(addTodo(item));
    });
  };
  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default Main;
