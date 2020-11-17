import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;

  @media (min-width: 960px) {
    padding: 40px;
  }
`;

export const Header = styled.h2`
  font-family: "Black Ops One", normal;
  font-weight: 500;
  font-size: 2.5em;
  color: rgba(0, 0, 0, 0.8);
  margin: 20px 0px;
  width: 100%;
  text-align: center;

  @media (min-width: 960px) {
    margin-bottom: 45px;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 35px;
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

  @media (min-width: 960px) {
    flex-direction: row;
    justify-content: flex-end;
    font-size: 1em;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (min-width: 960px) {
    width: fit-content;
    flex-direction: row;
  }
`;

export const FooterRows = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  & > select {
    outline: none;
    border: none;
    min-height: 100%;
    margin: 0 5px;
    font-family: "Black Ops One", normal;
    background-color: transparent;
    font-weight: 500;
    padding-top: 3px;
    @media (min-width: 960px) {
      margin: 0 20px;
    }
  }
  .MuiIconButton-root {
    padding: 5px;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  & > .MuiSvgIcon-root {
    font-size: 2em;
    &:hover {
      cursor: pointer;
    }
  }
`;
