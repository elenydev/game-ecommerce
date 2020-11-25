import React from "react";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";

import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EmailIcon from "@material-ui/icons/Email";
import {
  Wrapper,
  EmailContainer,
  EmailDescriptionBox,
  CustomerEmail,
  EmailCustomerName,
  EmailMessage,
  EmailWrapper,
  DeleteWrapper,
} from "./email.styles";


const Email = (props) => {
  const { customerName, email, message, date } = props.emailMessage;
  const { setEmails, emailId, setMessage, setVariant, setErrorAlert } = props;
  const { tokenCookie } = useCookie();
  const {
    currentUser: {
      user: { userId },
    },
  } = useAuth();

  const fetchEmails = async () => {
    try {
      const query = await fetch(
        "https://online-gaming-shop.herokuapp.com/getEmails"
      );
      const response = await query.json();
      setEmails(response.emails.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmailFromDatabase = async (emailId) => {
    try {
      const request = await fetch(
        "https://online-gaming-shop.herokuapp.com/removeEmail",
        {
          method: "POST",
          body: JSON.stringify({ emailId: emailId, userId }),
          headers: {
            Authorization: "Bearer " + tokenCookie,
            "Content-Type": "application/json",
          },
        }
      );
      const response = await request.json();
      if (!response.email) {
        setErrorAlert();
        return;
      }
      setVariant("success");
      setMessage("Email deleted");
      fetchEmails();
    } catch (err) {
      setErrorAlert();
    }
  };

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
            <a href={`mailto:${email}`}><EmailIcon/></a>
          </IconButton>
        </DeleteWrapper>
        
      </EmailWrapper>
    </Wrapper>
  );
};

export default Email;
