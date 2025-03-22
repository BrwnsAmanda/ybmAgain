import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src="/ybmlogo.jpg" alt="Logo" />
        <h1>
          <span className="blue-bold">YBM</span>
          <span className="orange-bold"> BRILiaN </span>
          <span className="orange-bold"> RO Makassar </span>
        </h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="login-button">
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
