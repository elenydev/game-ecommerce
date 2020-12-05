import React, { useState, useEffect } from "react"
import useAlert from "../../hooks/useAlert"
import useArrayRange from "../../hooks/useArrayRange"
import useAuth from "../../hooks/useAuth"

import OfferProduct from "../OfferProduct"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import IconButton from "@material-ui/core/IconButton"
import {
  Wrapper,
  Header,
  Paragraph,
  ItemsContainer,
  Footer,
  FooterContent,
  FooterRows,
  Span,
} from "./productsComponent.styles.js"
import Alert from "../Alert/index.js"

const ProductsComponent = ({ products }) => {
  const {
    currentUser: { user },
  } = useAuth()
  const [categoryDisplayed, setCategoryDisplayed] = useState("Desktop")
  const {
    startRange,
    endRange,
    incrementRange,
    checkRanges,
    decrementRange,
    handleProductsArrayRange,
    setVisibleProducts,
  } = useArrayRange()
  const { message, variant, setMessage, setVariant, clearMessage } = useAlert()
  const { arrayLength, currentCategoryProducts } = handleProductsArrayRange(
    products,
    categoryDisplayed
  )

  useEffect(() => {
    let mounted = true
    if (mounted) checkRanges()
    return () => {
      mounted = false
    }
  }, [categoryDisplayed])

  useEffect(() => {
    let mounted = true
    if (mounted) clearMessage()
    return () => {
      mounted = false
    }
  }, [message])

  return (
    <Wrapper id="games">
      <Header>Our offer</Header>

      <ItemsContainer>
        {currentCategoryProducts.map((product, index) => (
          <OfferProduct
            key={index}
            product={product}
            user={user}
            setMessage={setMessage}
            setVariant={setVariant}
          />
        ))}
      </ItemsContainer>

      <Footer>
        <FooterContent>
          <FooterRows>
            <Paragraph>Products displayed:</Paragraph>

            <Paragraph>
              <label>
                <select
                  onChange={(e) => {
                    setVisibleProducts(parseInt(e.target.value))
                  }}
                >
                  <option value={4}>4</option>
                  <option value={8}>8</option>
                  <option value={12}>12</option>
                </select>
              </label>
            </Paragraph>

            <Paragraph>
              <Span>{startRange}</Span>
              <Span>-</Span>
              <Span>{endRange}</Span>
              <Span>of</Span>
              <Span>{arrayLength}</Span>
            </Paragraph>
          </FooterRows>

          <Paragraph>
            <Span>
              <label>
                <IconButton onClick={() => decrementRange()}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
              </label>
            </Span>

            <Span>
              <label>
                <IconButton onClick={() => incrementRange()}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </label>
            </Span>
          </Paragraph>
        </FooterContent>
        <FooterContent>
          <FooterRows>
            <Paragraph>Device:</Paragraph>

            <Paragraph>
              <label>
                <select
                  onChange={(e) => {
                    setCategoryDisplayed(e.target.value)
                  }}
                >
                  <option value="Desktop">Desktop</option>
                  <option value="Playstation">Playstation</option>
                  <option value="Xbox">Xbox</option>
                </select>
              </label>
            </Paragraph>
          </FooterRows>
        </FooterContent>
      </Footer>
      <>
        {message && (
          <Alert variant={variant} shouldOpen={true} message={message} />
        )}
      </>
    </Wrapper>
  )
}

export default ProductsComponent
