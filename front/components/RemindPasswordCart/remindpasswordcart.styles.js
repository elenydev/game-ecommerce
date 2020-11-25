import styled from "styled-components";
import Input from "@material-ui/core/Input";

export const LoginDiv = styled.div`
  text-align: center;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  font-size: 0.6em;
  color: ${({ theme }) => theme.colors.white};

  .MuiPaper-root {
    color: ${({ theme }) =>  theme.colors.darkerWhite};
    min-height: 0px;
    background: transparent;
  }
  .MuiIconButton-root {
    color: ${({ theme }) =>theme.colors.darkerWhite};
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
  color: ${({ theme }) =>theme.colors.white};

  & > .MuiInputBase-input {
    color: ${({ theme }) =>theme.colors.white};
  }
`;

export const ErrorSpan = styled.span`
  color: ${({ theme }) =>theme.colors.bittersweet};
  font-size: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .MuiButton-containedSecondary {
    margin: 15px;
    width: fit-content;
    background-color:${({ theme }) =>theme.colors.darkOrange};

    &:hover {
      background-color: ${({ theme }) =>theme.colors.lightOrange};
    }
  }
`;
