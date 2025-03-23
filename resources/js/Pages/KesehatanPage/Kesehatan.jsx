import React, { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Kesehatan.css";

const Ekonomi = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="container-list-kesehatan">
      <div className="sidebar-list-kesehatan">
        <h3>YBM BRILiaN RO Makassar</h3>
        <div className="position-kesehatan">Supervisor</div>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="dropdown-kesehatan" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              Jenis Program <span className="arrow-kesehatan">{isDropdownOpen ? "▲" : "▼"}</span>
            </li>
            {isDropdownOpen && (
              <ul className="submenu-kesehatan">
                <li><Link href="/program/pendidikan" className="nav-link">Pendidikan</Link></li>
                <li><Link href="/program/ekonomi" className="nav-link">Ekonomi</Link></li>
                <li><Link href="/program/dakwah" className="nav-link">Dakwah</Link></li>
                <li><Link href="/program/sosial" className="nav-link">Sosial Kemanusiaan</Link></li>
                <li><Link href="/program/kesehatan" className="nav-link">Kesehatan</Link></li>
              </ul>
            )}
            <li className="active-kesehatan">
              <Link href="/penerima" className="nav-link">Data Penerima</Link>
            </li>
            <li>
              <Link href="/donatur" className="nav-link">Data Donatur</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-list-kesehatan">
        <div className="header-list-kesehatan">
          <div className="profile-container-kesehatan">
            <AccountCircleOutlinedIcon className="profile-icon-kesehatan" onClick={() => setIsProfileOpen(!isProfileOpen)} />
            {isProfileOpen && (
              <div className="profile-dropdown-kesehatan">
                <p className="profile-name-kesehatan">Meisa Maharti</p>
                <button className="btn logout-kesehatan">Logout</button>
              </div>
            )}
          </div>
        </div>

        <div className="edit-search-container-kesehatan">
          <h2>Ekonomi</h2>
        </div>
      </div>
    </div>
  );
};

export default Ekonomi;
