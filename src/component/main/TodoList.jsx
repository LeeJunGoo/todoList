import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteTodos, editTodos, fetchTodos } from "../../axios/api";
import TodoListItem from "./TodoListItem";
import { StSectionList, StDiv1, StDiv2, StWorkingUl, StDoneUl } from "stlyes/List.jsx";

function TodoList() {
  const [sort, setSort] = useState();

  const queryClient = useQueryClient();

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

  //get
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

  //select 태그(정렬 기능)
  const onSortChangeHandler = (e) => {
    const order = e.target.value;

    setSort(order);

    // setTodo((prev) => {
    //   const sortedTodo = [...prev].sort((a, b) => {
    //     if (order === "asc") {
    //       return new Date(a.deadline) - new Date(b.deadline); // 오름차순 정렬
    //     } else if (order === "desc") {
    //       return new Date(b.deadline) - new Date(a.deadline); // 내림차순 정렬
    //     }
    //   });

    //   return sortedTodo; // 정렬된 배열 반환
    // });
  };

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
    <StSectionList>
      <StDiv1>
        <button>create todo</button>
        <select value={sort} onChange={onSortChangeHandler}>
          <option value="default">정렬</option>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
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
