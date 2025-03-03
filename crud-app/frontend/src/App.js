import './App.css';

import React from 'react';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

function App() {
  return (
    <div>
    <h1>React and OracleDB Integration</h1>
    <PersonForm />
    <PersonList />
  </div>
  );
}

export default App;
