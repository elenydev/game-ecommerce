import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import useNotification from "../../hooks/useNotification"

import {
  NewsletterContainer,
  Heading,
  Form,
  Input,
  Button,
  ErrorSpan,
  InputContainer,
} from "./newsletter.styles"
import { FormLabel } from "@material-ui/core"
import { CHECK_IF_EMAIL_REGEX, ENDPOINT_URL } from "../../constants"

const defaultValues: { email: string } = {
  email: null,
}

const Newsletter = (): JSX.Element => {
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues,
  })
  const { setNotification, setErrorNotification } = useNotification()

  const addSubscriber = handleSubmit(
    async (data): Promise<void> => {
      try {
        const query = await fetch(`${ENDPOINT_URL}/subscribtions/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
        const {
          subscriber,
          message,
        }: { subscriber: string; message: string } = await query.json()
        if (!subscriber) {
          setNotification("error", message)
          reset()
          return
        }
        setNotification("success", message)
        reset()
      } catch (err) {
        setErrorNotification()
      }
    }
  )

  return (
    <>
      <NewsletterContainer>
        <Heading>Newsletter</Heading>

        <Form onSubmit={addSubscriber}>
          <InputContainer>
            <FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                ref={register({
                  required: true,
                  pattern: {
                    value: CHECK_IF_EMAIL_REGEX,
                    message: "invalid email address",
                  },
                })}
              />
            </FormLabel>
          </InputContainer>
          <label>
            <Button type="submit">Subscribe</Button>
          </label>
        </Form>
      </NewsletterContainer>
      {errors.email && errors.email.type === "required" && (
        <ErrorSpan>Please provide a email</ErrorSpan>
      )}
      {errors.email && errors.email.type === "pattern" && (
        <ErrorSpan>Please provide a correct email</ErrorSpan>
      )}
    </>
  )
}

export default Newsletter
