import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Home from './components/Home'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
