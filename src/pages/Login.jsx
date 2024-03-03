import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  deleteUser,
  sendEmailVerification,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import useInput from "hooks/useInput";
const Login = () => {
  const [email, onEmailChangeHandler] = useInput();
  const [password, onPasswordChangeHandler] = useInput();
  // const [phoneNumber, onNumberChangeHandler] = useInput();
  const [isLogin, setIsLogin] = useState();

  const auth = getAuth();
  auth.languageCode = "ko";
  const curUser = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //현재 로그인된 사용자 정보 가져오기
      if (user) {
        setIsLogin(!isLogin);
        console.log(true);
      } else {
        setIsLogin(false);
        console.log(false);
      }
    });
  }, []);

  //로그인 기능
  const onLoginClickHandler = async () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {});
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorMessage = error.message;
      validation(errorMessage);
    }
  };
  //회원가입 기능
  const onRegisterClickHandler = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorMessage = error.message;
      validation(errorMessage);
    }
  };

  //회원 탈퇴 기능
  const onUserDeleteClickHandler = async () => {
    try {
      await deleteUser(curUser);
    } catch (error) {
      const errorMessage = error.message;

      validation(errorMessage);
    }
  };

  const onSendEmailClickHandler = async () => {
    try {
      console.log("test");
      const result = await sendEmailVerification(auth.currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  //유효성 검사
  const validation = (errorMessage) => {
    console.log(errorMessage);
    if (errorMessage === "Firebase: Error (auth/missing-email).") {
      alert("존재하지 않는 아이디입니다.");
    }
    if (errorMessage === "Firebase: Error (auth/argument-error).") {
      alert("아이디를 입력해주세요");
    }
    if (errorMessage === "Firebase: Error (auth/admin-restricted-operation).") {
      alert("아이디를 입력해주세요");
    }

    if (errorMessage === "Firebase: Error (auth/invalid-email).") {
      alert("유효하지 않는 아이디 형식입니다.");
    }
    if (errorMessage === "Firebase: Error (auth/invalid-credential).") {
      alert("존재하지 않는 아이디입니다.");
    }

    if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
      alert("이미 존재하는 아이디 입니다.");
    }
    if (errorMessage === "Cannot read properties of null (reading 'delete').") {
      alert("존재하지 않는 아이디입니다.");
    }

    if (errorMessage === "Cannot read properties of null (reading 'delete')") {
      alert("삭제할 아이디가 존재하지 않습니다.");
    }
  };

  return (
    <main>
      <div>
        <div>
          <input type="text" placeholder="이메일" value={email || ""} onChange={onEmailChangeHandler}></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password || ""}
            onChange={onPasswordChangeHandler}
          ></input>
        </div>
        <div>
          <form>
            <button onClick={onSendEmailClickHandler}>이메일 인증 번호 전송</button>
          </form>

          <button onClick={onLoginClickHandler}> 이메일로 로그인!</button>
          <button onClick={onRegisterClickHandler}> 이메일로 회원가입!</button>
          <button onClick={onUserDeleteClickHandler}> 회원 탈퇴 </button>
        </div>
        {isLogin ? (
          <div>
            <p>로그인 완료</p>
            {/* <button onClick={goToJoinPage}>회원가입하기</button>
        <button onClick={goToHome}>홈으로 가기</button> */}
          </div>
        ) : (
          "로그인 안됨"
        )}
      </div>
    </main>
  );
};

export default Login;
