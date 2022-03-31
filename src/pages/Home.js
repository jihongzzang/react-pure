import React from 'react';
import Composition from '../components/Props/Composition';
import Extraction from '../components/Props/Exraction/Extraction';
import ClassComponent from '../components/State/ClassComponent';
import { FuctionalComponent } from '../components/State/FuctionalComponent';
import ClassComponent2 from '../components/LifeCycle/ClassComponent';
import Event from '../components/Event/Event';
import Condition from '../components/Condition/Condition';
import List from '../components/List/List';
const Home = () => {
  return (
    <>
      {/* <Composition />
      <Extraction />
      <ClassComponent />
      <FuctionalComponent />
      <ClassComponent2 />
      <Event />
      <Condition /> */}
      <List />
    </>
  );
};

export default Home;
