import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Pendidikanpage.css";

const PendidikanPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="container-list-pendidikan">
      <div className="sidebar-list-pendidikan">
        <h3>YBM BRILiaN RO Makassar</h3>
        <div className="position-pendidikan">Supervisor</div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li className="dropdown-pendidikan" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Jenis Program <span className="arrow-pendidikan">{isDropdownOpen ? "▲" : "▼"}</span>
            </li>
            {isDropdownOpen && (
              <ul className="submenu-pendidikan">
                <li>Pendidikan</li>
                <li>Ekonomi</li>
                <li>Dakwah</li>
                <li>Sosial Kemanusiaan</li>
                <li>Kesehatan</li>
              </ul>
            )}
            <li className="active-pendidikan">Data Penerima</li>
            <li>Data Donatur</li>
          </ul>
        </nav>
      </div>

      <div className="content-list-pendidikan">
        <div className="header-list-pendidikan">
          <div className="profile-container-pendidikan">
            <AccountCircleOutlinedIcon className="profile-icon-pendidikan" onClick={() => setIsProfileOpen(!isProfileOpen)} />
            {isProfileOpen && (
              <div className="profile-dropdown-pendidikan">
                <p className="profile-name-pendidikan">Meisa Maharti</p>
                <button className="btn logout-pendidikan">Logout</button>
              </div>
            )}
          </div>
        </div>

        <div className="edit-search-container-pendidikan">
          <h2>EPendidikan</h2>
        </div>
      </div>
    </div>
  );
};

export default PendidikanPage;
