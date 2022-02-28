import React from "react";
import { useNavigate } from "react-router-dom";


function LoggedInForm() {
  let navigate = useNavigate();

  let routeChange = () => {
    navigate("/");
  }

  if (localStorage.getItem('isLogged'))
    navigate("/");

  return (
    <div className='main'>
      <header className='style-header'>You are logged in!</header>
      <button className='login-button logout-button' onClick={() => {
        localStorage.setItem('isLogged', 'false');
        routeChange();
      }}>Log out</button>
    </div>
  )
}

export default LoggedInForm;