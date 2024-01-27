import React, { useState } from 'react';
import '../styling/Task.css';
import progress from '../assets/clock.png';
import done from '../assets/success.png';
import notStarted from '../assets/remove.png';

function Task({ task, functions }) {
  const [hovered, setHovered] = useState(false);
  const [color,setColor] = useState(`#` + Math.floor(Math.random() * 16777215).toString(16));
  

  const renderButtons = (param) => {
    switch (param) {
      case 'backlog':
        return hovered && [
          <button key="1" onClick={() => functions[1](task.id)}>
            <img src={progress} alt='in progress' />
          </button>,
          <button key="2" onClick={() => functions[2](task.id)}>
            <img src={done} alt='done' />
          </button>
        ];
      case 'inprogress':
        return hovered && [
          <button key="3" onClick={() => functions[0](task.id)}>
            <img src={notStarted} alt='not started' />
          </button>,
          <button key="4" onClick={() => functions[2](task.id)}>
            <img src={done} alt='done' />
          </button>
        ];
      case 'done':
        return hovered && [
          <button key="5" onClick={() => functions[1](task.id)}>
            <img src={progress} alt='in progress' />
          </button>,
          <button key="6" onClick={() => functions[0](task.id)}>
            <img src={notStarted} alt='not started' />
          </button>
        ];
      default:
        return null;
    }
  };

  return (
    <div
      className='task'
      style={{ border: `2px ${color} solid`, borderLeft: `6px ${color} solid` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{task.title}</span>
      {renderButtons(task.status)}
    </div>
  );
}

export default Task;
