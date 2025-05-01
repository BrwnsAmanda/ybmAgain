import React, { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./EditPenerima.css";

const EditPenerima = ({ penerima }) => {
  const [formData, setFormData] = useState({
    nama: penerima?.nama || "",
    telepon: penerima?.no_telp || "",
    alamat: penerima?.alamat || "",
    nik: penerima?.nik || "",
    kategori: penerima?.kategori || "Fakir",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    router.put(`/penerima-list/edit/${penerima.id}`, formData, {
      onSuccess: () => {
        alert("Data penerima berhasil diperbarui!");
        router.visit("/penerima-list"); // Redirect ke halaman daftar
      },
      onError: (errors) => {
        console.error("Gagal memperbarui:", errors);
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

        <div className="content-edit">
          <div className="edit-form-container">
            <button
              type="button"
              className="btn-kembali"
              onClick={() => router.visit('/penerima-list')}
            >
              ← Kembali
            </button>

            <h2>Edit Data</h2>
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>No Telepon</label>
                <input
                  type="text"
                  name="no_telp"
                  value={formData.telepon}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Alamat</label>
                <input
                  type="text"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>NIK</label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Kategori</label>
                <select
                  name="kategori"
                  value={formData.kategori}
                  onChange={handleChange}
                >
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

              <button type="submit" className="btn-submit">Simpan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPenerima;
