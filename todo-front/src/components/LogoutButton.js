import { React } from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton() {

  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/login');
    localStorage.setItem('isLogged', 'false');
  }

  return (
    <button className='button-logout' onClick={() => routeChange()}>Log out</button>
  )
}


export default LogoutButton;
