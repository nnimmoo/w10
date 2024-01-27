import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      addTask(input);
      setInput('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button style={{backgroundColor:"blue"}}>Submit</button>
    </form>
  );
}

export default TaskInput;
