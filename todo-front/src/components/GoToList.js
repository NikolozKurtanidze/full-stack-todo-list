import { React } from "react";
import { useNavigate } from "react-router-dom";

function GoToList() {

  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/tasks');
    localStorage.setItem('isLogged', 'true');
  }

  return (
    <button className='go-to-button' onClick={() => routeChange()}>Task list</button>
  )
}


export default GoToList;
