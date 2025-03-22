import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import './Landing.css'; 

const Landing = () => {
  return (
    <div className="page-container">
      <Navbar />
      <div className="content">
        <div className="about-image">
          <img src="/background.jpg" alt="YBM BRILiaN" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
