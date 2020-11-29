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

  & > label > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: ${({ theme }) => theme.colors.darkOrange};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightOrange};
    }
  }
`;

export const Heading = styled.h1`
  width: 100%;
  text-align: center;
  padding: 10px;
  color: ${({ theme }) => theme.colors.bittersweet};
`;

export const TotalPrize = styled.p`
  color: ${({ theme }) => theme.colors.bittersweet};
  align-self: flex-end;
  font-size: 1.2em;
  margin: 20px;
  border-bottom: 1px solid rgb(255 90 90 /60%);

  ${({ theme }) => theme.mq.md} {
    margin: 20px 40px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.font.size.xxs};
  width: 100%;
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.font.size.xs};
  }

  & > div > div > p > select {
    background-color: ${({ theme }) => theme.colors.mostlyBlackBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.size.xs};
  }

  .MuiIconButton-root {
    color: ${({ theme }) => theme.colors.white};
  }
`;
