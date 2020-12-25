import styled from "styled-components";

export const SubscribtionWrapper = styled.div`
  display: flex;
  min-width: 100%;
  border: 1px solid rgb(255 90 90 /60%);
  border-right: none;
  border-left: none;

  &:nth-child(even) {
    border-top: none;
  }
`;

export const SubscribtionCard = styled.p`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.bittersweet};
  font-size: 1.2em;
`;

export const DeleteWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > .MuiIconButton-root {
    color: ${({ theme }) => theme.colors.bittersweet} !important;
  }
`;
