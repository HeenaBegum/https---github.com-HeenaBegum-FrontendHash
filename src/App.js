import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';
import Datasection from './components/Datasection/Datasection';
import Insta from './components/Datasection/Insta';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datasection" element={<Datasection />} /> 
        <Route path="/insta" element={<Insta />} /> 
       
      </Routes>
    </Router>
  );
}

export default App;
