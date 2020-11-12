import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

const ContentWrapper = styled.div`
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

const Header = styled.h2`
  font-family: "Black Ops One", normal;
  font-weight: 500;
  font-size: 2.5em;
  color: rgba(255, 255, 255, 0.8);
  margin: 20px 0px;

  @media (min-width: 960px) {
    margin-bottom: 45px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const Card = styled.div`
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

const CardImage = styled.div`
  width: 50px;
  height: 50px;
  flex: 0 0 auto;
  border-radius: 100%;
  margin-right: 20px;
  background-position: 50% 50%;
  background-size: cover;
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardParagraph = styled.p`
  font-family: "Roboto";
  color: rgba(255, 255, 255, 0.9);
  font-size: 1em;

  @media (min-width: 960px) {
    font-size: 1.4em;
  }
`;

const CardParagraphDescription = styled.p`
  font-size: 0.6em;
  color: rgba(255, 255, 255, 0.8);
  @media (min-width: 960px) {
    font-size: 0.8em;
  }
`;

const OurTeam = () => {
  return (
    <Wrapper id='team'>
      <ContentWrapper>
        <Header>Our team</Header>
        <CardContainer>
          <Card>
            <CardImage className='first' />
            <ParagraphContainer>
              <CardParagraph>Caroline Watson</CardParagraph>
              <CardParagraphDescription>
                Graphic Designer
              </CardParagraphDescription>
            </ParagraphContainer>
          </Card>
          <Card>
            <CardImage className='second' />
            <ParagraphContainer>
              <CardParagraph>Anthony Willson</CardParagraph>
              <CardParagraphDescription>
                Database Analyst
              </CardParagraphDescription>
            </ParagraphContainer>
          </Card>
          <Card>
            <CardImage className='third' />
            <ParagraphContainer>
              <CardParagraph>John Doe</CardParagraph>
              <CardParagraphDescription>
                Marketing Specialist
              </CardParagraphDescription>
            </ParagraphContainer>
          </Card>
          <Card>
            <CardImage className='fourth' />
            <ParagraphContainer>
              <CardParagraph>Carl Nayman</CardParagraph>
              <CardParagraphDescription>
                Back-End Developer
              </CardParagraphDescription>
            </ParagraphContainer>
          </Card>
          <Card>
            <CardImage className='fifth' />
            <ParagraphContainer>
              <CardParagraph>Bruce Willson</CardParagraph>
              <CardParagraphDescription>
                Front-End Developer
              </CardParagraphDescription>
            </ParagraphContainer>
          </Card>
        </CardContainer>
      </ContentWrapper>
    </Wrapper>
  );
};

export default OurTeam;
