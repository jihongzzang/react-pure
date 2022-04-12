import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fontSizeState } from '../../Atoms/fontSizeStore';

export default function Text() {
  const fontSize = useRecoilValue(fontSizeState);
  // const [fontSize] = useRecoilState(fontSizeState);

  return (
    <div>
      <br />
      <p style={{ fontSize }}>This text will increase in size too.</p>
    </div>
  );
}
