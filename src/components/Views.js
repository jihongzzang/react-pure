import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux';

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);

  const handleChange = e => {
    const { value } = e.target;
    setNumber(value);
  };

  return (
    <div>
      <h1>조회 수: {count}</h1>
      <input type="text" value={number} onChange={handleChange} />
      <button onClick={() => addView(number)}>조회하기!</button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
  };
};

const mapDispatchToProps = {
  addView: number => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
