import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  background: ${({ theme }) => theme.colors.mostlyBlackBlue};
  transition: 0.2s all linear;
  border: 1px solid transparent;
  max-width: 300px;
  height: 100%;
  width: 100%;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: ${({ theme }) => theme.colors.cyanBlue};
    width: fit-content;
    align-self: center;
    transition: 0.5s all linear;
    margin-top: auto;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightBlue};
    }
  }

  & > span > label > .MuiButton-contained.Mui-disabled {
    background-color: #0b3558;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.darkerWhite};
  }

  ${({ theme }) => theme.mq.md} {
    max-width: 300px;
  }

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${({ theme }) => theme.colors.bittersweet};
  }
`;

export const CardImage = styled.div`
  display: flex;

  max-height: 250px;
  width: auto;

  img {
    width: 100%;
    height: auto;
  }

  ${({ theme }) => theme.mq.md} {
    max-height: 400px;
    width: auto;
  }
`;

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px;
  color: ${({ theme }) =>theme.colors.darkerWhite};
  justify-content: space-between;
  font-family: "Roboto";
  flex: 1;
  ${({ theme }) =>theme.mq.md} {
    padding: 12px;
  }
`;

export const CardContentHeader = styled.h5`
  width: 100%;
  font-size: ${({ theme }) => theme.font.size.sm};
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  margin-top: 5px;
`;

export const CardContentDescription = styled.p`
  display: block;
  width: 100%;
  margin: 8px 0px;
  word-break: break-word;
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) =>theme.font.weight.medium};
`;

export const CardContentInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  font-size: 1.3em;
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) =>theme.font.weight.medium};
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
