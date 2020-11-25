import styled from "styled-components";

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.mq.md} {
    width: auto;
  }
`;

export const Heading = styled.h3`
  display: block;
  letter-spacing: 2px;
  color: ${({ theme }) =>  theme.colors.cyanBlue};
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) =>  theme.font.weight.medium};
`;

export const Form = styled.form`
  display: flex;
  font-family: "Roboto";
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: fit-content;

  ${({ theme }) =>theme.mq.md} {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) =>theme.colors.darkerWhite};
  padding: 5px;
  font-size: ${({ theme }) =>theme.font.size.xs};
  margin-right: 4px;

  &::placeholder {
    color: ${({ theme }) =>theme.colors.white};
  }

  &:focus {
    outline: 1px solid ${({ theme }) =>theme.colors.white};
  }

  ${({ theme }) =>theme.mq.md} {
    padding: 12px;
  }
`;

export const Button = styled.button`
  padding: 5px 8px;
  color: ${({ theme }) =>theme.colors.white};
  background-color: transparent;
  height: 100%;
  border: 2px solid ${({ theme }) =>theme.colors.white};
  outline: none;
  font-size: ${({ theme }) =>theme.font.size.xs};
  cursor: pointer;
  transition: 0.5s all linear;

  ${({ theme }) =>theme.mq.md} {
    padding: 12px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>theme.colors.bittersweet};
  }
`;

export const ErrorSpan = styled.span`
  color: ${({ theme }) =>theme.colors.bittersweet};
  font-size: 12px;
  display: block;

  & > a {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  flex-direction: column;
`;
