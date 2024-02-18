//중앙 데이터 관리소
import { configureStore } from "@reduxjs/toolkit";

//modules 폴더에 존재하는 전역 state(todos)의 reducer를 import한다.
import todos from "../modules/todos";

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
