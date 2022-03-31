import React, { useRef } from 'react';

export default function UnControlledComponent() {
  const fileInput = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(`Selected file - ${fileInput.current.files[0].name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
