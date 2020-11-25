import styled from "styled-components";
import Input from "@material-ui/core/Input";
import { FormLabel } from "@material-ui/core";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  min-width: 35vw;
  max-width: 500px;
  padding: 10px;
  color: white;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) =>theme.colors.white};

  & > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: ${({ theme }) => theme.colors.darkOrange};

    &:hover {
      background-color: ${({ theme }) =>  theme.colors.lightOrange};
    }
  }

  & > .MuiFormLabel-root {
    color: ${({ theme }) =>theme.colors.white};
  }

  & > .hidden {
    display: none;
  }

  & > label > .MuiIconButton-colorPrimary {
    color: ${({ theme }) =>theme.colors.lightOrange} !important;
  }
`;

export const LoginDiv = styled.div`
  text-align: center;
  margin: 5px 0;
  transition: 0.3s ease-in-out;
  position: relative;

  &:before {
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) =>theme.colors.white};
    content: "";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  &:hover::before {
    border-bottom: 1px solid ${({ theme }) =>theme.colors.white};
  }
`;

export const ErrorSpan = styled.span`
  color: ${({ theme }) =>theme.colors.bittersweet};
  font-size: 12px;

  & > a {
    cursor: pointer;
  }
`;

export const Header = styled.h2`
  display: flex;
  font-weight: ${({ theme }) =>theme.font.weight.bold};
`;

export const InputElement = styled(Input)`
  margin: 8px 0;
  color: ${({ theme }) =>theme.colors.white};

  & > .MuiInputBase-input {
    color: ${({ theme }) =>theme.colors.white};
  }
`;

export const CheckBox = styled(FormLabel)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px 0;

  & > .MuiCheckbox-root {
    color: ${({ theme }) =>theme.colors.darkOrange};
  }

  & > .MuiCheckbox-colorSecondary.Mui-checked {
    color: ${({ theme }) =>theme.colors.darkOrange};
  }
`;
