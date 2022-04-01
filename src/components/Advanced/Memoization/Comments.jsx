import React, { useCallback } from 'react';
import CommentItem from './CommentItem';
import './Comments.css';

export default function Comments({ commentLists }) {
  const handleClick = useCallback(() => {
    console.log('눌림');
  }, []);

  return (
    <div className="Comments">
      {commentLists.map(comment => (
        <CommentItem
          key={comment.id}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
