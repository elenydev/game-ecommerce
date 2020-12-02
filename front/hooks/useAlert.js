import React, { useState } from "react";

export const useAlert = () => {
  const [message, setMessage] = useState(null);
  const [variant, setVariant] = useState(null);
  const clearMessage = () => {
    setTimeout(() => {
      setMessage(null);
      setVariant(null);
    }, 1000);
  };

  const setErrorAlert = () => {
    setVariant("error"), setMessage("Something went wrong, try again");
  };
  return {
    message,
    setMessage,
    variant,
    setVariant,
    clearMessage,
    setErrorAlert,
  };
};

export default useAlert;
