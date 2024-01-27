import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title: title, status: "backlog" }]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

 const addInProgress = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: "inprogress" } : task
    ));
  };
  const addDone = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: "done" } : task
    ));
  };
  const addBacklog= (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: "backlog" } : task
    ));
  };

  return (
    <div className="app">
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} functions={[addBacklog,addInProgress,addDone]} />
    </div>
  );
}

export default App;

