import React, { useState } from "react";
import { router } from '@inertiajs/react';
import "./TambahDonatur.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Swal from "sweetalert2";

const TambahDonatur = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    alamat: "",
    no_telp: "",
    jabatan:"",
    kategori: "Pendidikan",
    tanggal_input: new Date().toISOString().split("T")[0],
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.post("/donatur-list/tambah", formData, {
      onSuccess: () => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Data donatur berhasil ditambahkan.',
          icon: 'success',
          confirmButtonText: 'OK',
          timer: 4000,
          timerProgressBar: true,
          showConfirmButton: false,
          position: 'center'
        }).then(() => {
          router.visit("/donatur-list");
        });
      },
      onError: (errors) => {
        console.error("Gagal menyimpan:", errors);
      }
    });
  };
  

  return (
    <div className="container-list">
      <aside className="sidebar-list">
        <h3>YBM BRILiaN RO Makassar</h3>
        <p className="position">Supervisor</p>
        <nav>
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
      </aside>


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
        <button
            type="button"
            className="btn-kembali"
            onClick={() => router.visit('/donatur-list')}
            >
            ← Kembali
        </button>

          <h1>Tambah Donatur</h1>
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
              <input type="text" name="no_telp" value={formData.telepon} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Jabatan</label>
              <input type="text" name="jabatan" value={formData.jabatan} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Kategori</label>
              <select name="kategori" value={formData.kategori} onChange={handleChange}>
                <option value="Fakir">Pendidikan</option>
                <option value="Miskin">Ekonomi</option>
                <option value="Amil">Sosial Kemanusiaan</option>
                <option value="Mualaf">Dakwah</option>
                <option value="Riqab">Kesehatan</option>
              </select>
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

export default TambahDonatur;
