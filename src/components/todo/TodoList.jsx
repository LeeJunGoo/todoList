import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
const TodoList = ({ headTitle, todos, onDeleteTodoItem, onToggleTodoItem }) => {
  return (
    <section>
      <h2>{headTitle}</h2>
      <ul>  
        {todos.map((todo) =>  (
          //key={todo.id}는 TodoItem 컴포넌트에 전달되는 props 중 하나가 아니라, 
          //React에 의해 사용되어 각 TodoItem이 고유하게 식별되도록 합니다. key는 컴포넌트 내에서 직접적으로 사용되지 않아야 합니다.
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodoItem={onDeleteTodoItem}
            onToggleTodoItem={onToggleTodoItem}
          />
))}
      </ul>
    </section>
  );
};

export default TodoList;
