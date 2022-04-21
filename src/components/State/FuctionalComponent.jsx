import React, { useEffect, useState } from 'react';

export default function FuctionalComponent() {
  const [date, setDate] = useState(() => {
    return new Date();
  }); //==>state Update

  const tick = () => {
    setDate(new Date());
  }; //==>state Update

  useEffect(() => {
    const interval = setInterval(() => tick());

    return () => {
      clearInterval(interval);
    }; //=> willUnmount
  }, []); //=> didMount

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
