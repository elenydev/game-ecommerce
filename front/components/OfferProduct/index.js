import React, { useState, useEffect } from "react"
import useCartProducts from "../../hooks/useCartProducts.js"
import useNotification from "../../hooks/useNotification.js"
import Image from "next/image"

import { Button } from "@material-ui/core"
import Tooltip from "@material-ui/core/Tooltip"
import {
  Card,
  CardImage,
  CardContentContainer,
  CardContentHeader,
  CardContentDescription,
  CardContentInfoWrapper,
  CardContentType,
  CardContentPrize,
} from "./offerproduct.styles"
import { ENDPOINT_URL } from "../../constants.js"
import { notificationsSlice } from "../../Reducers/notificationsSlice.js"

const OfferProduct = React.memo(({ product, user }) => {
  const {
    productName,
    productDescription,
    gameType,
    prize,
    productImg,
  } = product
  const { setNotification } = useNotification()

  const [buttonDisabled, setButtonDisabled] = useState(true)
  const {
    cartProductsList: { cartProducts },
    putProductToCart,
  } = useCartProducts()

  const addProduct = () => {
    if (!cartProducts.includes(product)) {
      setNotification("success", "Product added to cart")
      putProductToCart(product)
      return
    }
    setNotification("error", "Product already in cart")
  }

  useEffect(() => {
    let mounted = true
    if (mounted) {
      if (user !== null) {
        setButtonDisabled(false)
      } else {
        setButtonDisabled(true)
      }
    }
    return () => {
      mounted = false
    }
  }, [user])

  return (
    <>
      <Card>
        <CardImage>
          <Image
            src={`${ENDPOINT_URL}/images/${productImg}`}
            alt={productName}
            width={350}
            height={300}
          />
        </CardImage>

        <CardContentContainer>
          <CardContentHeader>{productName}</CardContentHeader>

          <CardContentDescription>
            {productDescription.substring(0, 60) + "..."}
          </CardContentDescription>

          <CardContentInfoWrapper>
            <CardContentType>{gameType}</CardContentType>

            <CardContentPrize>{prize} $</CardContentPrize>
          </CardContentInfoWrapper>
        </CardContentContainer>

        <Tooltip title={buttonDisabled ? "Sing in to buy product" : ""}>
          <span>
            <label>
              <Button
                variant="contained"
                color="secondary"
                disabled={buttonDisabled}
                onClick={addProduct}
              >
                Buy
              </Button>
            </label>
          </span>
        </Tooltip>
      </Card>
    </>
  )
})

export default OfferProduct
