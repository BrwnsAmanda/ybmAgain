import React from "react";
import { Link, router } from "@inertiajs/react"; // Gunakan Link dan router dari Inertia.js
import "./Navbar2.css";

const Navbar2 = () => {
  const handleLogout = () => {
    router.post("/logout"); // Kirim permintaan logout ke backend menggunakan Inertia
  };

  return (
    <nav className="Navbar2">
      <div className="Navbar2-container">
        <div className="logo">
          <img src="/ybmlogo.jpg" alt="YBM BRILian RO Makassar" />
          <span>YBM BRILiaN</span>
        </div>
        <div className="buttons">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <Link href="/login" className="login-button">Login</Link>
        </div>
      </div> 
    </nav>
  );
};

export default Navbar2;
