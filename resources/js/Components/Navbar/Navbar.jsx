import React from "react";
import { Link } from "@inertiajs/react"; // Gunakan Link dari Inertia.js
import { router } from "@inertiajs/react"; // Import router untuk navigasi
import "./Navbar.css";

const Navbar = () => {
  const handleLoginClick = () => {
    router.visit("/login"); // Gantikan useNavigate dengan Inertia router
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/ybmlogo.jpg" alt="YBM BRILiaN RO Makassar Logo" />
        <h1>
          <span className="blue-bold">YBM</span>
          <span className="orange-bold"> BRILiaN </span>
          <span className="orange-bold"> RO Makassar </span>
        </h1>
      </div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
      </ul>
      <div className="login-button">
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
