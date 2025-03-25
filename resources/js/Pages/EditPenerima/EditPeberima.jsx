import React, { useState, useEffect } from "react";
import { router, useForm } from "@inertiajs/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./EditPenerima.css";

const EditPenerima = ({ penerima }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { data, setData, put } = useForm({
    nama: penerima?.nama || "",
    telepon: penerima?.telepon || "",
    alamat: penerima?.alamat || "",
    email: penerima?.email || "",
    nik: penerima?.nik || "",
    kategori: penerima?.kategori || "Fakir",
    pekerjaan: penerima?.pekerjaan || "",
    penghasilan: penerima?.penghasilan || "",
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("penerima.update", penerima.id), {
      onSuccess: () => {
        alert("Data berhasil diperbarui!");
        router.visit(route("penerima.index"));
      },
      onError: (errors) => {
        console.error(errors);
      },
    });
  };

  return (
    <div className="container-list">
      <div className="sidebar">
        <h3>YBM BRILiaN RO Makassar</h3>
        <div className="position">Supervisor</div>
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

        <div className="content-edit">
          <div className="edit-form-container">
            <h2>Edit Data</h2>
            <form className="edit-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input type="text" name="nama" value={data.nama} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Telepon</label>
                <input type="text" name="telepon" value={data.telepon} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Alamat</label>
                <input type="text" name="alamat" value={data.alamat} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>NIK</label>
                <input type="text" name="nik" value={data.nik} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Kategori</label>
                <select name="kategori" value={data.kategori} onChange={handleChange}>
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
                <label>Pekerjaan (Opsional)</label>
                <input type="text" name="pekerjaan" value={data.pekerjaan} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Penghasilan (Opsional)</label>
                <input type="text" name="penghasilan" value={data.penghasilan} onChange={handleChange} />
              </div>

              <button type="submit">Simpan</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EditPenerima;
