import React from 'react'
import TodoForm from './TodoForm'      //입력 기능
import TodoList from './TodoList'      //입력 값을 보여주는 기능  
import { useState } from 'react';

//초기값 설정
const todoObj = {
    id: 0,
    title: "",
    content: "",
    isDone: false,
};

function Main() {
 
 const [useTodo, setTodo] = useState([]);

//    console.log(useTodo); 



   const DoneTodo = useTodo.filter((item) => item.isDone ? true : false);  //true
   const WorkingTodo = useTodo.filter((item) => !item.isDone ? true : false ); //false

    return (
   <>
    <TodoForm setTodo = {setTodo}/>
    <div>
    <p>Working</p>  
    <TodoList todo = {WorkingTodo} setTodo ={setTodo}></TodoList>
    </div>
    <div>
      <p>isDone</p>
    <TodoList todo = {DoneTodo} setTodo = {setTodo}></TodoList>
    </div>
   
   </>
  )
}

export default Main