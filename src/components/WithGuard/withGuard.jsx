import React from "react";
import { useSelector } from "react-redux";

const WithGuard = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? children : "User Not Logged In";
};

export default WithGuard;
