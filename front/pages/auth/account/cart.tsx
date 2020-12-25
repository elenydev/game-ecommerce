import React, { useState, useEffect } from "react"
import useAuth from "../../../hooks/useAuth"
import styled from "styled-components"
import { useRouter } from "next/router"

import Navigation from "../../../components/Navigation/index"
import UserCart from "../../../components/UserCart/index"

type IsAdmin = {
  isAdmin: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ isAdmin }: IsAdmin) =>
    isAdmin ? 'url("/images/register.jpg") no-repeat center' : "#24272e"};
  background: url("/images/register.jpg") no-repeat center;
  background-size: cover;
  min-height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (min-width: 960px) {
    flex-direction: row;
  }
`

const Account = (): JSX.Element => {
  const {
    currentUser: { user },
  } = useAuth()
  const router = useRouter()

  useEffect(() => {
    let mounted = true
    if (mounted) {
      if (user === null) {
        router.push("/")
      }
    }
    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      <Navigation />
      <Wrapper isAdmin={user && user.email === "admin@admin.com" && true}>
        <UserCart />
      </Wrapper>
    </>
  )
}

export default Account
