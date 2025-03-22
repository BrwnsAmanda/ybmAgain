import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <Link to="/" className="back-link"> &lt; Kembali </Link>

        <div className="login-content">
          <div className="login-image">
            <img src="/login_img.png" alt="Illustration" />
          </div>
          <div className="login-form">
            <span className="blue-bold">YBM</span>
            <span className="orange-bold">YBM</span>
            <h2 className="login-title">Selamat Datang!</h2>
            <span></span>
            <p className="login-subtitle">
              Silahkan Masukkan Username/Email dan Password Anda!
            </p>

            <label htmlFor="email">USERNAME/EMAIL</label>
            <input type="text" id="email" placeholder="Masukkan email" />

            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" placeholder="Masukkan password" />

            <button className="login-page-button">LOGIN</button>

            <div className="forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
