import React, { useRef } from 'react';

function TaskInput({ addTask }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = inputRef.current.value;
    if (title) {
      addTask(title);
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        ref={inputRef}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
