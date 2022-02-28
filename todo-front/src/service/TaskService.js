import axios from "axios";

const tasksURL = "http://localhost:8080/tasks/";
const createTaskURL = "http://localhost:8080/taskCreate/"


class TaskService {

  async getTasks() {
    const username = localStorage.getItem('username');
    const result = await axios.get(tasksURL + username);
    return result.data;
  }

  removeTask(taskId) {
    axios.delete(tasksURL + taskId);
  }

  addTask(task_body) {
    console.log(task_body);
    axios.post(createTaskURL + localStorage.getItem('username'), {}, {
      params: {
        taskBody: task_body
      }
    });
  }

}

export default new TaskService;