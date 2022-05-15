import React from 'react';
import Comments from '../components/Comments';
import Display from '../components/Display';
import Subscribers from '../components/Subscribers';
import Views from '../components/Views';
// import Counter from '../features/counter/Counter';
// import Counter2 from '../components/Counter2';
const Home = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      <Subscribers />
      <Display />
      <Views />
      <Comments />
    </>
  );
};

export default Home;
