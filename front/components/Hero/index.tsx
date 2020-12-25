import React, { useState, useEffect } from "react"
import Link from "next/link"

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import { Typewriter } from "react-typewriting-effect"
import {
  Wrapper,
  HeaderContainer,
  SubHeader,
  Header,
  PlayIconContainer,
} from "./hero.styles"

const Hero = (): JSX.Element => {
  const [render, setRender] = useState<boolean>(false)

  const renderSubHeader = (): void => {
    setTimeout(() => setRender(true), 3500)
  }

  useEffect(() => {
    let mounted = true
    if (mounted) renderSubHeader()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <Wrapper id="home">
      <HeaderContainer>
        <Header>
          <Typewriter
            string="All of us love gaming"
            stopBlinkinOnComplete
            onComplete={() => setRender(false)}
            cursor=""
          />
        </Header>

        <SubHeader>
          {render && (
            <Typewriter
              string="now you can buy something to love."
              stopBlinkinOnComplete
              onComplete={() => setRender(false)}
              cursor=""
            />
          )}
        </SubHeader>
      </HeaderContainer>

      <PlayIconContainer>
        <Link href="/#gameTypes">
          <a>
            <PlayCircleOutlineIcon />
          </a>
        </Link>
      </PlayIconContainer>
    </Wrapper>
  )
}

export default Hero
