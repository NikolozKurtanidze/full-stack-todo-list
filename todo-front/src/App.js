import React from "react";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import LoggedInForm from "./components/LoggedInForm";
import RequireAuth from "./components/RequireAuth";
import NoAuth from "./components/NoAuth";
import TaskListForm from "./components/TaskListForm";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  localStorage.setItem('isLogged', 'false');
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/addtask" exact element={<RequireAuth element={<AddTaskForm></AddTaskForm>} />} />
        <Route path="/login" exact element={<NoAuth element={<LoginForm />} />} />
        <Route path="/tasks" exact element={<RequireAuth element={<TaskListForm />} />} />
      </Routes>
    </div>
  );
}
export default App;
