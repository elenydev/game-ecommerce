import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;

  ${({ theme }) => theme.mq.md} {
    padding: 40px;
  }
`;

export const Header = styled.h2`
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.lg};
  color: rgba(0, 0, 0, 0.8);
  margin: 20px 0px;
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.mq.md} {
    margin-bottom: 45px;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 80%;
  margin: 0 auto;
  place-items: center;

  ${({ theme }) => theme.mq.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.md} {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 35px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.size.xxs};
  width: 100%;
  font-family: "Black Ops One", normal;
  font-weight:  ${({ theme }) =>  theme.font.weight.medium};
  padding: 10px;

  ${({ theme }) =>theme.mq.md} {
    flex-direction: row;
    justify-content: flex-end;
    font-size: ${({ theme }) =>theme.font.size.xs};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ${({ theme }) =>theme.mq.md} {
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
    font-weight: ${({ theme }) =>theme.font.weight.medium};
    padding-top: 3px;
    ${({ theme }) =>theme.mq.md} {
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
    font-size: ${({ theme }) =>theme.font.size.md};
    &:hover {
      cursor: pointer;
    }
  }
`;
