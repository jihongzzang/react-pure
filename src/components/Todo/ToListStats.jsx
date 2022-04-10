import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../Atoms/todoStore';

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <br />
      <li>Items completed: {totalCompletedNum}</li>
      <br />
      <li>Items not completed: {totalUncompletedNum}</li>
      <br />
      <li>Percent completed: {formattedPercentCompleted}</li>
      <br />
    </ul>
  );
}
