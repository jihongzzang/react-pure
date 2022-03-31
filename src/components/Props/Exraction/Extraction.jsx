import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

function Comment({ date, text, author }) {
  return (
    <div className="Comment">
      <UserInfo user={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

function UserInfo({ user }) {
  return (
    <div className="UserInfo">
      <Avartar user={user} />
    </div>
  );
}

function Avartar({ user }) {
  return (
    <>
      <img className="Avatar" src={user.avatarUrl} alt={user.name} />
      <div className="UserInfo-name">{user.name}</div>
    </>
  );
}

export default function Extraction() {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
}
