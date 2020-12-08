import React from "react"
import { useForm } from "react-hook-form"
import useNotification from "../../hooks/useNotification.js"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { FormLabel, Button } from "@material-ui/core"
import {
  LoginDiv,
  InputElement,
  ErrorSpan,
  Form,
} from "./remindpasswordcart.styles"
import { CHECK_IF_EMAIL_REGEX, ENDPOINT_URL } from "../../constants"

const RemindPassword = () => {
  const { register, handleSubmit, errors, setError, reset } = useForm({
    defaultValues: {
      email: null,
    },
  })
  const { setNotification, setErrorNotification } = useNotification()

  const remindPassword = async (data, event) => {
    event.preventDefault()
    try {
      const send = await fetch(`${ENDPOINT_URL}/users/password/remind`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const { user, message } = await send.json()
      if (!user) {
        setNotification("error", message)
      }
      reset()
      setNotification("success", message)
    } catch (err) {
      setErrorNotification()
    }
  }

  return (
    <LoginDiv>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Remind Password
        </AccordionSummary>

        <AccordionDetails>
          <Form onSubmit={handleSubmit(remindPassword)}>
            <FormLabel>
              <InputElement
                type="text"
                name="email"
                placeholder="Enter email"
                inputRef={register({
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
            <label>
              <Button type="submit" variant="contained" color="secondary">
                Remind
              </Button>
            </label>
          </Form>
        </AccordionDetails>
      </Accordion>
    </LoginDiv>
  )
}

export default RemindPassword
