import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const OrderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;

export const Heading = styled.h1`
  width: 100%;
  text-align: center;
  padding: 10px;
  color: rgb(255 90 90 /90%);
`;

export const TotalPrize = styled.p`
  color: rgb(255 90 90 /90%);
  align-self: flex-end;
  font-size: 1.2em;
  margin: 20px;
  border-bottom: 1px solid rgb(255 90 90 /60%);

  @media (min-width: 960px) {
    margin: 20px 40px;
  }
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
