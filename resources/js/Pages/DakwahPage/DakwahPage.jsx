import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./DakwahPage.css";

const Dakwahpage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="container-list-dakwah">
      <div className="sidebar-list-dakwah">
        <h3>YBM BRILiaN RO Makassar</h3>
        <div className="position-dakwah">Supervisor</div>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="dropdown-dakwah" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Jenis Program <span className="arrow-dakwah">{isDropdownOpen ? "▲" : "▼"}</span>
            </li>
            {isDropdownOpen && (
              <ul className="submenu-dakwah">
                <li><Link href="/program/pendidikan" className="nav-link">Pendidikan</Link></li>
                <li><Link href="/program/ekonomi" className="nav-link">Ekonomi</Link></li>
                <li><Link href="/program/dakwah" className="nav-link">Dakwah</Link></li>
                <li><Link href="/program/sosial" className="nav-link">Sosial Kemanusiaan</Link></li>
                <li><Link href="/program/kesehatan" className="nav-link">Kesehatan</Link></li>
              </ul>
            )}
            <li className="active-dakwah">
              <Link href="/penerima" className="nav-link">Data Penerima</Link>
            </li>
            <li>
              <Link href="/donatur" className="nav-link">Data Donatur</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-list-dakwah">
        <div className="header-list-dakwah">
          <div className="profile-container-dakwah">
            <AccountCircleOutlinedIcon className="profile-icon-dakwah" onClick={() => setIsProfileOpen(!isProfileOpen)} />
            {isProfileOpen && (
              <div className="profile-dropdown-dakwah">
                <p className="profile-name-dakwah">Meisa Maharti</p>
                <button className="btn logout-dakwah">Logout</button>
              </div>
            )}
          </div>
        </div>

        <div className="edit-search-container-dakwah">
          <h2>Ekonomi</h2>
        </div>
      </div>
    </div>
  );
};

export default Dakwahpage;
