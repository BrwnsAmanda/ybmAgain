import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Head } from '@inertiajs/react'; 
import './Landing.css';

const Landing = () => {
  return (
    <>
      <Head title="Landing - YBM MAKASSAR" />
      <div className="page-container">
        <Navbar />
        <div className="content">
          <div className="about-image">
            <img src="/bggg.png" alt="YBM BRILiaN" />
            <div className="dark-overlay"></div>
          </div>
          <div className="overlay">
            <h1 className="hero-title fade-in">Welcome to YBM MAKASSAR</h1>
            <p className="hero-subtitle fade-in" style={{ animationDelay: '0.5s' }}>
              Bersama Membangun Negeri
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
