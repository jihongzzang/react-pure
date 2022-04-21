import React from 'react';

export default function Event() {
  const handleBtnClick = () => {
    console.log('handleBtnClickBaby');
  };

  const handleMouseLeave = e => {
    console.dir(e);
  };

  const handleClickCapture = () => {
    console.log('handleClickCaptureParent');
  };

  const handleClickCapture2 = () => {
    console.log('handleClickCaptureChild');
  };

  const handleClickBubble = () => {
    console.log('handleClickBubbleChild');
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleBtnClick} onMouseLeave={handleMouseLeave}>
          button
        </button>
      </div>
    </div>
  );
}
