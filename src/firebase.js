// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqDJjVYsH5GwEj_p07uzK4iOUqc-e1rQ4",
  authDomain: "todolist-5049e.firebaseapp.com",
  projectId: "todolist-5049e",
  storageBucket: "todolist-5049e.appspot.com",
  messagingSenderId: "684410656902",
  appId: "1:684410656902:web:232033a857812af0809907",
  measurementId: "G-PFJLW0MJKR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
