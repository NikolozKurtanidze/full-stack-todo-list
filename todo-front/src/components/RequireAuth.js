import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth(props) {
  let auth = localStorage.getItem('isLogged');
  let location = useLocation();

  if (auth == 'false')
    return <Navigate to="/" state={{ from: location }} />
  return props.element;
}

export default RequireAuth;