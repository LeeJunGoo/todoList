import axios from "axios";

//Axios instance 생성
const todoClient = axios.create({
  //   baseURL: process.env.REACT_APP_SERVER_URL,
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

//1. axios.get: 데이터 읽어오기
export const fetchTodos = async () => {
  const { data } = await todoClient.get("/todos");
  return data;
};
//2.  axios.get 특정 데이터 가져오기
export const singleTodo = async (id) => {
  const { data } = await todoClient.get(`/todos/${id}`);
  return data;
};

//2. axios.post = 데이터 저장하기
export const createTodos = async (newTodo) => {
  await todoClient.post(`/todos`, newTodo);
  return newTodo;
};

//3. axios.patch = 데이터 수정
export const editTodos = async (id, isDone) => {
  await todoClient.patch(`/todos/${id}`, { isDone });
  return id;
};

//4. axios.delete = 데이터 삭제
export const deleteTodos = async (id) => {
  await todoClient.delete(`/todos/${id}`);
  return id;
};

export default todoClient;
