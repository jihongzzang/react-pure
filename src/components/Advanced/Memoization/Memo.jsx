import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import './Memo.css';

const commentList = [
  { id: 1, title: 'comment1', content: 'message1', likes: 1 },
  { id: 2, title: 'comment2', content: 'message2', likes: 1 },
  { id: 3, title: 'comment3', content: 'message3', likes: 1 },
];

export default function Memo() {
  const [comments, setComments] = useState(commentList);

  useEffect(() => {
    const interval = setInterval(() => {
      setComments(prevComments => [
        ...prevComments,
        {
          id: `${prevComments.length + 1}`,
          title: `comment${prevComments.length + 1}`,
          content: `message${prevComments.length + 1}`,
          likes: 1,
        },
      ]);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Memo">
      <Comments commentLists={comments} />
    </div>
  );
}
