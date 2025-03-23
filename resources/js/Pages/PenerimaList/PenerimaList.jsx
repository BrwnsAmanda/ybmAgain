import React, { useState } from "react";
import { router } from "@inertiajs/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DescriptionIcon from "@mui/icons-material/Description";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./PenerimaList.css";

const PenerimaList = ({ penerimaData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
            <button className="btn btn-add" onClick={() => router.visit("/tambah")}>
              Tambah
            </button>
          </div>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
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
                <td>{penerima.nama}</td>
                <td>{penerima.alamat}</td>
                <td>{penerima.kategori}</td>
                <td>{penerima.telepon}</td>
                <td className="action-buttons">
                  <button className="btn-action detail" onClick={() => router.visit(`/detail/${penerima.no}`)}>
                    <DescriptionIcon />
                  </button>
                  <button className="btn-action edit" onClick={() => router.visit("/EditPenerima")}> 
                    <EditIcon />
                  </button>
                  <button className="btn-action delete" onClick={() => router.visit(`/hapus/${penerima.no}`)}>
                    <DeleteIcon />
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
