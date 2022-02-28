import React from "react";
import TaskService from "../service/TaskService";
import GoToList from "./GoToList";
import LogoutButton from "./LogoutButton";

function AddTaskForm() {

  const addTaskClick = () =>
    TaskService.addTask(document.getElementById('input-task').value);

  return (
    <div className="App">
      <input id="input-task" className="username-input input-basic input-task" placeholder="Task body"></input>
      <button className="add-task-button" onClick={() => addTaskClick()}>Add task</button>
      <LogoutButton className='log-out-b' />
      <GoToList />
    </div>
  )
}

export default AddTaskForm;