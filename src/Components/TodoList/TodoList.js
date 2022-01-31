import './TodoList.scss';
import { v4 as uuidv4 } from 'uuid';

export const TodoList = props => {
  const todoList = props.data.map(item => <li className='listItem' key={uuidv4()}>{item}</li>);

  return (
    todoList.length != 0 &&
    <div className='TodoList'>
      <ol>{todoList}</ol>
    </div>
  );
}