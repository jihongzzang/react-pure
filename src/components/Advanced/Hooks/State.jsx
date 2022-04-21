import React, { useState } from 'react';

export default function State() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h1>State</h1>
      <div>
        Count: {count}
        <br />
        <br />
        <button onClick={() => setCount(initialCount)}>reset</button>
        <br />
        <br />
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <br />
        <br />
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
      </div>
    </>
  );
}
