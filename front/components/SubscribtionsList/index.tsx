import React, { useState, useEffect } from "react"
import usePagination from "../../hooks/usePagination"

import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import Subscribtion from "../Subscribtion/index"
import IconButton from "@material-ui/core/IconButton"
import { Wrapper, Heading, Footer } from "./subscribtions.styles"
import { Subscribtion as SubscribtionInterface } from "@/../interfaces/dataInterfaces"

type Props = {
  subscribtionsList: SubscribtionInterface[]
}

const SubscribtionsList = ({ subscribtionsList }: Props): JSX.Element => {
  const [subscribtions, setSubscribtions] = useState(subscribtionsList)

  const {
    startRange,
    endRange,
    incrementRange,
    checkRanges,
    decrementRange,
    handleArrayRange,
    setVisibleProducts,
  } = usePagination()

  const { slicedArray, arrayLength } = handleArrayRange(subscribtions)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      checkRanges()
    }
    return () => {
      mounted = false
    }
  }, [subscribtions])

  return (
    <>
      <Wrapper>
        {subscribtions && subscribtions.length === 0 ? (
          <Heading>We don't have any subscribtions</Heading>
        ) : (
          <>
            <Heading>Subscribtions: </Heading>
            {slicedArray.map((email, index) => (
              <Subscribtion
                email={email}
                key={index}
                index={index}
                setSubscribtions={setSubscribtions}
              ></Subscribtion>
            ))}
          </>
        )}

        {subscribtions.length > 0 && (
          <Footer>
            <FooterContent>
              <FooterRows>
                <Paragraph>Subscribtions displayed:</Paragraph>

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
                  <Span> {arrayLength} </Span>
                </Paragraph>
              </FooterRows>

              <Paragraph>
                <label>
                  <Span>
                    <IconButton onClick={() => decrementRange()}>
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  </Span>
                </label>
                <label>
                  <Span>
                    <IconButton onClick={() => incrementRange()}>
                      <KeyboardArrowRightIcon />
                    </IconButton>
                  </Span>
                </label>
              </Paragraph>
            </FooterContent>
          </Footer>
        )}
      </Wrapper>
    </>
  )
}

export default SubscribtionsList
