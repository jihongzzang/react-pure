import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../Atoms/todo';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <Wrraper>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </Wrraper>
  );
};

export default TodoList;

const Wrraper = styled.div`
  margin: 0 auto;
  margin-top: 25vh;
  width: 50vh;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
