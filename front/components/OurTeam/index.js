import React from "react";

import {
  Wrapper,
  ContentWrapper,
  Header,
  CardContainer,
  Card,
  CardImage,
  ParagraphContainer,
  CardParagraphDescription,
  CardParagraph,
} from "./ourteam.styles";


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
