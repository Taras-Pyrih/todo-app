import './Todo.scss';
import React, { useState } from 'react';
import { Tools } from '../Tools/Tools.js';
import { TodoList } from '../TodoList/TodoList.js';

export const Todo = () => {
  const [tasksArray, setTasksArray] = useState([
    {
      value: 'one',
      done: false
    },
    {
      value: 'two',
      done: false
    },
    {
      value: 'three',
      done: false
    },
    {
      value: 'four',
      done: false
    },
    {
      value: 'five',
      done: false
    }
  ]);

  const handleAddTask = task => {
    const newTask = {
      value: task,
      done: false
    };
    const newTasksArray = [...tasksArray, newTask];

    setTasksArray(newTasksArray);
  }

  const handleChangeDone = index => {
    const newTasksArray = [...tasksArray];
    
    newTasksArray[index].done = !newTasksArray[index].done;

    setTasksArray(newTasksArray);
  }
  
  return (
    <div className='Todo'>
      <Tools onAddTask={handleAddTask}/>
      <TodoList data={tasksArray} onChangeDone={handleChangeDone}/>
    </div>
  );
}