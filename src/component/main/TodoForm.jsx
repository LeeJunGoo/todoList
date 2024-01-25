import React, { useState } from 'react'
 
function TodoForm({setTodo}) {
// const title = "";   error  Assignment to constant variable. TypeError: Assignment to constant variable. at onTitleChangeHandler
// const content = "";  error  Assignment to constant variable. TypeError: Assignment to constant variable. at onContentChangeHandler

let title;   // let title = ""; 빈 문자열이 계속 들어가 값이 입력되지 않는다.
let content;
const onTitleChangeHandler = (e) => {
    title = e.target.value;
}

const onContentChangeHandler = (e) => {
   content = e.target.value;
}

  
//crypto는 기본적인 암호화 기법
//중복되지 않은 고유 값을 생성
//crypto.randomUUID() 메소드를 사용하면 uuid 라이브러리를 사용하지 않고도, uuid를 생성할 수 있다.
const setSubmit = (e) => {
  e.preventDefault(); // 사용 전) 버튼 클릭 시 새로고침 현상 발생

  setTodo((prev) => (
    [...prev,
    {id: crypto.randomUUID(), 
    title: title,
    content: content,
    isDone: false,
}])
  )

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