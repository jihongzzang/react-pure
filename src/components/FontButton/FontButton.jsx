import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { textState } from '../../Atoms/counterStore';
import { fontSizeLabelState, fontSizeState } from '../../Atoms/fontSizeStore';

export default function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  const text = useRecoilValue(textState);
  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>
      <br />
      <button
        onClick={() => setFontSize(prev => prev + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge {text}
      </button>
    </>
  );
}
