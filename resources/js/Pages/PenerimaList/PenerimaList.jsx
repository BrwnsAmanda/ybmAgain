import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./PenerimaList.css";

const PenerimaList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const penerimaData = [
    { no: 1, nik: "3201010101010001", nama: "Ahmad Rafi", alamat: "Jl. Merdeka No. 10", kategori: "Pendidikan", telepon: "081234567890" },
    { no: 2, nik: "3201010101010002", nama: "Budi Santoso", alamat: "Jl. Mawar No. 5", kategori: "Ekonomi", telepon: "081298765432" },
    { no: 3, nik: "3201010101010003", nama: "Citra Lestari", alamat: "Jl. Melati No. 12", kategori: "Dakwah", telepon: "081312345678" },
    { no: 4, nik: "3201010101010004", nama: "Dewi Ayu", alamat: "Jl. Kenanga No. 8", kategori: "Sosial Kemanusiaan", telepon: "081356789012" },
    { no: 5, nik: "3201010101010005", nama: "Eko Saputra", alamat: "Jl. Cempaka No. 3", kategori: "Kesehatan", telepon: "081378901234" },
  ];

  return (
    <div className="container-list">
      <div className="sidebar-list">
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

        <div className="container-list">
          <div className="edit-search-container">
            <h2>Edit Data</h2>
            <input type="text" placeholder="Cari Data..." className="search-bar" />
          </div>

          <div className="button-group">
            <button className="btn btn-download">Download</button>
            <button className="btn btn-add" onClick={() => Inertia.visit("/tambah")}>Tambah</button>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Kategori</th>
              <th>Telepon</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {penerimaData.map((penerima) => (
              <tr key={penerima.no}>
                <td>{penerima.no}</td>
                <td>{penerima.nik}</td>
                <td>{penerima.nama}</td>
                <td>{penerima.alamat}</td>
                <td>{penerima.kategori}</td>
                <td>{penerima.telepon}</td>
                <td className="action-buttons">
                <button className="btn-action detail" onClick={() => router.visit(`/detail/${penerima.id}`)}>
  <DescriptionIcon />
</button>

<button className="btn-action edit" onClick={() => router.visit(`/EditPenerima/${penerima.id}`)}>
  <EditIcon />
</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button className="btn-page">Sebelumnya</button>
          <button className="btn-page active">1</button>
          <button className="btn-page">2</button>
          <button className="btn-page">3</button>
          <button className="btn-page">Selanjutnya</button>
        </div>
      </div>
    </div>
  );
};

export default PenerimaList;