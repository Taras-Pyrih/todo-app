import './Todo.css';
import React, { useState } from 'react';
import { Tools } from '../Tools/Tools.js';
import { TodoList } from '../TodoList/TodoList.js';

export const Todo = () => {
  const [tasksArray, addTask] = useState(['one', 'two', 'three', 'four', 'five']);

  return (
    <div className='Todo'>
      <Tools onAddTask={addTask} currentTasksArray={tasksArray}/>
      <TodoList data={tasksArray}/>
    </div>
  );
}