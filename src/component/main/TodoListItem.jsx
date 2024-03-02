import {
  StDiv5,
  StFigure,
  StP,
  StP2,
  StTime,
  StWorkingLi,
  StDoneLi,
  StDiv6,
  StDiv7,
  StFront,
  StBack,
  StLink,
} from "stlyes/List";
import profile from "../../assets/images/logo.png";

function TodoItem({ curTodo, ToggleButton, DeleteButton, btnText }) {
  const date = new Date(curTodo.deadline);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return curTodo.isDone === false ? (
    <StWorkingLi>
      <StFront>
        <StP>{curTodo.title}</StP>
        <StTime>{date.toLocaleDateString("ko-KR", options)}</StTime>
        <StFigure>
          <img src={profile}></img>
          <span>닉네임</span>
        </StFigure>

        <StP2 $isDone={curTodo.isDone}>{curTodo.content}</StP2>
      </StFront>
      <StBack>
        <StLink $isDone={curTodo.isDone} to={`/detail/${curTodo.id}`}>
          더보기
        </StLink>

        <StDiv5>
          <button onClick={() => ToggleButton({ id: curTodo.id, isDone: !curTodo.isDone })}>{btnText}</button>
          <button onClick={() => DeleteButton(curTodo.id)}>삭제</button>
        </StDiv5>
      </StBack>
    </StWorkingLi>
  ) : (
    <StDoneLi>
      <StDiv7>
        <p>{curTodo.title}</p>
        <time>{date.toLocaleDateString("ko-KR", options)}</time>
      </StDiv7>

      <StDiv6>
        <button onClick={() => ToggleButton({ id: curTodo.id, isDone: !curTodo.isDone })}>{btnText}</button>
        <button onClick={() => DeleteButton(curTodo.id)}>삭제</button>
      </StDiv6>
    </StDoneLi>
  );
}

export default TodoItem;
