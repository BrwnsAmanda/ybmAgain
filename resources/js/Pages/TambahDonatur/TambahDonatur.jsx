import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia';
import "./TambahDonatur.css"; // opsional, buat styling
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const TambahPenerima = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    alamat: "",
    telepon: "",
    email: "",
    kategori: "Fakir",
    pekerjaan: "",
    penghasilan: "",
    tanggungan: "",
    bantuan: "",
    keterangan: "",
    tanggal_input: new Date().toISOString().split("T")[0],
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ganti URL-nya nanti ke backend asli kamu
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Data penerima berhasil ditambahkan!");
      // Redirect using Inertia.js
      Inertia.visit("/penerima"); // redirect ke list penerima
    } catch (error) {
      console.error("Gagal menambahkan data:", error);
    }
  };

  return (
    <div className="container-list">
      <div className="sidebar">
        <h3>YBM BRILiaN RO Makassar</h3>
        <div className="position">Supervisor</div>
        <nav className="nav-2">
          <ul>
            <li>Dashboard</li>
            <li className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Jenis Program <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
            </li>
            {isDropdownOpen && (
              <ul className="submenu">
                <li>Pendidikan</li>
                <li>Ekonomi</li>
                <li>Dakwah</li>
                <li>Sosial Kemanusiaan</li>
                <li>Kesehatan</li>
              </ul>
            )}
            <li className="active">Data Penerima</li>
            <li>Data Donatur</li>
          </ul>
        </nav>
      </div>

      <div className="content-list">
        <div className="header-list">
          <div className="profile-container">
            <AccountCircleOutlinedIcon className="profile-icon" onClick={() => setIsProfileOpen(!isProfileOpen)} />
            {isProfileOpen && (
              <div className="profile-dropdown">
                <p className="profile-name">Meisa Maharti</p>
                <button className="btn logout">Logout</button>
              </div>
            )}
          </div>
        </div>

        <div className="form-container">
          <h2>Tambah Penerima Zakat</h2>
          <form onSubmit={handleSubmit} className="penerima-form">
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>NIK</label>
              <input type="text" name="nik" value={formData.nik} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Alamat</label>
              <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>No Telepon</label>
              <input type="text" name="telepon" value={formData.telepon} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Kategori Penerima</label>
              <select name="kategori" value={formData.kategori} onChange={handleChange}>
                <option value="Fakir">Fakir</option>
                <option value="Miskin">Miskin</option>
                <option value="Amil">Amil</option>
                <option value="Mualaf">Mualaf</option>
                <option value="Riqab">Riqab</option>
                <option value="Gharim">Gharim</option>
                <option value="Fisabilillah">Fisabilillah</option>
                <option value="Ibnu Sabil">Ibnu Sabil</option>
              </select>
            </div>

            <div className="form-group">
              <label>Pekerjaan</label>
              <input type="text" name="pekerjaan" value={formData.pekerjaan} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Jenis Bantuan yang Dibutuhkan</label>
              <input type="text" name="bantuan" value={formData.bantuan} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Tanggal Input</label>
              <input type="date" name="tanggal_input" value={formData.tanggal_input} onChange={handleChange} disabled />
            </div>

            <button type="submit" className="btn-submit">Simpan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TambahPenerima;
