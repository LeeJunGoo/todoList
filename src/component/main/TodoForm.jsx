import React, { useState } from 'react'
 
function TodoForm({setTodo}) {

const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [date, setDate] = useState("");

const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
}

const onContentChangeHandler = (e) => {
   setContent(e.target.value);
}

const OnDeadlineChangeHandler = (e) => {    
   setDate(e.target.value);
};

  
const setSubmit = (e) => {
  e.preventDefault(); // 사용 전) 버튼 클릭 시 새로고침 현상 발생

  //내림차순
  setTodo((prev) => (
    [{id: crypto.randomUUID(),   //prev.length() + 1
    title: title,
    content: content,
    isDone: false,
    deadline: date},
    ...prev,
  ])
  )
  
 setTitle("");
 setContent("");
 setDate("");
}


  return (
    <article className='search-area'>
      <form onSubmit={setSubmit}>  
      <input type="text" value={title} onChange={onTitleChangeHandler}></input>
      <input type="text" value={content} onChange={onContentChangeHandler}></input>
      <input type='date' value={date} onChange={OnDeadlineChangeHandler}></input>
      <button type='submit'>추가하기</button>
      </form>
      </article>
  )
}

export default TodoForm