import React from 'react';
import Composition from '../components/Props/Composition';
import Extraction from '../components/Props/Exraction/Extraction';
import ClassComponent from '../components/State/ClassComponent';
import { FuctionalComponent } from '../components/State/FuctionalComponent';
const Home = () => {
  return (
    <>
      <Composition />
      <Extraction />
      <ClassComponent />
      <FuctionalComponent />
    </>
  );
};

export default Home;
