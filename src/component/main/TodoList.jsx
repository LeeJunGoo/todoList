import React, { Children, useState } from 'react'
import TodoItem from './TodoItem'


// 객체 분할로 받아야하는 이유는
// 배열 등 값을 전달하는 시점에서 객체로 봉합하여 전달하기 때문에
// 만약 배열로 전달했을경우 객체 안의 배열로 저장되어 map등의 함수를 사용하려면 obj.obj.map의 형식으로 사용해야한다.
// 그게아닌 객체분할로 전달 받을 시 props.map 형식으로 사용 가능
function TodoList({todo, setTodo, children}) {

  const ToggleButtonHandler = (id) => {
    setTodo((prev) => (
      prev.map((item) => {
         if(item.id === id){
           return {
             ...item, 
             isDone: !item.isDone,
           };
         }
         return item;
      })

    ))
  }

  const DeleteButtonHandler = (id) => (
   setTodo(todo.filter((item)=> item.id !== id))


  )

 


  return (
  <div>
   {todo.map((item) => ( 
  
    <ul>  
    <li>{children}</li>  
    <li>{item.title}</li>
    <li>{item.content}</li>
    <button onClick={() => ToggleButtonHandler(item.id)}>{item.isDone ? "취소" : "완료"}</button>
    <button onClick={() => DeleteButtonHandler(item.id)}>삭제</button>
    </ul>

    )
   )}
   
    </div>
  
  )
}

export default TodoList