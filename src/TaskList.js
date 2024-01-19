import React from 'react';
import Task from './Task';
import './styling/TaskList.css';

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div>
      <h2>To Be Performed</h2>
      {tasks.filter(task => !task.completed).map(task => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
      <h2>Completed</h2>
      {tasks.filter(task => task.completed).map(task => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTask={toggleTask} 
          deleteTask={deleteTask} 
        />
      ))}
    </div>
  );
}

export default TaskList;
