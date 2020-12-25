import React from "react"
import Newsletter from "../Newsletter/index"
import {
  Wrapper,
  FooterContainer,
  FollowUsContainer,
  Heading,
  AdressContainer,
  AdressContent,
  LinksList,
  FooterDescription,
} from "./footer.styles"

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <FooterContainer>
        <AdressContainer>
          <Heading>Adress</Heading>

          <AdressContent>
            <address>
              Lorem Ipsum
              <br />
              HTML5 Buldings
              <br />
              Doctorville
              <br />
              Great Britain
              <br />
              (123) 456- 7890
              <br />
              <br />
              <span>Phone: +123 4567 8900</span>
            </address>
          </AdressContent>
        </AdressContainer>

        <FollowUsContainer>
          <Heading>Follow Us</Heading>

          <LinksList>
            <li>
              <a className="facebook" href="#"></a>
            </li>
            <li>
              <a className="twitter" href="#"></a>
            </li>
            <li>
              <a className="google" href="#"></a>
            </li>
            <li>
              <a className="instagram" href="#"></a>
            </li>
            <li>
              <a className="youtube" href="#"></a>
            </li>
          </LinksList>
        </FollowUsContainer>

        <Newsletter />
      </FooterContainer>

      <FooterDescription>
        © 2020 Online Gaming. All Rights Reserved | Design by{" "}
        <a href="https://w3layouts.com/" target="_blank">
          w3layouts
        </a>{" "}
        & Damian Czarnota
      </FooterDescription>
    </Wrapper>
  )
}

export default Footer
