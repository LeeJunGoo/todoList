import React from "react";
import api from "../../axios/api";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, modifyTodo, setTodo } from "../../redux/modules/todos";
import { useEffect } from "react";

function TodoList() {
  const dispatch = useDispatch();
  //useSelector를 사용하여 store에 저장된 데이터 중 todos를 가져온다.
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    fetchTodos();
  }, []);

  //1. axios.get: 데이터 읽어오기: 서버측
  const fetchTodos = async () => {
    const { data } = await api.get("/todos");
    console.log(data);

    //2. redux store에 저장: 클라이언트 측
    dispatch(setTodo(data));
  };

  console.log(todos);
  const DoneTodo = todos
    .filter((item) => (item.isDone ? true : false))
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); //true
  const WorkingTodo = todos
    .filter((item) => (!item.isDone ? true : false))
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); //false

  const ToggleButtonHandler = async (id) => {
    dispatch(modifyTodo(id));

    const result = todos.find((item) => item.id === id);

    // axios.patch : 서버에 데이터를 수정한다.
    api.patch(`/todos/${id}`, {
      isDone: !result.isDone,
    });
  };

  const DeleteButtonHandler = async (id) => {
    dispatch(deleteTodo(id));
    //3. axios.delete : 서버의 데이터를 삭제한다.
    api.delete(`/todos/${id}`);
  };

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
