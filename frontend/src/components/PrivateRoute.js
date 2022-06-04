import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { unauthorized, logout } from "../actions/auth";

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  dispatch(unauthorized())
    .then(() => setAuthenticated(true))
    .catch((err) => {
      console.log(err);
      setAuthenticated(false);
    });

  if (!authenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};
