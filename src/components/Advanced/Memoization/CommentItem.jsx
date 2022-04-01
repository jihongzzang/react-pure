import React, { Profiler, memo, useState, useMemo } from 'react';
import './CommentItem.css';

function CommentItem({ title, content, likes, parentClick }) {
  const [clickCount, setClickCount] = useState(0);

  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    console.log(`acturDuation(${title}: ${actualDuration})`);
  }

  const handleClick = () => {
    parentClick();
    setClickCount(prev => prev + 1);
    alert(`${title} 눌림`);
  };

  // const rate = useMemo(() => {
  //   console.log(`${title} rate Check`);
  //   return likes > 10 ? 'Good' : 'Bad';
  // }, [likes]);

  // const rate2 = () => {
  //   console.log(`${title} rate Check`);
  //   return likes > 10 ? 'Good' : 'Bad';
  // };

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <h1>{title}</h1>
        <br />
        <h1>{content}</h1>
        <br />
        <h1>{likes}</h1>
        <br />
        {/* <span>{rate}</span> */}
        {/* <span>{rate2()}</span> */}
        <br />
        <span>{clickCount}</span>
      </div>
    </Profiler>
  );
}

// export default CommentItem;
export default memo(CommentItem);
