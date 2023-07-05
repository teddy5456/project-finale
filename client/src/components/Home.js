import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className='head'>Welcome to Our Restaurant</h2>
      <h4 className='p'>Discover the finest cuisine and enjoy a memorable dining experience.</h4>
      <Link to="/menu" className="menu-button">Go to Menu</Link> {/* Use Link component to navigate to the menu */}
    </div>
  );
};

export default Home;
