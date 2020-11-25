import styled from "styled-components";
import Input from "@material-ui/core/Input";

export const Form = styled.form`
  display: flex;

  width: 90%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }

  & > .MuiFormLabel-root {
    color: white;
  }

  & > .hidden {
    display: none;
  }

  & > label > .MuiIconButton-colorPrimary {
    color: #ff3600bf !important;
  }

  @media (min-width: 650px) {
    width: fit-content;
  }
`;

export const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;
`;

export const InputElement = styled(Input)`
  margin: 8px 0;
  color: white;

  & > .MuiInputBase-input {
    color: white;
  }
`;

export const Paragraph = styled.p`
  cursor: pointer;
  margin-right: 7px;
  color: rgb(255 90 90 /85%);
  min-height: 100%;
`;

export const Header = styled.h4`
  display: flex;
  font-weight: 700;
  color: rgb(255 90 90 /85%);
  margin-bottom: 7px;
`;
