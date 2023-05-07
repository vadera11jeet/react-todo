import React from "react";
import { Navigate } from "react-router-dom";
import { AuthProps } from "../Interfaces/Interfaces";

const AuthRoute = (props: AuthProps) => {
  if (!props.isAuth) return <Navigate to="/" replace />;
  return <>{props.children}</>;
};

export default AuthRoute;
