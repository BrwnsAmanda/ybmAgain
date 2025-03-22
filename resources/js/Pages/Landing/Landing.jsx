import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar/Navbar'; // Sesuaikan path berdasarkan struktur project
import './Landing.css';

const Landing = () => {
  return (
    <>
      <Head title="Landing Page" />
      <div className="page-container">
        <Navbar />
        <div className="content">
          <div className="about-image">
            <img src="/background.jpg" alt="YBM BRILiaN" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
