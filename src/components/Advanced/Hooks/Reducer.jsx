import React, { useReducer } from 'react';

export default function Reducer() {
  const initialState = { count: 0, name: '지홍' };

  function reducer(state, action) {
    switch (action.type) {
      case 'reset':
        return initialState;
      case 'increment':
        return { count: state.count + 1, name: '창민' };
      case 'decrement':
        return { count: state.count - 1, name: '태림' };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Reducer</h1>
      <div>
        Count: {state.count}, Name: {state.name}
        <br />
        <br />
        <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <br />
        <br />
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </div>
    </>
  );
}
