import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Heading = styled.h1`
  width: 100%;
  text-align: center;
  padding: 40px;
  color: rgb(255 90 90 /90%);
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8em;
  width: 100%;
  font-family: "Black Ops One", normal;
  font-weight: 500;
  padding: 10px;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1em;
  }

  & > div > div > p > select {
    background-color: #24272e;
    color: white;
    font-size: 1em;
  }

  .MuiIconButton-root {
    color: white;
  }
`;
