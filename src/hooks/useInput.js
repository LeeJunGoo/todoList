import React, { useState } from "react";

const useInput = () => {
  //state 선언
  const [value, setValue] = useState();

  //event Handler
  const handler = (e) => {
    setValue(e.target.value);
  };

  //초기화
  const initialValue = () => {
    setValue("");
  };

  return [value, handler, initialValue];
};

export default useInput;
