import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값 설정
const initialState = [];

//slice 설정
// action creator, reducer
const todosSlice = createSlice({
  //이름, 초기값, reducer
  name: "todos",
  initialState,
  //상태 변화
  reducers: {
    //추가 기능
    addTodo: (state, action) => {
      return [action.payload, ...state];
    },

    //수정 기능
    modifyTodo: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    },
    //삭제 기능
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// action creator
export const { addTodo, deleteTodo, modifyTodo } = todosSlice.actions;

//reducer, action value
export default todosSlice.reducer;
