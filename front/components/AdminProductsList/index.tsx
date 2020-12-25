import React, { useState } from "react"

import AdminProductsListItem from "../AdminProductsListItem/index"
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import usePagination from "../../hooks/usePagination"
import IconButton from "@material-ui/core/IconButton"
import { Wrapper, Heading, Footer } from "./adminproductslist.styles"
import { Product } from "../../interfaces/dataInterfaces"

type Props = {
  products: Product[]
}

const AdminProductsList = ({ products }: Props): JSX.Element => {
  const {
    startRange,
    endRange,
    incrementRange,
    decrementRange,
    handleArrayRange,
    setVisibleProducts,
  } = usePagination()

  const [allProducts, setAllProducts] = useState<Product[]>(products)

  const { slicedArray, arrayLength } = handleArrayRange(allProducts)

  return (
    <>
      <Wrapper>
        {products.length === 0 ? (
          <Heading>Products list is empty</Heading>
        ) : (
          <Heading>Products list:</Heading>
        )}

        {products.length > 0 &&
          slicedArray.map((product: Product, index: number) => (
            <AdminProductsListItem
              key={index}
              product={product}
              setAllProducts={setAllProducts}
            />
          ))}

        {products.length > 0 && (
          <Footer>
            <FooterContent>
              <FooterRows>
                <Paragraph>Products displayed:</Paragraph>

                <Paragraph>
                  <select
                    onChange={(e) => {
                      setVisibleProducts(parseInt(e.target.value))
                    }}
                  >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                  </select>
                </Paragraph>

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
      </Wrapper>
    </>
  )
}

export default AdminProductsList
