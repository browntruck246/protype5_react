import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;

