import styled from "styled-components";

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15vh;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 960px) {
    width: auto;
  }
`;

export const Heading = styled.h3`
  display: block;
  letter-spacing: 2px;
  color: #5bb2fc;
  font-family: "Black Ops One", normal;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  font-family: "Roboto";
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  width: fit-content;

  @media (min-width: 960px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid white;
  outline: none;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
  padding: 5px;
  font-size: 1em;
  margin-right: 4px;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: 1px solid white;
  }

  @media (min-width: 960px) {
    padding: 12px;
  }
`;

export const Button = styled.button`
  padding: 5px 8px;
  color: white;
  background-color: transparent;
  height: 100%;
  border: 2px solid white;
  outline: none;
  font-size: 1em;
  cursor: pointer;
  transition: 0.5s all linear;

  @media (min-width: 960px) {
    padding: 12px;
  }

  &:hover,
  &:focus {
    background-color: #ff5a5a;
  }
`;

export const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;
  display: block;

  & > a {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  flex-direction: column;
`;
