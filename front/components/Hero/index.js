import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Link from "next/link";

const Wrapper = styled.div`
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

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 960px) {
    width: 100%;
  }
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 900;
  text-align: center;
  font-size: 2em;

  @media (min-width: 960px) {
    font-size: 3.5em;
  }
`;

const SubHeader = styled.h3`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 1em;

  @media (min-width: 960px) {
    font-size: 1.5em;
  }
`;

const PlayIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  opacity: 0;
  .MuiSvgIcon-root {
    width: 45px;
    height: 45px;
    fill: rgba(255, 255, 255, 0.8);
  }

  animation: showIcon 2s linear 5s infinite;

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

const Hero = () => {
  return (
    <Wrapper>
      <Typing hideCursor={true} speed={20}>
        <HeaderContainer>
          <Typing.Delay ms={500} />
          <Header>All of us love games</Header>
          <Typing.Delay ms={800} />
          <SubHeader>tap and buy something to love.</SubHeader>
        </HeaderContainer>
      </Typing>

      <PlayIconContainer>
        <Link href='#gameTypes'>
          <a>
            <PlayCircleOutlineIcon />
          </a>
        </Link>
      </PlayIconContainer>
    </Wrapper>
  );
};

export default Hero;
