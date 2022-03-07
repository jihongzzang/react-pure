import React from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { countState } from '../Atoms/count';
import { countEvenState } from '../Atoms/count';
import styled from 'styled-components';

const Counter = () => {
  const count = useRecoilValue(countState);
  const [evenCount, setEvenCount] = useRecoilState(countEvenState);
  const incrementEvenNumber = () => setEvenCount(count + 1);
  const resetNumber = useResetRecoilState(countState);

  return (
    <Wrraper>
      <Content>Count : {count}</Content>
      <Content>Even Count: {evenCount ? '짝수' : '홀수'}</Content>
      <ButtonBox>
        <button onClick={incrementEvenNumber}>Even Increment</button>
      </ButtonBox>
      <ButtonBox>
        <button onClick={resetNumber}>reset</button>
      </ButtonBox>
    </Wrraper>
  );
};

export default Counter;

const Wrraper = styled.div`
  margin: 0 auto;
  margin-top: 25vh;
  width: 50vh;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

const Content = styled.div`
  text-align: center;
  margin: 30px 0;
`;

const ButtonBox = styled.div`
  text-align: center;
  margin: 30px 0;
`;
