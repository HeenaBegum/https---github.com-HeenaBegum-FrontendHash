import React from 'react';
import NavBar from './components/HomePage/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';
import Datasection from './components/Datasection/Datasection';
import Insta from './components/Datasection/Insta';
import CarouselPage from './components/Carousel/CarouselPage';
const App = () => {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datasection" element={<Datasection />} /> 
        <Route path="/insta" element={<Insta />} /> 
        <Route path="/car" element={<CarouselPage />} /> 
      </Routes>
    </div>
  </Router>

  );
}

export default App;
