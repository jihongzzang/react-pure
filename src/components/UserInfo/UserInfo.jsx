import axios from 'axios';
import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';

const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

const tableOfUsers = [
  { name: '지홍' },
  { name: '동훈' },
  { name: '혜린' },
  { name: '다희' },
  { name: '남주' },
  { name: '희택' },
];

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await axios.get(
      `/api/user-name?id=${get(currentUserIDState)}`
    );
    return response.data.name;
  },
});

export default function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
