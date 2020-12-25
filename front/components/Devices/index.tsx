import React from "react"
import {
  Wrapper,
  Container,
  Header,
  CardsContainer,
  Card,
  CardTitle,
  CardContent,
} from "./devices.styles"

const Devices = (): JSX.Element => {
  return (
    <Wrapper>
      <Container>
        <Header>We provide games for:</Header>

        <CardsContainer>
          <Card>
            <i className="first"> </i>
            <CardTitle>Playstation</CardTitle>

            <CardContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </CardContent>
          </Card>
          <Card>
            <i className="second"> </i>
            <CardTitle>Xbox</CardTitle>

            <CardContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </CardContent>
          </Card>
          <Card>
            <i className="third"> </i>
            <CardTitle>Desktop</CardTitle>

            <CardContent>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </CardContent>
          </Card>
        </CardsContainer>
      </Container>
    </Wrapper>
  )
}

export default Devices
