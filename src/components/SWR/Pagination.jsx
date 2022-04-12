import axios from 'axios';
import React from 'react';
import useSWRInfinite from 'swr/infinite';

const getKey = (pageIndex, previousPageData) => {
  console.log(pageIndex);
  if (previousPageData && !previousPageData.length) return null;
  return `/api/users?page=${pageIndex}&limit=5`;
};

const fetcher = url => axios.get(url).then(res => res.data);

export default function Pagination() {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);
  if (!data) return 'loading';

  let totalUsers = 0;
  for (let i = 0; i < data.length; i++) {
    totalUsers += data[i].length;
  }

  return (
    <div>
      <p>{totalUsers} users listed</p>
      {data.map((users, index) => {
        // `data`는 각 페이지의 API 응답 배열입니다.
        return users.map(user => <div key={user.id}>{user.name}</div>);
      })}
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </div>
  );
}
