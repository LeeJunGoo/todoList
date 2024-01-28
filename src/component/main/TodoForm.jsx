import React, { useState } from 'react'
 
function TodoForm({setTodo}) {
  
const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const onTitleChangeHandler = (e) => {
    setTitle(e.target.value);
}

const onContentChangeHandler = (e) => {
   setContent(e.target.value);
}

  
//crypto는 기본적인 암호화 기법
//중복되지 않은 고유 값을 생성
//crypto.randomUUID() 메소드를 사용하면 uuid 라이브러리를 사용하지 않고도, uuid를 생성할 수 있다.
const setSubmit = (e) => {
  e.preventDefault(); // 사용 전) 버튼 클릭 시 새로고침 현상 발생

  //내림차순
  setTodo((prev) => (
    [{id: crypto.randomUUID(),   //prev.length() + 1
    title: title,
    content: content,
    isDone: false},
    ...prev,
  ])
  )
 setTitle("");
 setContent("");
}



  return (
    <div>
      <form onSubmit={setSubmit}>
      <input type="text" value={title} onChange={onTitleChangeHandler}></input>
      <input type="text" value={content} onChange={onContentChangeHandler}></input>
      <button type='submit'>추가하기</button>
      </form>
    </div>
  )
}

export default TodoForm