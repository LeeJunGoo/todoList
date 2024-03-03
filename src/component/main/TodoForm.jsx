import useInput from "hooks/useInput";
import { useMutation, useQueryClient } from "react-query";
import { createTodos } from "../../axios/api";
import { StSectionForm, StForm, StInput, StTextarea } from "stlyes/Form.jsx";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../../store/modules/modalForm";
import styled from "styled-components";

function TodoForm() {
  const [title, onTitleChangeHandler, InitialTitle] = useInput();
  const [content, onContentChangeHandler, initialContent] = useInput();
  const [date, onDeadlineChangeHandler, initialDate] = useInput();
  const selector = useSelector((state) => state.modalToggle);
  const dispatch = useDispatch();

  console.log(selector);
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
    <>
      {selector ? (
        <StDiv>
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
              <button type="button" onClick={() => dispatch(modalToggle(false))}>
                취소
              </button>
            </StForm>
          </StSectionForm>
        </StDiv>
      ) : null}
    </>
  );
}

export default TodoForm;

const StDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
