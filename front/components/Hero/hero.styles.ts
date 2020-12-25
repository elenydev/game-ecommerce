import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("/images/bgdekstop.jpg") no-repeat center;
  background-size: cover;
  align-items: center;
  font-family: "Black Ops One", cursive;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  ${({ theme }) => theme.mq.md} {
    width: 100%;
  }
`;

export const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkerWhite};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  text-align: center;
  font-size: ${({ theme }) =>  theme.font.size.md};

  ${({ theme }) =>theme.mq.md} {
    font-size: 3.5em;
  }
`;

export const SubHeader = styled.h3`
  color: ${({ theme }) =>theme.colors.darkerWhite};
  text-align: center;
  font-weight: ${({ theme }) =>theme.font.weight.medium};
  font-size: ${({ theme }) =>theme.font.size.xs};

  ${({ theme }) =>theme.mq.md} {
    font-size: ${({ theme }) =>theme.font.size.sm};
  }
`;

export const PlayIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  opacity: 0;
  .MuiSvgIcon-root {
    width: 45px;
    height: 45px;
    fill: ${({ theme }) =>theme.colors.darkerWhite};
  }

  animation: showIcon 2s linear 5.5s infinite;

  @keyframes showIcon {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  } ;
`;
