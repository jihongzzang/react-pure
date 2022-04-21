import React, { useState } from 'react';

export default function ControlledComponent() {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState(
    'Please write an essay about your favorite DOM element'
  );
  const [fruit, setFruit] = useState('coconut');

  const handleChange = e => {
    const { name, value, type } = e.target;
    if (type === 'text') {
      setName(value);
    }
    if (name === 'essay') {
      setEssay(value);
    }
    if (name === 'fruit') {
      setFruit(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`name: ${name} essay: ${essay} fruit: ${fruit}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select name="fruit" value={fruit} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
