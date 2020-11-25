import styled from "styled-components";
import Input from "@material-ui/core/Input";

export const LoginDiv = styled.div`
  text-align: center;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  font-size: 0.6em;
  color: white;

  .MuiPaper-root {
    color: rgba(255, 255, 255, 0.8);
    min-height: 0px;
    background: transparent;
  }
  .MuiIconButton-root {
    color: rgba(255, 255, 255, 0.8);
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }
  .MuiAccordionSummary-content {
    flex: 0;
    display: inline-block;
    white-space: nowrap;
  }
`;

export const InputElement = styled(Input)`
  margin: 8px 0;
  color: white;

  & > .MuiInputBase-input {
    color: white;
  }
`;

export const ErrorSpan = styled.span`
  color: #ff5a5a;
  font-size: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    width: fit-content;
    background-color: #b73d1cbf;

    &:hover {
      background-color: #ff3600bf;
    }
  }
`;
