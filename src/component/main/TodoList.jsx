import useInput from "hooks/useInput";
import { useMutation, useQuery, useQueryClient } from "react-query";
import styled from "styled-components";
import { deleteTodos, editTodos, fetchTodos } from "../../axios/api";
import TodoItem from "./TodoListItem";

function TodoList() {
  const [sort, onSortChangeHandler] = useInput();

  // const onSortChangeHandler = (e) => {
  //   const order = e.target.value;

  //   setSort(order);

  //   // setTodo((prev) => {
  //   //   const sortedTodo = [...prev].sort((a, b) => {
  //   //     if (order === "asc") {
  //   //       return new Date(a.deadline) - new Date(b.deadline); // 오름차순 정렬
  //   //     } else if (order === "desc") {
  //   //       return new Date(b.deadline) - new Date(a.deadline); // 내림차순 정렬
  //   //     }
  //   //   });

  //   //   return sortedTodo; // 정렬된 배열 반환
  //   // });
  // };

  const queryClient = useQueryClient();

  const { mutate: toggleMutate } = useMutation({
    mutationFn: ({ id, isDone }) => editTodos(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id) => deleteTodos(id),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isLoading) {
    return <div>Loading 중입니다...</div>;
  }
  if (error) {
    return <div>Error 발생</div>;
  }

  const DoneTodo = todos
    .filter((item) => (item.isDone ? true : false))
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); //true
  const WorkingTodo = todos
    .filter((item) => (!item.isDone ? true : false))
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline)); //false

  const ToggleButtonHandler = async (todo) => {
    toggleMutate(todo);
  };

  const DeleteButtonHandler = async (id) => {
    deleteMutate(id);
  };

  return (
    <article className="todoList-area">
      <select value={sort} onChange={onSortChangeHandler}>
        <option value="default">정렬</option>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
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
