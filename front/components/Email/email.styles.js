import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  ${({ theme }) => theme.mq.md} {
    margin: 5px 0px;
  }
`;

export const EmailContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  border-radius: 50px;

  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
  }
`;

export const EmailDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.cyanBlue};

  ${({ theme }) =>  theme.mq.md} {
    margin: 0 25px;
    max-width: 450px;
    align-items: flex-start;
  }
`;

export const CustomerEmail = styled.h2`
  display: flex;
  margin: 10px 0;
  font-size: ${({ theme }) =>theme.font.size.xs};

  ${({ theme }) =>theme.mq.md} {
    justify-content: flex-start;
    font-size: ${({ theme }) =>theme.font.size.sm};
    text-align: center;
  }
`;

export const EmailCustomerName = styled.p`
  display: flex;
  font-size: ${({ theme }) =>theme.font.size.xxs};

  ${({ theme }) =>theme.mq.md} {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

export const EmailMessage = styled.p`
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) =>theme.colors.bittersweet};
  margin-top: 10px;
  word-break: break-word;
`;

export const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) =>theme.colors.bittersweet};

  ${({ theme }) =>theme.mq.md} {
    flex-direction: row;
  }
`;

export const DeleteWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > .MuiIconButton-root {
    color: ${({ theme }) =>theme.colors.bittersweet} !important;
  }
  .MuiIconButton-label > a {
    padding-top: 8px !important;
  }

  ${({ theme }) =>theme.mq.md} {
    flex-direction: column;
  }
`;
