import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    url("/images/backgroundTeam.jpg") no-repeat center;
  background-size: cover;
  padding: 10%;
  min-height: 100vh;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80%;
  width: 100%;

  @media (min-width: 960px) {
    width: 60%;
    height: 70%;
  }

  @media (min-width: 1280px) {
    width: 40%;
    min-height: 60%;
  }
`;

export const Header = styled.h2`
  font-family: "Black Ops One", normal;
  font-weight: 500;
  font-size: 2.5em;
  color: rgba(255, 255, 255, 0.8);
  margin: 20px 0px;

  @media (min-width: 960px) {
    margin-bottom: 45px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  background: rgba(16, 17, 21, 0.7);
  padding: 10px 30px 10px 10px;
  margin-bottom: 20px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  transition: all 0.4s ease 0s;
  border: 0.5px solid transparent;
  box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);

  &:hover {
    transform: scale(1.07);
    border: 0.5px solid #ff5a5a;
  }

  .first {
    background-image: url("/images/t1.jpg");
  }
  .second {
    background-image: url("/images/t2.jpg");
  }
  .third {
    background-image: url("/images/t3.jpg");
  }
  .fourth {
    background-image: url("/images/t4.jpg");
  }
  .fifth {
    background-image: url("/images/t5.jpg");
  }
`;

export const CardImage = styled.div`
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  border-radius: 100%;
  margin-right: 20px;
  background-position: 50% 50%;
  background-size: cover;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardParagraph = styled.p`
  font-family: "Roboto";
  color: rgba(255, 255, 255, 0.9);
  font-size: 1em;

  @media (min-width: 960px) {
    font-size: 1.4em;
  }
`;

export const CardParagraphDescription = styled.p`
  font-size: 0.6em;
  color: rgba(255, 255, 255, 0.8);
  @media (min-width: 960px) {
    font-size: 0.8em;
  }
`;
