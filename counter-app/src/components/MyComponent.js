import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(`Count is now: ${count}`);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>{name ? `Hello, ${name}` : 'Hello, Guest'}</h1>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
