import useInput from "hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { createTodos } from "../../axios/api";
import { StSectionForm, StForm, StInput, StTextarea } from "stlyes/Form.jsx";

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
    <StSectionForm>
      <p>그래 도전하는 거야!</p>
      <StForm onSubmit={setSubmit}>
        <p>주르제</p>
        <StInput type="text" value={title} onChange={onTitleChangeHandler}></StInput>

        <p>내요옹</p>
        <StTextarea type="text" value={content} onChange={onContentChangeHandler}></StTextarea>

        <p>양송 일정</p>
        <StInput type="date" value={date} onChange={onDeadlineChangeHandler}></StInput>

        <button type="submit">작성</button>
        <button type="button">취소</button>
      </StForm>
    </StSectionForm>
  );
}

export default TodoForm;
