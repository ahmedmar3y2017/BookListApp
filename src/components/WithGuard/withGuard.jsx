import React from "react";
import { useSelector } from "react-redux";

const WithGuard = ({ children }) => {

useSelector(state => state.au)

  return <div>{children}</div>;
};

export default WithGuard;
