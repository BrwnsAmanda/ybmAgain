import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSosialOpen, setIsSosialOpen] = useState(false); // untuk submenu Sosial Kemanusiaan

  return (
    <div className="sidebar">
      <h3>YBM BRILiaN RO Makassar</h3>
      <div className="position">Supervisor</div>
      <nav className="nav-2">
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>

          <li className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Jenis Program <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
          </li>

          {isDropdownOpen && (
            <ul className="submenu">
              <li><Link href="/program/pendidikan">Pendidikan</Link></li>
              <li><Link href="/program/ekonomi">Ekonomi</Link></li>
              <li><Link href="/program/dakwah">Dakwah</Link></li>

              <li onClick={() => setIsSosialOpen(!isSosialOpen)} style={{ cursor: "pointer" }}>
                Sosial Kemanusiaan <span className="arrow">{isSosialOpen ? "▲" : "▼"}</span>
              </li>

              {isSosialOpen && (
                <ul className="submenu nested">
                  <li><Link href="/program/sosial/penerima">Data Penerima</Link></li>
                  <li><Link href="/program/sosial/alamat">Alamat</Link></li>
                  <li><Link href="/program/sosial/penyaluran">Jenis Penyaluran</Link></li>
                </ul>
              )}

              <li><Link href="/program/kesehatan">Kesehatan</Link></li>
            </ul>
          )}

          <li className="active"><Link href="/data-penerima">Data Penerima</Link></li>
          <li><Link href="/data-donatur">Data Donatur</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
