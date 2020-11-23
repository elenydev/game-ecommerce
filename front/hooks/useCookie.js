import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const useCookie = () => {
  const cookies = new Cookies();
  const [tokenCookie, setTokenCookie] = useState(cookies.get("Token"));
  const [userCookie, setUserCookie] = useState(cookies.get("User"));

  const setCookie = (name, value) => {
    const date = new Date(new Date().getTime() + 60 * 60 * 1000);
    cookies.set(name, value, {
      expires: date,
    });
  };

  const deleteCookie = (name) => {
    cookies.remove(name);
  };

  return {
    tokenCookie,
    userCookie,
    setCookie,
    deleteCookie,
  };
};

export default useCookie;
