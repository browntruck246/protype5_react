import React from 'react';
import './App.css';
import Table from './Table';

const data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Sam Johnson', age: 23 },
];

function App() {
  return (
    <div className="App">
      <h1>My Table</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
