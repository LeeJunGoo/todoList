/* eslint-disable react/prop-types */

import { type } from "@testing-library/user-event/dist/type";

  //const TodoForm = (onSubmitTodo) ==> 중괄호 없이 전달할 경우 onSubmitTodo 객체로 전달 받는다.
  const TodoForm = ({onSubmitTodo}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();  //폼의 기본 동작(페이지 새로고침)이 방지

    const title = e.target.title.value;
    const content = e.target.content.value;
    
    // console.log(typeof onSubmitTodo);
    console.log(e);

    if (!title || !content) {
      alert("입력해주세요");
      return;   //return이 없으면 이후의 코드(onSubmitTodo)가 실행되어서 빈칸이 생성된다.
    }

    onSubmitTodo({
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    });

    e.target.reset();
  };



  return (
    //Enter 키를 누르거나 폼 안에 있는 Submit 버튼을 클릭했을 때 이벤트가 발생
   <form onSubmit={handleSubmit}>    
    {/* <input type="text" value={title} onChange={onTitleButtonHandler}></input> */}
      <input type="text" placeholder="제목" name="title" />
      <input type="text" placeholder="내용" name="content" />
      <button type="submit">제출</button>
    </form>
  );
};

export default TodoForm;
