import { createSlice } from "@reduxjs/toolkit";

// 초기 상태값 설정
const initialState = false;

//slice 설정
// action creator, reducer
const toggleSlice = createSlice({
  //이름, 초기값, reducer
  name: "modalTodo",
  initialState,
  //상태 변화
  reducers: {
    //토글 변경 기능
    modalToggle: (state, action) => {
      return (state = action.payload);
    },
  },
});

// action creator
export const { modalToggle } = toggleSlice.actions;

//reducer, action value
export default toggleSlice.reducer;
