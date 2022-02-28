import { React } from "react";
import { useNavigate } from "react-router-dom";

function RedirectButton() {

  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/addtask');
    localStorage.setItem('isLogged', 'true');
  }

  return (
    <button className='new-task-button' onClick={() => routeChange()}>Add new task</button>
  )
}


export default RedirectButton;
