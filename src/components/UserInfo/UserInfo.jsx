import axios from 'axios';
import React from 'react';
import {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

// const currentUserIDState = atom({
//   key: 'CurrentUserID',
//   default: 1,
// });

// const tableOfUsers = [
//   { name: '지홍' },
//   { name: '동훈' },
//   { name: '혜린' },
//   { name: '다희' },
//   { name: '남주' },
//   { name: '희택' },
// ];

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

// const currentUserNameQuery = selector({
//   key: 'CurrentUserName',
//   get: async ({ get }) => {
//     const response = await axios.get(
//       `/api/user-name?id=${get(currentUserIDState)}`
//     );
//     return response.data.name;
//   },
// });

const currentUserNameQuery = selectorFamily({
  key: 'CurrentUserName',
  get: id => async () => {
    const response = await axios.get(`/api/user-name?id=${id}`);
    return response.data.name;
  },
});

function CurrentUser() {
  const userName = useRecoilValue(currentUserNameQuery(1));
  // const userName2 = useRecoilValueLoadable(currentUserNameQuery(2));

  // if (userName2.state === 'loading') {
  //   return <div>loading...</div>;
  // }
  // if (userName2.state === 'hasError') {
  //   return <div>Someting wrong...</div>;
  // }

  return (
    <>
      {/* <div>{userName2.contents}</div> */}
      <div>{userName}</div>
    </>
  );
}

export default function CurrentUserInfo() {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<div>Loading...</div>}>
        <CurrentUser />
      </React.Suspense>
    </ErrorBoundary>
  );
}
