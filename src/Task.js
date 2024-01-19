import React from 'react';
import './styling/Task.css';

function Task({ task, toggleTask, deleteTask }) {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button style={{ marginLeft: 20}} onClick={() => toggleTask(task.id)}>
        {task.completed ? 'Re-activate' : 'Finish'}
      </button>
      <button style={{ marginLeft: 20}} onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
