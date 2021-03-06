import React from "react"

import { useForm } from "react-hook-form"
import useNotification from "../../hooks/useNotification"
import { FormLabel } from "@material-ui/core"
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
import { ContactFormData } from "@/../interfaces/dataInterfaces"

const defaultValues: ContactFormData = {
  customerName: null,
  email: null,
  message: null,
}

const ContactForm = (): JSX.Element => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues,
  })
  const { setErrorNotification, setNotification } = useNotification()

  const onSubmit = handleSubmit(
    async (data): Promise<void> => {
      try {
        const request = await fetch(`${ENDPOINT_URL}/emails/send`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
        const { newEmail } = await request.json()
        if (!newEmail) {
          setErrorNotification()
          return
        }
        setNotification("success", "Email sent")
        reset()
      } catch (err) {
        setErrorNotification()
      }
    }
  )

  return (
    <Wrapper id="contact">
      <Heading>Have question?</Heading>

      <Form onSubmit={onSubmit}>
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
    </Wrapper>
  )
}

export default ContactForm
