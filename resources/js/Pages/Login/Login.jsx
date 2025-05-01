import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import axios from 'axios'; // Import axios
import { router } from "@inertiajs/react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        setErrorMessage('Email dan Password wajib diisi.');
        return;
    }

    try {
        // Get the CSRF token from the meta tag
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        // Make the login request with CSRF token
        const response = await axios.post('/login', {
            email,
            password,
        }, {
            headers: {
                'X-CSRF-TOKEN': csrfToken, // CSRF token in the header
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

        if (response.status === 200) {
            alert(response.data.message);
            router.visit(route('penerima.index'));
        }
    } catch (error) {
        if (error.response) {
            console.error("Error Response:", error.response);
            setErrorMessage(error.response.data.error || "Login gagal. Silakan coba lagi.");
        } else {
            console.error("Network Error:", error);
            setErrorMessage("Terjadi kesalahan. Coba lagi.");
        }
    }
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
              <input
                type="text"
                id="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {errorMessage && <div className="error-message">{errorMessage}</div>}

              <button className="login-page-button" onClick={handleLogin}>
                LOGIN
              </button>

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
