import styled from "styled-components";
import Input from "@material-ui/core/Input";

export const Form = styled.form`
  display: flex;
  width: fit-content;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};

  & > label > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: ${({ theme }) => theme.colors.darkOrange};
    font-size: ${({ theme }) => theme.font.size.xxs};

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightOrange};
    }
  }

  & > .MuiFormLabel-root {
    color: ${({ theme }) => theme.colors.white};
  }

  & > .hidden {
    display: none;
  }

  & > label > .MuiIconButton-colorPrimary {
    color: ${({ theme }) => theme.colors.lightOrange} !important;
  }

  & > label > .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.white} !important;

    &::placeholder {
      color: ${({ theme }) => theme.colors.white} !important;
    }
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
  width: 100%;
  padding: 10px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.bittersweet};
`;

export const InputElement = styled(Input)`
  margin: 8px 0;
  color: ${({ theme }) =>theme.colors.white};

  & > .MuiInputBase-input {
    color: ${({ theme }) =>theme.colors.white};
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100%;

  & >  .MuiFormLabel-root {
    margin: 10px 0;
    color: rgba(255, 255, 255, 0.5);

    & > p {
      margin: 5px 0;
      color: inherit;
    }
  }

  & > label > .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.lightOrange} !important;
  }
`;
