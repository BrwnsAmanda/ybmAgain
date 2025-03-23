import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./SosialKemanusiaan.css";

const Ekonomi = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="container-list-sosial">
      <div className="sidebar-list-sosial">
        <h3>YBM BRILiaN RO Makassar</h3>
        <div className="position-sosial">Supervisor</div>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="dropdown-sosial" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Jenis Program <span className="arrow-sosial">{isDropdownOpen ? "▲" : "▼"}</span>
            </li>
            {isDropdownOpen && (
              <ul className="submenu-sosial">
                <li><Link href="/program/pendidikan" className="nav-link">Pendidikan</Link></li>
                <li><Link href="/program/ekonomi" className="nav-link">Ekonomi</Link></li>
                <li><Link href="/program/dakwah" className="nav-link">Dakwah</Link></li>
                <li><Link href="/program/sosial" className="nav-link">Sosial Kemanusiaan</Link></li>
                <li><Link href="/program/kesehatan" className="nav-link">Kesehatan</Link></li>
              </ul>
            )}
            <li className="active-sosial">
              <Link href="/penerima" className="nav-link">Data Penerima</Link>
            </li>
            <li>
              <Link href="/donatur" className="nav-link">Data Donatur</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-list-sosial">
        <div className="header-list-sosial">
          <div className="profile-container-sosial">
            <AccountCircleOutlinedIcon className="profile-icon-sosial" onClick={() => setIsProfileOpen(!isProfileOpen)} />
            {isProfileOpen && (
              <div className="profile-dropdown-sosial">
                <p className="profile-name-sosial">Meisa Maharti</p>
                <button className="btn logout-sosial">Logout</button>
              </div>
            )}
          </div>
        </div>

        <div className="edit-search-container-sosial">
          <h2>Ekonomi</h2>
        </div>
      </div>
    </div>
  );
};

export default Ekonomi;
