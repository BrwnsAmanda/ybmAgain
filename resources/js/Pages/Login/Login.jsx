import React from "react";
import { Link, Head } from "@inertiajs/react";
import { router } from "@inertiajs/react"; // Import router untuk navigasi
import "./Login.css";

const Login = () => {
  const handleLogin = () => {
    // Setelah login, navigasikan ke halaman PenerimaList
    router.visit("/penerima-list"); // Ganti dengan URL tujuan yang sesuai
  };

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

              <button className="login-page-button" onClick={handleLogin}>LOGIN</button>

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
