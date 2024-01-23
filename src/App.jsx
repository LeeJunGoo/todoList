import "App.css";
import Working from "Working";
import { useState } from "react";


function App() {
  //javascript 영역
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [todo, setTodo] = useState([]);
  

  const onTitleButtonHandler = (event) => {
    setTitle(event.target.value);
  
    

  }
  const onContentButtonHandler = (event) => {
    setContent(event.target.value);

  }


  return(
   <div>
    <div> 
   <input type="text" value={title} onChange={onTitleButtonHandler}></input>
   <input type="text" value={content} onChange={onContentButtonHandler}></input>
   <button onClick={ () => {
    
    if(title !== "" && content !== ""){
      
    // 값이 배열형태로 추가되는 게 아닌 갱신된다.
    //   setTodo((prev) => (
    //     {id: prev.id + 1,
    //       title: title,   
    //     content: content,
    //     isDone : false,
    //     },
    // ));
      
    setTodo((prev) => [
      ...prev,
      {id: prev.length + 1,
        title: title,   
      content: content,
      isDone : false,
      },
    ]);
    }else{
      alert("입력해주세요");
    }
    
  //"추가하기" 버튼 초기화
   setTitle("");
   setContent("");
}
}>추가하기</button>

{/* {console.log(todo)} */}
     

{/* props.todo.value 형식 */}
 <Working todoList = {todo}/>  

 {/* 배열을 전개하는 것이 아니라, 배열 안의 각 객체를 개별적인 프로퍼티로 전개합니다. */}
 {/* id, title, content, isDone 형태로 전달 */}
 {/* <Working {...todo}/>   */}
    



</div>
</div>
  )
}



export default App;
