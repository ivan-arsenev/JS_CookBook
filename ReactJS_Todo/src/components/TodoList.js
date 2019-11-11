import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos }) => {
  const elements = todos.map(el => {
    const { id, ...itemProps } = el; //destructoring with spread operator
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};

// const TodoList1 = ({ todos }) => (
//   <ul>
//     {todos.map(el => (
//       <li>
//         {' '}
//         <TodoListItem {...el} />{' '}
//       </li>
//     ))}
//   </ul>
// );

export default TodoList;
