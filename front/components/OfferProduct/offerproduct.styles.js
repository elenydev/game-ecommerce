import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
  background: #24272e;
  transition: 0.2s all linear;
  border: 1px solid transparent;
  max-width: 250px;
  height: 100%;
  width: 100%;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #5bb2fc;
    width: fit-content;
    align-self: center;
    transition: 0.5s all linear;
    margin-top: auto;

    &:hover {
      background-color: #ff3600bf;
    }
  }

  & > span > .MuiButton-contained.Mui-disabled {
    background-color: #0b3558;
    color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 960px) {
    max-width: 300px;
  }

  &:hover {
    transform: scale(1.05);
    border: 1px solid #ff5a5a;
  }
`;

export const CardImage = styled.div`
  display: flex;

  height: 200px;
  width: auto;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 960px) {
    height: 280px;
    width: auto;
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  color: rgba(255, 255, 255, 0.8);
  justify-content: space-between;
  font-family: "Roboto";
  flex: 1;
  @media (min-width: 960px) {
    padding: 12px;
  }
`;

export const CardContentHeader = styled.h4`
  width: 100%;
  font-size: 1.4em;
  font-family: "Black Ops One", normal;
  font-weight: 500;
  margin-top: 5px;
`;

export const CardContentDescription = styled.p`
  display: block;
  width: 100%;
  margin: 8px 0px;
  word-break: break-word;
  font-family: "Black Ops One", normal;
  font-weight: 500;
`;

export const CardContentInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  font-size: 1.3em;
  font-family: "Black Ops One", normal;
  font-weight: 500;
`;

export const CardContentType = styled.p`
  display: flex;
  width: 65%;
`;

export const CardContentPrize = styled.p`
  display: flex;
  width: 35%;
  justify-content: flex-end;
`;
