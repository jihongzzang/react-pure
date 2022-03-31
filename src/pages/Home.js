import React from 'react';
import Composition from '../components/Props/Composition';
import Extraction from '../components/Props/Exraction/Extraction';
import ClassComponent from '../components/State/ClassComponent';
import ClassComponent2 from '../components/LifeCycle/ClassComponent';
import Event from '../components/Event/Event';
import { FuctionalComponent } from '../components/State/FuctionalComponent';
const Home = () => {
  return (
    <>
      {/* <Composition />
      <Extraction />
      <ClassComponent />
      <FuctionalComponent />
      <ClassComponent2 /> */}
      <Event />
    </>
  );
};

export default Home;
