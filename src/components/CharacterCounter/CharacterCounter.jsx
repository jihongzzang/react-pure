import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { charCountState, textState } from '../../Atoms/counterStore';

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      <br />
      Echo: {text}
    </div>
  );
}

export function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <br />
      <CharacterCount />
    </div>
  );
}
