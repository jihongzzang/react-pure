import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../Atoms/todoStore';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './ToListStats';

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <br />
      <br />
      <TodoItemCreator />
      <br />
      {todoList.map(item => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}
