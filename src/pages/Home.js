import React from 'react';
import { RecoilRoot } from 'recoil';
import { CharacterCounter } from '../components/CharacterCounter/CharacterCounter';
import FontButton from '../components/FontButton/FontButton';
import Text from '../components/Text/Text';
import TodoList from '../components/Todo/TodoList';
import CurrentUserInfo from '../components/UserInfo/UserInfo';

const Home = () => {
  return (
    <RecoilRoot>
      {/* <FontButton /> */}
      {/* <Text /> */}
      {/* <CharacterCounter /> */}
      <TodoList />
      {/* <CurrentUserInfo /> */}
    </RecoilRoot>
  );
};

export default Home;
