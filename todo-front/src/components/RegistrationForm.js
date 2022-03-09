import React from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";

function RegistrationForm() {

  async function registerOnClick() {
    const pwd1 = document.getElementById("first-password").value
    const pwd2 = document.getElementById("repeat-password").value
    const userName = document.getElementById("reg-username").value
    if (pwd1 != pwd2) {
      if (document.getElementById('error').classList.contains('hidden')) {
        document.getElementById('error').classList.remove('hidden')
        document.getElementById('error').classList.add('visible')
      }
      document.getElementById('error').textContent = "Passwords doesn't match!"
      return
    }
    const response = await UserService.registerUser(userName, pwd1);
    if (response == 'error') {
      if (document.getElementById('error').classList.contains('hidden')) {
        document.getElementById('error').classList.remove('hidden')
        document.getElementById('error').classList.add('visible')
      }
      document.getElementById('error').textContent = 'Something went wrong!'
      return
    }
    changeRoute()
  }

  let navigate = useNavigate()
  const changeRoute = () => {
    navigate("/login")
  }

  return (
    <div className='main App'>
      <header className='style-header'>Register</header>
      <input id='reg-username' placeholder='Username' className='input-username input-basic'></input>
      <input id='first-password' type={'password'} placeholder='Password' className='input-password input-basic'></input>
      <input id='repeat-password' type={'password'} placeholder='Repeat password' className='input-password input-basic'></input>
      <button className='login-button' onClick={() => registerOnClick()}>Register</button>
      <button className='login-button go-to-login' >Login</button>
      <h1 id='error' className='hidden error-message' onClick={() => changeRoute()}>Passwords doesn't match!</h1>
    </div >
  )
}

export default RegistrationForm


