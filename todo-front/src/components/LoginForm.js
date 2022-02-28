import React, { useState } from 'react';
import './styles.css'
import axios from 'axios';
import UserService from '../service/UserService';
import { useNavigate } from 'react-router-dom';

var showInput = false;

function LoginForm() {

  async function signInClick() {
    const username = document.getElementById('input-username').value;
    const pwd = document.getElementById('input-password').value;
    var result;
    var response = await UserService.checkUser(username, pwd);
    return response;
  }

  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/tasks');
  }

  return (
    <div className='main App'>
      <header className='style-header'>Login</header>
      <input id='input-username' placeholder='Username' className='input-username input-basic'></input>
      <input id='input-password' type={'password'} placeholder='Password' className='input-password input-basic'></input>
      <button className='login-button' onClick={async () => {
        signInClick().then((response) => {
          if (response == 'error' || response.data == false) {
            if (document.getElementById('error').classList.contains('hidden'))
              document.getElementById('error').classList.remove('hidden');
            document.getElementById('error').classList.add('visible');
          } else {
            if (document.getElementById('error').classList.contains('visible'))
              document.getElementById('error').classList.remove('visible');
            document.getElementById('error').classList.add('hidden');
            localStorage.setItem('isLogged', 'true');
            localStorage.setItem('username', document.getElementById('input-username').value);
            routeChange();
          }
          console.log(localStorage.getItem('isLogged'));
        });
      }}>Sign in</button>
      <h1 id='error' className='hidden error-message'>Invalid username or password!</h1>
    </div >
  )
}

export default LoginForm;