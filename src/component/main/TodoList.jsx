import React, { Children, useState } from 'react'
import TodoItem from './TodoItem'
import 'component/styles/TodoList.css'


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
   setTodo((prev) => prev.filter((item)=> item.id !== id))

  )




 

  return (
  <article className='todoList-area'>

  <section className='working-area'>
  <h1>Working</h1>
  <article className='workingList-area'>
   {WorkingTodo.map((item) => ( 
    <TodoItem 
    key={item.id}
    curTodo = {item}
    ToggleButton = {ToggleButtonHandler}
    DeleteButton = {DeleteButtonHandler}
    btnText = "완료"
    />
    ))}
      </article>
  </section>
    

  <section className='Done-area'>
      <h1>Done</h1>
      <article className='doneList-area'>
  {DoneTodo.map((item) => ( 
    <TodoItem
    key={item.id}
    curTodo = {item}
    ToggleButton = {ToggleButtonHandler}
    DeleteButton = {DeleteButtonHandler}
    btnText = "취소"
    />
    ))}
     </article>
  </section>
</article>
  )
}

export default TodoList