import React from "react";
import {
  Wrapper,
  SubHeader,
  Header,
  Description,
  CardsWrapper,
  Card,
  CardImage,
  CardTitle,
  CardContent,
} from "./gametypes.styles";

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
