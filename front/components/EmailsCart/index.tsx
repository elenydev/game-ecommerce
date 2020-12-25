import React, { useState, useEffect } from "react"
import usePagination from "../../hooks/usePagination"

import Email from "../Email/index"
import { Wrapper, Heading, Footer } from "./emailscart.styles"
import {
  FooterContent,
  FooterRows,
  Paragraph,
  Span,
} from "../ProductsComponent/productsComponent.styles"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft"
import IconButton from "@material-ui/core/IconButton"
import { Email as EmailInterface } from "@/../interfaces/dataInterfaces"

type Props = {
  emailsList: EmailInterface[]
}

const EmailsCart = ({ emailsList }: Props): JSX.Element => {
  const [emails, setEmails] = useState(emailsList)
  const {
    startRange,
    endRange,
    incrementRange,
    checkRanges,
    decrementRange,
    handleArrayRange,
    setVisibleProducts,
  } = usePagination()

  const { slicedArray, arrayLength } = handleArrayRange(emails)

  useEffect(() => {
    let mounted = true
    if (mounted) {
      checkRanges()
    }
    return () => {
      mounted = false
    }
  }, [emails])

  return (
    <>
      <Wrapper>
        {emails && emails.length === 0 ? (
          <Heading>We don't have any emails</Heading>
        ) : (
          <>
            <Heading>Emails: </Heading>

            {slicedArray.map((email, index) => (
              <Email
                emailMessage={email}
                key={index}
                emailId={email._id}
                setEmails={setEmails}
              />
            ))}
          </>
        )}

        {emails.length > 0 && (
          <Footer>
            <FooterContent>
              <FooterRows>
                <Paragraph>Emails displayed:</Paragraph>

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

export default EmailsCart
