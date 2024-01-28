import React, { Children, useState } from 'react'
import TodoItem from './TodoItem'


//props의 전달 인저와 받는 인자의 이름은 동일해야한다.!!
function TodoList({todo, setTodo}) {

  const DoneTodo = todo.filter((item) => item.isDone ? true : false);  //true
  const WorkingTodo = todo.filter((item) => !item.isDone ? true : false ); //false


  const ToggleButtonHandler = (id) => {
       

        setTodo((prev) => {
          const findNext = prev.find((item) => item.id === id ? true : false); // 해당 id값을 객체로 출력
          findNext.isDone = !findNext.isDone;   //해당 객체의 상태 반전
          // console.log(filterNext);
              
          const filterPrev = prev.filter((item) => item.id !== id ? true : false);  // 해당 되지 않는 나머지를 배열로 출력
          return [...filterPrev, findNext]
        
      });
  }


  const DeleteButtonHandler = (id) => (
   setTodo(todo.filter((item)=> item.id !== id))

  )


 

  return (
    <div>
  <div>
    {/* TodoItem.jsx를 사용하여 반복되는 ul태그 항목들을 처리해보기  */}
    <p>Working</p>
   {WorkingTodo.map((item) => ( 
    <ul key = {item.id}>  
    <li>{item.title}</li>
    <li>{item.content}</li>
    <button onClick={() => ToggleButtonHandler(item.id)}>완료</button>
    <button onClick={() => DeleteButtonHandler(item.id)}>삭제</button>
    </ul>
    )
   )}

    </div>
  <div>
  <p>Done</p>
  {DoneTodo.map((item) => ( 
    <ul key = {item.id}>  
    <li>{item.title}</li>
    <li>{item.content}</li>
    <button onClick={() => ToggleButtonHandler(item.id)}>취소</button>
    <button onClick={() => DeleteButtonHandler(item.id)}>삭제</button>
    </ul>
    )
   )}
  </div>

    </div>
  )
}

export default TodoList