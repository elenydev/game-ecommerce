import styled from "styled-components";
import Input from "@material-ui/core/Input";

export const Form = styled.form`
  display: flex;
  width: fit-content;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: #b73d1cbf;
    font-size: 0.8em;

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

  & > .MuiInputBase-root {
    color: white !important;

    &::placeholder {
      color: white !important;
    }
  }
`;

export const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;

  & > a {
    cursor: pointer;
  }
`;

export const Header = styled.h2`
  display: flex;
  font-weight: 700;
  width: 100%;
  padding: 10px;
  justify-content: center;
  color: rgb(255 90 90 /85%);
`;

export const InputElement = styled(Input)`
  margin: 8px 0;
  color: white;

  & > .MuiInputBase-input {
    color: white;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & > .MuiFormLabel-root {
    margin: 10px 0;
    color: rgba(255, 255, 255, 0.5);

    & > p {
      margin: 5px 0;
    }
  }

  & > label > .MuiInputBase-root {
    color: #ff3600bf !important;
  }
`;
