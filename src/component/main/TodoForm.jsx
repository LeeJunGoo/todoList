import React, { useState } from 'react'
 
function TodoForm({setTodo}) {

const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [date, setDate] = useState("");
const [sort, setSort] = useState("");


const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
}

const onContentChangeHandler = (e) => {
   setContent(e.target.value);
}

const onDeadlineChangeHandler = (e) => {    
   setDate(e.target.value);
};



const onSortChangeHandler = (e) => {
  const order = e.target.value;
   
  setSort(order);

  setTodo((prev) => {
    const sortedTodo = [...prev].sort((a, b) => {
      if (order === 'asc') {
        return new Date(a.deadline) - new Date(b.deadline); // 오름차순 정렬
      } else if (order === 'desc') {
        return new Date(b.deadline) - new Date(a.deadline); // 내림차순 정렬
      }
    });

    return sortedTodo; // 정렬된 배열 반환
  });
}


  
const setSubmit = (e) => {
  e.preventDefault(); // 이벤트의 기본 동작을 취소

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
      <input type='date' value={date} onChange={onDeadlineChangeHandler}></input>
      <button type='submit'>추가하기</button>
      </form>
      <select value={sort} onChange={onSortChangeHandler}>
      <option value='default'>정렬</option>
      <option value='asc'>오름차순</option>
      <option value='desc'>내림차순</option>
      </select>
      </article>
  )
}

export default TodoForm