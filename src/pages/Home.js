import React from 'react';
import State from '../components/Advanced/Hooks/State';
import Reducer from '../components/Advanced/Hooks/Reducer';
import WelcomeDialog from '../components/Advanced/Composition/WelcomeDialog';
import Dialog from '../components/Advanced/Composition2/Dialog';
import ThankYouDialog from '../components/Advanced/Composition2/ThankYouDialog';

const Home = () => {
  return (
    <>
      {/* <State />
      <Reducer />
      <WelcomeDialog />
      <Dialog /> */}
      <ThankYouDialog />
    </>
  );
};

export default Home;
