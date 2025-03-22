import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './containers/pages/About/about';
import Landing from './containers/pages/Landing/landing';
import Login from './containers/pages/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}

export default App;
