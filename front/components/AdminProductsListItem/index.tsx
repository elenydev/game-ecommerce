import React, { Dispatch, SetStateAction, useState } from "react"
import useAuth from "../../hooks/useAuth"
import Image from "next/image"
import useNotification from "../../hooks/useNotification"

import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import { IconButton } from "@material-ui/core"
import {
  Wrapper,
  ProductContainer,
  ProductImage,
  ProductDescription,
  ProductDescriptionBox,
  ProductName,
  ProductPrizeInfo,
  ProductPrize,
  ProductAmount,
  ActionsBox,
} from "./adminproductslistitem.styles"
import { ENDPOINT_URL } from "../../constants"
import { Product } from "../../interfaces/dataInterfaces"

type Props = {
  product: Product
  setAllProducts: Dispatch<SetStateAction<Product[]>>
}

const AdminProductListItem = (props: Props): JSX.Element => {
  const { product, setAllProducts } = props
  const {
    _id,
    productImg,
    productName,
    prize,
    productDescription,
    gameType,
    availableAmount,
    amount,
    device,
  } = product

  const { setNotification, setErrorNotification } = useNotification()

  const {
    currentUser: {
      user: { userId },
    },
    tokenCookie,
  } = useAuth()
  const [productAmount, setProductAmount] = useState(availableAmount)
  let newAmount = 0

  const increaseAmount = (): void => {
    setProductAmount(productAmount + 1)
    newAmount = productAmount + 1
    setTimeout(() => {
      changeAmountInDatabase()
    }, 500)
  }

  const decreaseAmount = (): void => {
    if (productAmount - 1 < 0) {
      return
    }
    setProductAmount(productAmount - 1)
    newAmount = productAmount + -1
    setTimeout(() => {
      changeAmountInDatabase()
    }, 500)
  }

  const getAllProducts = async (): Promise<void> => {
    const query = await fetch(`${ENDPOINT_URL}/products/all`)
    const response = await query.json()
    const products = response.products
    setAllProducts(products)
  }

  const changeAmountInDatabase = async (): Promise<void> => {
    const data = {
      productId: _id,
      productAmount: newAmount,
      userId,
    }
    try {
      await fetch(`${ENDPOINT_URL}/products/amount`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      })
    } catch (err) {
      setErrorNotification()
    }
  }

  const deleteProduct = async (): Promise<void> => {
    const data = {
      productId: product._id,
    }
    try {
      const query = await fetch(`${ENDPOINT_URL}/products/remove`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      })
      const {
        productId,
        message,
      }: { productId: string; message: string } = await query.json()
      if (!productId) {
        setNotification("error", message)
        return
      }
      setNotification("success", message)
      getAllProducts()
    } catch (err) {
      setErrorNotification()
    }
  }

  return (
    <Wrapper>
      <ProductContainer>
        <ProductImage>
          <Image
            src={`${ENDPOINT_URL}/images/${productImg}`}
            alt={productName}
            width={150}
            height={150}
          />
        </ProductImage>

        <ProductDescriptionBox>
          <ProductName>{productName}</ProductName>

          <ProductDescription>
            {productDescription.substring(0, 60) + "..."}
          </ProductDescription>

          <ProductDescription>Type: {gameType}</ProductDescription>

          <ProductDescription>Device: {device}</ProductDescription>
        </ProductDescriptionBox>

        <ProductPrizeInfo>
          <ProductPrize>
            <span>{prize * amount} </span>
            <span>$</span>
          </ProductPrize>

          <ProductAmount>
            <span>Amount: </span>
            <span> {productAmount}</span>
          </ProductAmount>

          <ActionsBox>
            <span>
              <IconButton onClick={increaseAmount}>
                <ExpandLessIcon />
              </IconButton>
            </span>
            <span>
              <IconButton onClick={decreaseAmount}>
                <ExpandMoreIcon />
              </IconButton>
            </span>
          </ActionsBox>

          <ActionsBox>
            <span>
              <IconButton onClick={deleteProduct}>
                <DeleteForeverIcon />
              </IconButton>
            </span>
          </ActionsBox>
        </ProductPrizeInfo>
      </ProductContainer>
    </Wrapper>
  )
}

export default AdminProductListItem
