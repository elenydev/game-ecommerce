import React, { useEffect } from "react"
import useNotification from "../../hooks/useNotification"
import useAuth from "../../hooks/useAuth.js"
import useCartProducts from "../../hooks/useCartProducts.js"
import usePagination from "../../hooks/usePagination.js"

import Product from "../Product/index.js"
import { Button } from "@material-ui/core"
import AddProductForm from "../../components/AddProductForm/index.js"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import IconButton from "@material-ui/core/IconButton"
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles.js"
import {
  Wrapper,
  OrderBox,
  Heading,
  TotalPrize,
  Footer,
} from "./productscart.styles"
import { ENDPOINT_URL } from "../../constants.js"

const ProductsCart = () => {
  const {
    cartProductsList: { cartProducts },
    clearProducts,
  } = useCartProducts()
  const {
    currentUser: { user },
    tokenCookie,
  } = useAuth()
  const { setNotification, setErrorNotification } = useNotification()

  const {
    startRange,
    endRange,
    incrementRange,
    decrementRange,
    checkRanges,
    handleArrayRange,
  } = usePagination()
  const { slicedArray, arrayLength } = handleArrayRange(cartProducts)

  const getPrize = () => {
    let prize = 0
    cartProducts.map((product) => {
      prize = prize + product.amount * product.prize
    })
    return prize
  }

  const createOrder = async () => {
    const data = {
      cartProducts,
      user,
      prize: getPrize(),
      userId: user.userId,
    }
    try {
      const request = await fetch(`${ENDPOINT_URL}/orders/create`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      })
      const { order, message } = await request.json()
      if (!order) {
        setNotification("error", message)
        return
      }
      setNotification("success", message)
      clearProducts()
    } catch (err) {
      setErrorNotification()
    }
  }

  useEffect(() => {
    let mounted = true
    if (mounted) checkRanges()
    return () => {
      mounted = false
    }
  }, [cartProducts])

  return (
    <Wrapper>
      {user.email === "admin@admin.com" && <AddProductForm />}

      {user.email !== "admin@admin.com" && cartProducts.length >= 1 ? (
        <>
          <Heading>Your products: </Heading>

          {slicedArray.map((product, index) => (
            <Product key={index} product={product} productIndex={index} />
          ))}
          <TotalPrize>Total prize: {getPrize()} $</TotalPrize>

          {cartProducts.length > 0 && (
            <Footer>
              <FooterContent>
                <FooterRows>
                  <Paragraph>
                    <Span>{startRange}</Span>
                    <Span>-</Span>
                    <Span>{endRange}</Span>
                    <Span>of</Span>
                    <Span> {arrayLength} </Span>
                  </Paragraph>

                  <Paragraph>
                    <Span>
                      <IconButton onClick={() => decrementRange()}>
                        <KeyboardArrowLeftIcon />
                      </IconButton>
                    </Span>

                    <Span>
                      <IconButton onClick={() => incrementRange()}>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    </Span>
                  </Paragraph>
                </FooterRows>
              </FooterContent>
            </Footer>
          )}
        </>
      ) : (
        user.email !== "admin@admin.com" && (
          <Heading>No products in cart</Heading>
        )
      )}

      <>
        {user.email !== "admin@admin.com" && (
          <OrderBox>
            <label>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={cartProducts.length < 1 && true}
                onClick={createOrder}
              >
                Click to order
              </Button>
            </label>
          </OrderBox>
        )}
      </>
    </Wrapper>
  )
}

export default ProductsCart
