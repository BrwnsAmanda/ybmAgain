import React from "react";
import { Link, Head } from "@inertiajs/react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <Head title="Login" />

      <div className="login-container">
        <div className="login-card">
          <Link href="/" className="back-link"> &lt; Kembali </Link>

          <div className="login-content">
            <div className="login-image">
              <img src="/login_img.png" alt="Illustration" />
            </div>
            <div className="login-form">
              <h2 className="login-title">Selamat Datang!</h2>
              <p className="login-subtitle">
                Silahkan Masukkan Email dan Password Anda!
              </p>

              <label htmlFor="email">EMAIL</label>
              <input type="text" id="email" placeholder="Masukkan email" />

              <label htmlFor="password">PASSWORD</label>
              <input type="password" id="password" placeholder="Masukkan password" />

              <button className="login-page-button">LOGIN</button>

              <div className="forgot-password">
                <Link href="/forgot-password">Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
