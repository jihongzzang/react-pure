import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../Atoms/todo';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
      <span>Fliter : </span>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">모두보기</option>
        <option value="Show Completed">완료된 목록</option>
        <option value="Show UnCompleted">완료되지않은 목록</option>
      </select>
    </>
  );
};

export default TodoListFilters;
