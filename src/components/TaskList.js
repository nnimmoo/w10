import React from 'react';
import Task from './Task';
import '../styling/TaskList.css';

function TaskList({ tasks, functions }) {
  return (
    <div className='task_display'>
      <div className='task_container backlog'>
        <div class="text_container">
           <h3>Backlog </h3>
         <h3>{tasks.filter(task => task.status === "backlog").length}</h3> 
         </div>
         <hr class="hr-red" />
        {tasks.filter(task => task.status === "backlog").map(task => (
          <Task
            key={task.id}
            task={task}
            functions={functions}
          />
        ))}
      </div>
      <div className='task_container inprogress'>
        <div class="text_container"> 
         <h3>In progress</h3> 
        <h3>{tasks.filter(task => task.status === "inprogress").length}</h3> </div>
        <hr class="hr-yellow" />
        {tasks.filter(task => task.status === "inprogress").map(task => (
          <Task
            key={task.id}
            task={task}
            functions={functions}
          />
        ))}
      </div>
      <div className='task_container done'>
      <div class="text_container"> 
        <h3>Done </h3> 
        <h3>{tasks.filter(task => task.status === "done").length}</h3>
        </div>
        <hr class="hr-green" />
        {tasks.filter(task => task.status === "done").map(task => (
          <Task
            key={task.id}
            task={task}
            functions={functions}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
