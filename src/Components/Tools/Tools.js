import './Tools.css';
import React, { useState } from 'react';

export const Tools = props => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleClick = (e) => {
    e.preventDefault();

    const currentTasksArray = props.currentTasksArray;
    const newTasksArray = [...currentTasksArray, task];

    props.onAddTask(newTasksArray);
    setTask('');
  }

  return (
    <form className='Tools'>
      <input type='text' placeholder='Enter task' value={task} onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </form>
  );
}