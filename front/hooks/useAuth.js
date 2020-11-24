import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser, deleteUser } from "../Reducers/userSlice.js";

const useAuth = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);

  const setCurrentUser = (user) => dispatch(setUser(user));
  const deleteCurrentUser = () => dispatch(deleteUser());

  return {
    currentUser,
    setCurrentUser,
    deleteCurrentUser,
  };
};

export default useAuth;
