import React from 'react';
import { createPortal } from 'react-dom';
import ThankYouDialog from './ThankYouDialog';

const Portal2 = props => {
  return createPortal(props.children, document.getElementById('portal'));
};

export default function Portal() {
  return (
    <div
      style={{
        width: '30vh',
        height: '30vh',
        position: 'relative',
        background: 'teal',
      }}
      onClick={() => console.log('div')}
    >
      <Portal2>
        <ThankYouDialog />
      </Portal2>
      <div style={{ position: 'absolute', bottom: '50%' }}>
        <button>나는 절대 위에있지롱</button>
      </div>
    </div>
  );
}
