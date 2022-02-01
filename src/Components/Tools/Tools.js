import './Tools.scss';
import React, { useState } from 'react';

export const Tools = props => {
  const [task, setTask] = useState('');

  const handleChange = e => {
    setTask(e.target.value);
  }

  const handleClick = e => {
    e.preventDefault();

    if (task != '') {
      props.onAddTask(task);
      setTask('');
    }
  }

  return (
    <form className='Tools'>
      <input type='text' placeholder='Enter task' value={task} onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </form>
  );
}