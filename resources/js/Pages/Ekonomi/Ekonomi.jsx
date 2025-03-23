import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Ekonomi.css";

const Ekonomi = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="container-list-eko">
      <div className="sidebar-list-eko">
        <h3>YBM BRILiaN RO Makassar</h3>
        <div className="position-eko">Supervisor</div>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="dropdown-eko" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Jenis Program <span className="arrow-eko">{isDropdownOpen ? "▲" : "▼"}</span>
            </li>
            {isDropdownOpen && (
              <ul className="submenu-eko">
                <li><Link href="/program/pendidikan" className="nav-link">Pendidikan</Link></li>
                <li><Link href="/program/ekonomi" className="nav-link">Ekonomi</Link></li>
                <li><Link href="/program/dakwah" className="nav-link">Dakwah</Link></li>
                <li><Link href="/program/sosial" className="nav-link">Sosial Kemanusiaan</Link></li>
                <li><Link href="/program/kesehatan" className="nav-link">Kesehatan</Link></li>
              </ul>
            )}
            <li className="active-eko">
              <Link href="/penerima" className="nav-link">Data Penerima</Link>
            </li>
            <li>
              <Link href="/donatur" className="nav-link">Data Donatur</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-list-eko">
        <div className="header-list-eko">
          <div className="profile-container-eko">
            <AccountCircleOutlinedIcon className="profile-icon-eko" onClick={() => setIsProfileOpen(!isProfileOpen)} />
            {isProfileOpen && (
              <div className="profile-dropdown-eko">
                <p className="profile-name-eko">Meisa Maharti</p>
                <button className="btn logout-eko">Logout</button>
              </div>
            )}
          </div>
        </div>

        <div className="edit-search-container-eko">
          <h2>Ekonomi</h2>
        </div>
      </div>
    </div>
  );
};

export default Ekonomi;
