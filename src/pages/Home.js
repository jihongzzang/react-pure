import React from 'react';
import myStyled from '../components/myStyled';
import myStyledSecond from '../components/myStyledSecond';
import myStyledThird from '../components/myStyledThird';

const Button = myStyled('button')`
  width: 200px;
  height: 100px;
  color: white;
  background-color: teal;
  border-radius: 30px;
  border: none;
  margin: 10px;
  font-size: 2rem;
`;

const ButtonSecond = myStyledSecond.button`
  width: 200px;
  height: 100px;
  color: black;
  background-color: tomato;
  border-radius: 50px;
  border: none; 
  margin: 10px;
  font-size: 2rem;
`;

const ButtonThird = myStyledThird.button`
  width: 100px;
  height: 50px;
  color: ${props => (props.color ? props.color : 'red')};
  background-color: yellow;
  border-radius: 50px;
  border: none; 
  margin: 10px;
  font-size: 12px;
`;

const Home = () => {
  return (
    <>
      <Button>나만의 버튼</Button>
      <ButtonSecond>나만의 버튼 2</ButtonSecond>

      <div>
        <ButtonThird>나만의 버튼 3</ButtonThird>
        <ButtonThird color="blue">나만의 버튼 3</ButtonThird>
      </div>
    </>
  );
};

export default Home;
