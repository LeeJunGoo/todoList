import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


//todo 초기값 설정
// 컴포넌트 외부에서 초기값을 정의하면, 코드의 가독성과 재사용성을 높일 수 있습니다.
// 가독성: 해당 값이 어디서 왔는지 명확하게 알 수 있습니다. 
// 재사용성: 여러 컴포넌트의 초기값을 설정할 수 있다.
const todoObj = {id: 1,
  title: "Learn React",
  content: "Learn React today",
  isDone: false,
};


// todoObj를 빈 문자열("")로 초기화하면 key prop을 부여하기 어려워서 경고가 발생
// const todoObj = "";  // "Each child in a list should have a unique "key" prop."경고 발생
const TodoController = () => {
  const [todos, setTodos] = useState([todoObj]);
  // const [todos, setTodos] = useState([]);


  const onSubmitTodo = (nextTodo) => {
    // 새로 생성된 todo를 앞으로 배치(내림차순)
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
  };

  //Controller => TodoList => TodoItem
  const onDeleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));   //삭제 id를 제외한 값을 filter로 정렬
  };

  const onToggleTodoItem = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) => {
        if (todoItem.id === id) {
          return {
            // 새로운 객체를 생성 : 불변성을 유지하고 상태 변화를 감지하여 효율적인 렌더링을 수행할 수 있다.
            ...todoItem,
            isDone: !todoItem.isDone,   //isDone 상태를 반전
             //  기존 객체의 속성을 직접 변경하면, React가 상태 변경을 감지하지 못하고 성능 문제나 예측 불가능한 동작이 발생
            // todoItem.isDone = !todoItem.isDone;
          };
        }

         // map은 새로운 값을 return 해줘야 하므로 return 사용하지 않을 경우에는 
         // 위의 조건에 해당되는 값만 출력되고 나머지 값들은 undefined값으로 출력된다.
        return todoItem; 
      })
    );
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);  //true일 경우
  const doneTodos = todos.filter((todo) => todo.isDone);      //false일 경우

  return (
    <main>
      <TodoForm onSubmitTodo={onSubmitTodo} />
      <TodoList
        headTitle="Working!"
        todos={workingTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
      <TodoList
        headTitle="Done!"
        todos={doneTodos}
        onDeleteTodoItem={onDeleteTodoItem}
        onToggleTodoItem={onToggleTodoItem}
      />
      
    </main>
  );
};

export default TodoController;
