import styled from "styled-components";
import Input from "@material-ui/core/Input";

export const Form = styled.form`
  display: flex;

  width: 90%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  & > label > .MuiButton-containedSecondary {
    margin: 15px;
    background-color: ${({ theme }) => theme.colors.darkOrange};

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

  ${({ theme }) => theme.mq.xs} {
    width: fit-content;
  }
`;

export const ErrorSpan = styled.span`
  color: ${({ theme }) =>theme.colors.bittersweet};
  font-size: 12px;
`;

export const InputElement = styled(Input)`
  margin: 8px 0;
  color: ${({ theme }) =>theme.colors.white};

  & > .MuiInputBase-input {
    color: ${({ theme }) =>theme.colors.white}
  }
`;

export const Paragraph = styled.p`
  cursor: pointer;
  margin-right: 7px;
  color: ${({ theme }) => theme.colors.darkOrange};
  min-height: 100%;
`;

export const Header = styled.h4`
  display: flex;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) =>theme.colors.bittersweet};
  margin-bottom: 7px;
`;
