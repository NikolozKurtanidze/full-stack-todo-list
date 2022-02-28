import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function NoAuth(props) {
  let auth = localStorage.getItem('isLogged');
  let location = useLocation();

  if (auth == 'true')
    return <Navigate to="/login" state={{ from: location }} />
  return props.element;
}

export default NoAuth;