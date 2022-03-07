import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../Atoms/todo';

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUnCompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const convertPercentCompleted = Math.floor(percentCompleted * 100) + '%';

  return (
    <ul>
      <li>전체 할일: {totalNum}</li>
      <li>완료된 목록: {totalCompletedNum}</li>
      <li>완료되지 않은 목룍: {totalUnCompletedNum}</li>
      <li>완료된 목록에 대한 퍼센트: {convertPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
