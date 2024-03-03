import styled from "styled-components";

export const StSectionForm = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const StForm = styled.form`
  width: 400px;
  height: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    height: 35px;
    border: #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #ff6600;
    }
  }
`;

export const StDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: red;

  p {
    width: 20%;
  }
`;

export const StTextarea = styled.textarea`
  border: 1px solid #efefef;
  border-radius: 5px;
  height: 150px;
`;

export const StInput = styled.input`
  border: 1px solid #efefef;
  border-radius: 5px;
`;
