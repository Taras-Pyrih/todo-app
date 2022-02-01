import './TodoList.scss';
import classNames from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';


export const TodoList = props => {
  const handleClick = index => {
    props.onChangeDone(index);
  }

  const todoList = props.data.map((item, index) => {
    const liClass = classNames('listItem', {taskIsDone: item.done});

    return (
      <li className={liClass} key={uuidv4()}>
        <span>{index + 1}. {item.value}</span>
        <button onClick={() => handleClick(index)}>Done</button>
      </li>
    );
  });

  return (
    todoList.length != 0 &&
    <div className='TodoList'>
      <ol>{todoList}</ol>
    </div>
  );
}