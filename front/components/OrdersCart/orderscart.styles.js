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
  color: ${({ theme }) => theme.colors.bittersweet};
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(255 90 90 /60%);
  border-right: none;
  border-left: none;

  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.size.xxs};
  width: 100%;
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) =>  theme.font.weight.medium};
  padding: 10px;
  color: ${({ theme }) =>theme.colors.white};

  ${({ theme }) =>theme.mq.md} {
    flex-direction: row;
    justify-content: flex-end;
    font-size: ${({ theme }) =>theme.font.size.xs};
  }

  & > div > div > p > select {
    background-color: ${({ theme }) =>theme.mostlyBlackBlue};
    color: ${({ theme }) =>theme.colors.white};
    font-size: ${({ theme }) =>theme.font.size.xs};
  }
  .MuiIconButton-root {
    color: ${({ theme }) =>theme.colors.white};
  }
`;
