import React from 'react';
import { RecoilRoot } from 'recoil';
import { CharacterCounter } from '../components/CharacterCounter/CharacterCounter';
import FontButton from '../components/FontButton/FontButton';
import TestMocking from '../components/TestMocking/TestMocking';
import Text from '../components/Text/Text';
import TodoList from '../components/Todo/TodoList';
import CurrentUserInfo from '../components/UserInfo/UserInfo';

const Home = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '50%',
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid tomato',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <RecoilRoot>
          {/* <FontButton />
          <Text />
          <CharacterCounter /> */}
          <TodoList />
          <CurrentUserInfo />
        </RecoilRoot>
        {/* <TestMocking /> */}
      </div>
    </div>
  );
};

export default Home;
