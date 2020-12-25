import React, { useState, useEffect } from "react"
import useAuth from "../../../hooks/useAuth"
import styled from "styled-components"
import { useRouter } from "next/router"

import Navigation from "../../../components/Navigation/index"
import UserCart from "../../../components/UserCart/index"
import { ENDPOINT_URL } from "../../../constants"
import { Product } from "@/../interfaces/dataInterfaces"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mostlyBlackBlue};
  min-height: 100vh;
  box-shadow: ${({ theme }) => theme.boxShadow.light};

  @media (min-width: 960px) {
    flex-direction: row;
  }
`

const Products = ({ products }): JSX.Element => {
  const {
    currentUser: { user },
  } = useAuth()
  const router = useRouter()
  useEffect(() => {
    let mounted = true
    if (mounted) {
      if (user === null || user.email !== "admin@admin.com") {
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
      <Wrapper>
        <UserCart products={products} />
      </Wrapper>
    </>
  )
}

export async function getServerSideProps() {
  const query = await fetch(`${ENDPOINT_URL}/products/all`)
  const response = await query.json()
  const products: Product[] = response.products

  return {
    props: {
      products,
    },
  }
}

export default Products
