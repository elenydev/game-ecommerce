import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto";
  width: 100%;
  padding: 15px;

  @media (min-width: 960px) {
    padding: 35px;
  }
`;

const SubHeader = styled.h3`
  display: flex;
  font-weight: 500;
  font-size: 1.2em;
  text-align: center;
  font-family: "Black Ops One", cursive;

  @media (min-width: 960px) {
    font-size: 2.5em;
  }
`;

const Header = styled.h2`
  color: red;
  font-size: 1.7em;
  text-align: center;
  font-family: "Black Ops One", cursive;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (min-width: 960px) {
    font-size: 3em;
  }
`;

const Description = styled.p`
  margin: 25px 15px;
  display: block;
  text-align: center;
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.8);

  @media (min-width: 960px) {
    padding: 50px 15px;
    font-size: 1.1em;
    width: 70%;
    margin: auto;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  grid-template-rows: repeat(3, 1fr);
  width: 90%;

  @media (min-width: 640px) {
    width: 60%;
    margin: 0 auto;
  }

  @media (min-width: 960px) {
    width: 90%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 30px;
    margin-top: 50px;
  }

  @media (min-width: 1280px) {
    width: 80%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CardImage = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  img {
    max-width: 100%;
    box-shadow: 2px 2px 8px 0 rgb(0 0 0 / 60%);
  }

  &:before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 14px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #fff;
    box-shadow: 0 15px 10px #000;
    transform: rotate(-3deg);
  }
  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 14px;
    right: 10px;
    left: auto;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #fff;
    box-shadow: 0 15px 10px #000;
    transform: rotate(3deg);
  }
`;

const CardTitle = styled.h4`
  display: block;
  width: 100%;
  font-size: 1.2em;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 10px;
  font-family: "Black Ops One", cursive;

  @media (min-width: 960px) {
    font-size: 1.5em;
    padding: 20px;
  }
`;

const CardContent = styled.p`
  display: flex;
  width: 100%;
  text-align: center;
  padding: 5px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.9em;

  @media (min-width: 960px) {
    font-size: 1em;
    line-height: 1.5;
  }
`;

const GameTypes = () => {
  return (
    <Wrapper>
      <SubHeader>Welcome in our</SubHeader>
      <Header>online gaming</Header>
      <SubHeader id='gameTypes'>Shop</SubHeader>
      <Description>
        We are one of the largest sellers of computer games on the web, and our
        company is characterized by a fast supplier and high quality of
        services. Some of the games categories:
      </Description>
      <CardsWrapper>
        <Card>
          <CardImage>
            <img src='/images/ai1.jpg' alt='Multiplayer' />
          </CardImage>
          <CardTitle>Multiplayer</CardTitle>
          <CardContent>
            If you enjoy to play with your friends, you like to be in touch with
            other people or just want to face real enemies, this category is for
            you!
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <img src='/images/ai2.jpg' alt='Racing' />
          </CardImage>
          <CardTitle>Racing</CardTitle>
          <CardContent>
            If you want to increase your skills in driving or you are just a big
            fan of cars and various types of vehicles, this category is for you!
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <img src='/images/ai3.jpg' alt='War' />
          </CardImage>
          <CardTitle>War</CardTitle>
          <CardContent>
            If you want to increase your shooting skills, you are a fan of the
            military or you just want to see the real war, this category is for
            you!
          </CardContent>
        </Card>
      </CardsWrapper>
    </Wrapper>
  );
};

export default GameTypes;
