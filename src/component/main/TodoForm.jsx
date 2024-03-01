import React, { useState } from "react";
import { createTodos } from "../../axios/api";
import { useMutation, useQueryClient } from "react-query";
import useInput from "hooks/useInput";

function TodoForm() {
  const [title, onTitleChangeHandler, InitialTitle] = useInput();
  const [content, onContentChangeHandler, initialContent] = useInput();
  const [date, onDeadlineChangeHandler, initialDate] = useInput();

  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (newTodo) => createTodos(newTodo),
    //갱신
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const setSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: date.toString(),
    };

    mutate(newTodo);

    InitialTitle();
    initialContent();
    initialDate();
  };
  if (isPending) {
    //수행문
  }

  if (isError) {
    //수행문
  }

  return (
    <article className="search-area">
      <form onSubmit={setSubmit}>
        <input type="text" value={title} onChange={onTitleChangeHandler}></input>
        <input type="text" value={content} onChange={onContentChangeHandler}></input>
        <input type="date" value={date} onChange={onDeadlineChangeHandler}></input>
        <button type="submit">추가하기</button>
      </form>
    </article>
  );
}

export default TodoForm;
