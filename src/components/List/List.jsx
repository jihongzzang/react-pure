import React from 'react';

export default function List() {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map(number => {
  //       return <li key={number.toString()}>{number}</li>;
  //     })}
  //   </ul>
  // );
  const todos = [
    { id: 1, text: '물 마시기' },
    { id: 2, text: '운동하기' },
    { id: 3, text: '설겆이 하기' },
    { id: 4, text: '머리 자르기' },
  ];

  const Todo = ({ text, id }) => {
    return (
      <li>
        <span>{id}</span>
        <span>{text}</span>
      </li>
    );
  };

  const todoList = todos.map(todo => (
    <Todo key={todo.id} id={todo.id} text={todo.text} />
  ));

  return <>{todoList}</>;
}
