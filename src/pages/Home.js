import React from 'react';
import Composition from '../components/Props/Composition';
import Extraction from '../components/Props/Exraction/Extraction';
import ClassComponent from '../components/State/ClassComponent';
import ClassComponent2 from '../components/LifeCycle/ClassComponent';
import { FuctionalComponent } from '../components/State/FuctionalComponent';
const Home = () => {
  return (
    <>
      <ClassComponent2 />
      {/* <Composition />
      <Extraction />
      <ClassComponent />
      <FuctionalComponent /> */}
    </>
  );
};

export default Home;
