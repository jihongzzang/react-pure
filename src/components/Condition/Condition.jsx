import React from 'react';

function UserGreeting({ name, count }) {
  return (
    <div>
      <p>
        {name && `${name}님 환영합니다.`}
        {Boolean(count) && `${count}번 방문하셨습니다.`}
      </p>
    </div>
  );
}

UserGreeting.defaultProps = {
  name: 'ooo',
};

function GuestGreeting() {
  return (
    <div>
      <p>로그인해주세요</p>
    </div>
  );
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting name="주지홍" count={1} />;
  }
  return <GuestGreeting />;
}
export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
