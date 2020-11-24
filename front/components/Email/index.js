import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EmailIcon from "@material-ui/icons/Email";
import useCookie from "../../hooks/useCookie";
import useAuth from "../../hooks/useAuth";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 50px;

  @media (min-width: 960px) {
    margin: 5px 0px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const EmailDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  color: #5bb2fc;

  @media (min-width: 960px) {
    margin: 0 25px;
    max-width: 450px;
    align-items: flex-start;
  }
`;

const CustomerEmail = styled.h2`
  display: flex;
  margin: 10px 0;
  font-size: 1.1em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    font-size: 1.5em;
    text-align: center;
  }
`;

const EmailCustomerName = styled.p`
  display: flex;
  font-size: 0.8em;

  @media (min-width: 960px) {
    justify-content: flex-start;
    margin-bottom: 10px;
  }
`;

const EmailMessage = styled.p`
  display: flex;
  align-items: flex-start;
  color: rgb(255 90 90 /90%);
  margin-top:10px;
  word-break: break-word;
`;

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgb(255 90 90 /60%);



  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const DeleteWrapper = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > .MuiIconButton-root {
    color: rgb(255 90 90 /90%) !important;
  }
  .MuiIconButton-label > a {
    padding-top: 8px !important;
  }

  @media (min-width: 960px) {
    flex-direction: column;
  }
`;

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
