import React from "react";
import styled from "styled-components";
import Auth from "../../components/Auth/index";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  z-index: 1;
  background: url("/images/register.jpg") no-repeat center;
  background-size: cover;
`;

const Register = () => {
  return (
    <Wrapper>
      <Auth />
    </Wrapper>
  );
};

export default Register;
