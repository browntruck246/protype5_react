import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
