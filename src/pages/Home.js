import React from 'react';
import { RecoilRoot } from 'recoil';
import { CharacterCounter } from '../components/CharacterCounter/CharacterCounter';
import FontButton from '../components/FontButton/FontButton';
import Text from '../components/Text/Text';

const Home = () => {
  return (
    <RecoilRoot>
      <FontButton />
      <Text />
      <CharacterCounter />
    </RecoilRoot>
  );
};

export default Home;
