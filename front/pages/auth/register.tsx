import React from "react"
import styled from "styled-components"

import RegisterForm from "../../components/RegisterForm/index"
import Navigation from "../../components/Navigation/index"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  z-index: 1;
  background: url("/images/register.jpg") no-repeat center;
  background-size: cover;
  padding-top: 25%;
  padding-bottom: 3%;
  ${({ theme }) => theme.mq.md} {
    padding-top: 5%;
  }
`

const Register = (): JSX.Element => {
  return (
    <Wrapper>
      <Navigation />
      <RegisterForm />
    </Wrapper>
  )
}

export default Register
