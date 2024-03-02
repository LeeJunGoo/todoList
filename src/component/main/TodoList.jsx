import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTodos, editTodos, fetchTodos } from "../../axios/api";
import TodoListItem from "./TodoListItem";
import { StSectionList, StDiv1, StDiv2, StWorkingUl, StDoneUl } from "stlyes/List.jsx";

function TodoList() {
  const queryClient = useQueryClient();

  //todo 데이터 가져오기
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  //토글 변경
  const { mutate: toggleMutate } = useMutation({
    mutationFn: ({ id, isDone }) => editTodos(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  //삭제
  const { mutate: deleteMutate } = useMutation({
    mutationFn: (id) => deleteTodos(id),
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
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

  const ToggleButtonHandler = (todo) => {
    toggleMutate(todo);
  };

  const DeleteButtonHandler = (id) => {
    deleteMutate(id);
  };

  const onCreateTodoHandler = () => {};

  return (
    <StSectionList>
      <StDiv1>
        <button onClick={onCreateTodoHandler}>create todo</button>
      </StDiv1>
      <StDiv2>
        <h2>Working</h2>
        <StWorkingUl>
          {WorkingTodo.map((item) => (
            <TodoListItem
              key={item.id}
              curTodo={item}
              ToggleButton={ToggleButtonHandler}
              DeleteButton={DeleteButtonHandler}
              btnText="완료"
            />
          ))}
        </StWorkingUl>
      </StDiv2>

      <StDiv2>
        <h2>Done</h2>
        <StDoneUl>
          {DoneTodo.map((item) => (
            <TodoListItem
              key={item.id}
              curTodo={item}
              ToggleButton={ToggleButtonHandler}
              DeleteButton={DeleteButtonHandler}
              btnText="취소"
            />
          ))}
        </StDoneUl>
      </StDiv2>
    </StSectionList>
  );
}

export default TodoList;
