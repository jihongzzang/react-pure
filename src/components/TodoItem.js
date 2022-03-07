import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../Atoms/todo';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = ({ target: { value } }) => {
    const newList = todoList.map(listItem =>
      listItem.id === item.id ? { ...listItem, text: value } : listItem
    );

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = todoList.map(listItem =>
      listItem.id === item.id
        ? { ...listItem, isComplete: !item.isComplete }
        : listItem
    );

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter(listItem => listItem.id !== item.id);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default TodoItem;
