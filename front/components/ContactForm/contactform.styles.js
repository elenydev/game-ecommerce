import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  background-color: ${({ theme }) => theme.colors.mostlyBlackBlue};
  flex-direction: column;

  @media (min-width: 960px) {
    padding: 5% 0px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mostlyBlackBlue};
  padding: 15px 25px;
  box-shadow: ${({ theme }) =>  theme.boxShadow.light};
  width: 100%;
  height: 100%;

  @media (min-width: 960px) {
    padding: 40px;
    min-width: 40vw;
    max-width: 500px;
  }
`;

export const Heading = styled.h3`
  display: block;
  letter-spacing: 2px;
  color: ${({ theme }) =>  theme.colors.cyanBlue};
  font-family: "Black Ops One", normal;
  font-weight: ${({ theme }) =>  theme.font.weight.medium};
  margin: 10px 0;
  width: 100%;
  text-align: center;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${({ theme }) =>     theme.colors.white};
  outline: none;
  background-color: transparent;
  color: ${({ theme }) =>     theme.colors.darkerWhite};
  padding: 5px;
  font-size: ${({ theme }) =>     theme.font.size.xs};
  margin: 5px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) =>     theme.colors.white};
  }

  &:focus {
    outline: 1px solid ${({ theme }) =>     theme.colors.white};
  }

  @media (min-width: 960px) {
    padding: 12px;
  }
`;

export const TextInput = styled.textarea`
  border: none;
  border-bottom: 2px solid ${({ theme }) =>     theme.colors.white};
  outline: none;
  background-color: transparent;
  color: ${({ theme }) =>     theme.colors.darkerWhite};
  padding: 5px;
  font-size: ${({ theme }) =>     theme.font.size.xs};
  text-decoration: none;
  font-family: "Roboto";
  margin: 10px 5px;
  width: 100%;
  resize: none;

  &::placeholder {
    color: ${({ theme }) =>     theme.colors.white};
  }

  &:focus {
    outline: 1px solid ${({ theme }) =>     theme.colors.white};
  }

  @media (min-width: 960px) {
    padding: 12px;
    min-height: 150px;
  }
`;

export const ErrorSpan = styled.span`
  color: ${({ theme }) => theme.colors.bittersweet};
  font-size: 12px;

  & > a {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 5px 8px;
  color: ${({ theme }) =>    theme.colors.white};
  background-color: transparent;
  height: 100%;
  border: 2px solid ${({ theme }) =>    theme.colors.white};
  outline: none;
  font-size: ${({ theme }) =>    theme.font.size.xs};
  cursor: pointer;
  transition: 0.5s all linear;
  align-self: center;

  @media (min-width: 960px) {
    padding: 12px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>    theme.colors.bittersweet};
  }
`;
