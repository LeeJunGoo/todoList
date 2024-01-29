import React from 'react'
import 'component/styles/TodoItem.css'
function TodoItem({curTodo, ToggleButton, DeleteButton, btnText}) {




  return (
    <section className='card'>
    <article className='card-body'>
    <p className='card-title'>{curTodo.title}</p>
    <p className='card-content'>{curTodo.content}</p>
    </article>

    <article className='card-action'>
    <time className='card-date'>{new Date(curTodo.deadline).toLocaleDateString()}</time>
    <section className='card-button'>
    <button className='card-toggle' onClick={() => ToggleButton(curTodo.id)}>{btnText}</button>
    <button className='card-delete' onClick={() => DeleteButton(curTodo.id)}>삭제</button>
    </section>
    </article>

    </section>
  )
}

export default TodoItem