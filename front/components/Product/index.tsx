import React from "react"
import useCartProducts from "../../hooks/useCartProducts"
import Image from "next/image"

import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { IconButton } from "@material-ui/core"
import {
  Wrapper,
  ProductContainer,
  ProductImage,
  ProductDescriptionBox,
  ProductName,
  ProductDescription,
  ProductPrizeInfo,
  ProductPrize,
  ProductAmount,
  ActionsBox,
} from "./product.styles"
import { ENDPOINT_URL } from "../../constants"
import { Product as ProductInterface } from "../../interfaces/dataInterfaces"

type Props = {
  product: ProductInterface
  productIndex: number
}

const Product = ({ product, productIndex }: Props): JSX.Element => {
  const { increaseProductAmount, decreaseProductAmount } = useCartProducts()
  const {
    productImg,
    productName,
    prize,
    productDescription,
    gameType,
    amount,
  } = product

  return (
    <Wrapper>
      <ProductContainer>
        <ProductImage>
          <Image
            src={`${ENDPOINT_URL}/images/${productImg}`}
            alt={productName}
            width={200}
            height={200}
          />
        </ProductImage>

        <ProductDescriptionBox>
          <ProductName>{productName}</ProductName>
          <ProductDescription>{productDescription}</ProductDescription>

          <ProductDescription>Type: {gameType}</ProductDescription>
        </ProductDescriptionBox>

        <ProductPrizeInfo>
          <ProductPrize>
            <span>{prize * amount} </span>
            <span>$</span>
          </ProductPrize>

          <ProductAmount>
            <span>Amount: </span>
            <span> {amount}</span>
          </ProductAmount>

          <ActionsBox>
            <span>
              <IconButton onClick={() => increaseProductAmount(productIndex)}>
                <ExpandLessIcon />
              </IconButton>
            </span>

            <span>
              <IconButton onClick={() => decreaseProductAmount(productIndex)}>
                <ExpandMoreIcon />
              </IconButton>
            </span>
          </ActionsBox>
        </ProductPrizeInfo>
      </ProductContainer>
    </Wrapper>
  )
}

export default Product
