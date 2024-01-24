import React, { useState } from 'react'

export default function Working(props) {
//배열이 아닌 객체로 전달 받았으므로 map을 사용하려면 Object.keys()통해  key의 값들을 배열로 정렬
const keyArr = Object.keys(props); 

console.log(props);  // id, title,content, isDOne 
// console.log(keyArr); // 0,1,2,3,4,5


  return (
    <div>
      {keyArr.map((item) => (
      <div>
      <p>{props[item].title}</p>
      <p>{props[item].content}</p>
      <button>완료</button>
      <button>삭제</button>   
      </div>
      ))}
      </div>

/* <div>
 {props.todoList.map((item) => (
  <div>
    <p>{item.title}</p>
    <p>{item.content}</p>
     <button>완료</button>
     <button>삭제</button> 
  </div>
 )
 )
}
</div> */


   
  )
}

