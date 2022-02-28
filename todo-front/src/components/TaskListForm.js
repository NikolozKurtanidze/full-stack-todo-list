import React from "react";
import TaskService from "../service/TaskService";
import { Navigate, useNavigate } from "react-router-dom";
import RedirectButton from "./RedirectButton";
import LogoutButton from "./LogoutButton";

class TaskListForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    }
  }

  deleteClick(taskId) {
    TaskService.removeTask(taskId);
    document.getElementById(taskId).remove();
  }

  arrayRemove(value) {

    return this.taskList.filter(function (ele) {
      return ele != value;
    });
  }

  componentDidMount() {
    TaskService.getTasks().then((response) => {
      this.setState({ taskList: response })
    })
  }

  render() {
    return (
      <div className="task-list-div">
        <table>
          <thead>
            <header className="style-header">Your todo list:</header>
          </thead>
          <tbody>
            {
              this.state.taskList.map(task =>
                <tr key={task.taskId} id={task.taskId}>
                  <td className="table-row">• {task.taskBody}</td>
                  <button className='remove-task-button' id={task.taskId} onClick={() => {
                    this.deleteClick(task.taskId);
                  }}>X</button>
                </tr>
              )
            }
          </tbody>
        </table>
        <RedirectButton />
        <LogoutButton />
      </div>
    )
  }

}


export default TaskListForm;