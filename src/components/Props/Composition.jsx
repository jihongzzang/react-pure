import React from 'react';

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
export default function Composition() {
  return (
    <div>
      <Welcome name="다희" />
      <Welcome name="혜린" />
      <Welcome name="동훈" />
      <Welcome name="지홍" />
      <Welcome name="남주" />
      <Welcome name="희택" />
    </div>
  );
}
