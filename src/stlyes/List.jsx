import styled from "styled-components";

export const StSectionList = styled.section`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const StDiv1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 40px;
  }

  button {
    width: 85px;
    height: 30px;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #ff6600;
    }
  }
`;

export const StDiv2 = styled.div`
  width: 100%;

  margin-bottom: 200px;

  & > h2 {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const StWorkingUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
export const StDoneUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// Working Li 태그
export const StWorkingLi = styled.li`
  border: 1px solid tan;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  height: 400px;
`;

export const StP = styled.p`
  font-size: 40px;
`;

export const StTime = styled.time`
  display: flex;
  justify-content: right;
`;

export const StFigure = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 10px;
  margin-bottom: 25px;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const StP2 = styled.p`
  height: 210px;
`;

export const StDiv5 = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: 1px solid #fff;
    border-radius: 5px;
    width: 100px;
    height: 35px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #ff6600;
    }
  }
`;

//Done Li 태그

export const StDoneLi = styled.li`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const StDiv6 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  button {
    width: 60px;
    height: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background: #ff6600;
    }
  }
`;

export const StDiv7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 25px;
  }

  date {
    font-size: 15px;
  }
`;
