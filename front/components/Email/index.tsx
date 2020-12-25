import React, { Dispatch, SetStateAction } from "react"
import useAuth from "../../hooks/useAuth"
import useNotification from "../../hooks/useNotification"

import { IconButton } from "@material-ui/core"
import DeleteForeverIcon from "@material-ui/icons/DeleteForever"
import EmailIcon from "@material-ui/icons/Email"
import {
  Wrapper,
  EmailContainer,
  EmailDescriptionBox,
  CustomerEmail,
  EmailCustomerName,
  EmailMessage,
  EmailWrapper,
  DeleteWrapper,
} from "./email.styles"
import { ENDPOINT_URL } from "../../constants"
import { Email as EmailInterface } from "@/../interfaces/dataInterfaces"

type Props = {
  setEmails: Dispatch<SetStateAction<EmailInterface[]>>
  emailId: string
  emailMessage: {
    customerName: string
    email: string
    message: string
    date: string
  }
}

const Email = (props: Props) => {
  const { setEmails, emailId } = props
  const { customerName, email, message, date } = props.emailMessage
  const { setNotification, setErrorNotification } = useNotification()
  const {
    currentUser: {
      user: { userId },
    },
    tokenCookie,
  } = useAuth()

  const fetchEmails = async (): Promise<void> => {
    try {
      const query = await fetch(`${ENDPOINT_URL}/emails/all`)
      const response = await query.json()
      setEmails(response.emails.reverse())
    } catch (err) {
      setErrorNotification()
    }
  }

  const deleteEmailFromDatabase = async (emailId: string): Promise<void> => {
    try {
      const request = await fetch(`${ENDPOINT_URL}/emails/remove`, {
        method: "POST",
        body: JSON.stringify({ emailId, userId }),
        headers: {
          Authorization: "Bearer " + tokenCookie,
          "Content-Type": "application/json",
        },
      })
      const {
        email,
        message,
      }: { email: string; message: string } = await request.json()
      if (!email) {
        setErrorNotification()
        return
      }
      setNotification("success", message)
      fetchEmails()
    } catch (err) {
      setErrorNotification()
    }
  }

  return (
    <Wrapper>
      <EmailWrapper>
        <EmailContainer>
          <EmailDescriptionBox>
            <CustomerEmail>{email}</CustomerEmail>

            <EmailCustomerName>
              {customerName} {date}
            </EmailCustomerName>

            <EmailMessage>Message:</EmailMessage>
            <EmailMessage>{message}</EmailMessage>
          </EmailDescriptionBox>
        </EmailContainer>

        <DeleteWrapper>
          <IconButton onClick={() => deleteEmailFromDatabase(emailId)}>
            <DeleteForeverIcon />
          </IconButton>
          <IconButton>
            <a href={`mailto:${email}`}>
              <EmailIcon />
            </a>
          </IconButton>
        </DeleteWrapper>
      </EmailWrapper>
    </Wrapper>
  )
}

export default Email
