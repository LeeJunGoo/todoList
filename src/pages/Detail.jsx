import { deleteTodos, editTodos, singleTodo } from "../axios/api";
import TodoListItem from "component/main/TodoListItem";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => singleTodo(id),
  });

  const { mutate: toggleMutate } = useMutation({
    mutationFn: ({ id, isDone }) => editTodos(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      navigate("/");
    },
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id) => deleteTodos(id),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      navigate("/");
    },
  });

  if (isLoading) {
    return <div>Loading 중입니다...</div>;
  }
  if (error) {
    return <div>Error 발생</div>;
  }

  const ToggleButtonHandler = async (todo) => {
    toggleMutate(todo);
  };

  const DeleteButtonHandler = async (id) => {
    deleteMutate(id);
  };

  return (
    <article className="todoList-area">
      <WorkingArea>
        <FontSize>DetailPage</FontSize>
        <WorkingList>
          <TodoListItem
            key={todo.id}
            curTodo={todo}
            ToggleButton={ToggleButtonHandler}
            DeleteButton={DeleteButtonHandler}
            btnText="완료"
          />
        </WorkingList>
      </WorkingArea>
    </article>
  );
}

export default Detail;

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
