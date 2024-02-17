import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값 설정
const initialState = {
  id: 0,
  title: "리액트 공부하기",
  content: "리액트 기초를 공부해봅시다.",
  isDone: false,
  deadline: new Date(),
};

//slice 설정
// action creator, reducer
const todosSlice = createSlice({
  //이름, 초기값, reducer
  name: "todos",
  initialState,
  //상태 변화
  reducers: {},
});

// action creator
// export const  {} = todosSlice.actions

//reducer, action value
export default todosSlice.reducer;
