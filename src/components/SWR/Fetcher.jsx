import axios from 'axios';
import React from 'react';
import useSWR, { SWRConfig } from 'swr';

export default function Fetcher() {
  return (
    <SWRConfig
      value={{ fetcher: (...args) => axios.get(...args).then(res => res.data) }}
    >
      <Page />
    </SWRConfig>
  );
}

const Page = () => {
  const { data, error } = useSWR('/api/user/123', {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      const A = JSON.stringify(error);
      const parseA = JSON.parse(A);

      console.log(error.message);
      if (error.status === 404) {
        alert(404);
        return;
      }

      if (retryCount >= 3) return;

      setTimeout(() => revalidate({ retryCount }), 2000);
    },
  });

  if (error) {
    return <div>error...</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  }

  return <div>{data.name}</div>;
};
