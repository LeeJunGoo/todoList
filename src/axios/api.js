import axios from "axios";

//Axios instance 생성
const instance = axios.create({
  //   baseURL: process.env.REACT_APP_SERVER_URL,
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
