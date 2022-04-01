import React from 'react';
import Dialog from './Dialog';
import CustomDialog from './CustomDialog';

export default function WelcomeDialog() {
  // return (
  //   <Dialog>
  //     <h1>Welcome</h1>
  //     <h5>Thank You!</h5>
  //   </Dialog>
  // );
  return (
    <CustomDialog
      title={<button>CustomDialog</button>}
      description="I am CustomDialog"
    />
  );
}
