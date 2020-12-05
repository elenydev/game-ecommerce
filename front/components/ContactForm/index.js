import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import useAlert from "../../hooks/useAlert"
import { FormLabel } from "@material-ui/core"
import Alert from "../Alert/index.js"
import {
  Wrapper,
  Form,
  Heading,
  ErrorSpan,
  Input,
  TextInput,
  Button,
} from "./contactform.styles"
import { CHECK_IF_EMAIL_REGEX } from "../../constants"
import { ENDPOINT_URL } from "../../constants"

const defaultValues = {
  customerName: null,
  email: null,
  message: null,
}

const ContactForm = () => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues,
  })
  const {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  } = useAlert()

  const handleSendEmail = async (data, event) => {
    event.preventDefault()
    try {
      const request = await fetch(`${ENDPOINT_URL}/emails/send`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const response = await request.json()
      if (!response.newEmail) {
        setErrorAlert()
      }
      setVariant("success")
      setMessage("Email send")
      reset()
    } catch (err) {
      setErrorAlert()
    }
  }

  useEffect(() => {
    let mounted = true
    if (mounted) clearMessage()
    return () => {
      mounted = false
    }
  }, [message])

  return (
    <Wrapper id="contact">
      <Heading>Have question?</Heading>

      <Form onSubmit={handleSubmit(handleSendEmail)}>
        <FormLabel>
          <Input
            type="text"
            name="customerName"
            placeholder="Your name"
            ref={register({ required: true })}
            onChange={() => {
              setError("customerName", {
                type: "manual",
                message: "You have to provide a name",
              })
            }}
          />
        </FormLabel>

        {errors.customerName && errors.customerName.type === "required" && (
          <ErrorSpan>Please provide a name</ErrorSpan>
        )}

        <FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Your e-mail"
            ref={register({
              required: true,
              pattern: {
                value: CHECK_IF_EMAIL_REGEX,
                message: "invalid email address",
              },
            })}
          />
        </FormLabel>

        {errors.email && errors.email.type === "required" && (
          <ErrorSpan>Please provide a email</ErrorSpan>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <ErrorSpan>Please provide a correct email</ErrorSpan>
        )}

        <FormLabel>
          <TextInput
            placeholder="Your message..."
            name="message"
            ref={register({ required: true })}
          ></TextInput>
        </FormLabel>

        {errors.message && errors.message.type === "required" && (
          <ErrorSpan>Please provide a message</ErrorSpan>
        )}
        <label>
          <Button type="submit">Send</Button>
        </label>
      </Form>
      {message && (
        <Alert shouldOpen={true} message={message} variant={variant} />
      )}
    </Wrapper>
  )
}

export default ContactForm
