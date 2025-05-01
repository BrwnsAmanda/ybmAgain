import { router, usePage } from "@inertiajs/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import "./PenerimaList.css";

const PenerimaList = () => {
  const { penerima: initialPenerima = [] } = usePage().props;
  const [penerima, setPenerima] = useState(initialPenerima);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      router.delete(`/penerima-list/${id}`, {
        preserveScroll: true,
        onSuccess: () => {
          setPenerima((prevPenerima) => prevPenerima.filter((item) => item.id !== id));
        },
        onError: (errors) => console.log(errors),
      });
    }
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filter berdasarkan pencarian
  const filteredData = penerima.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.nik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.alamat.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.no_telp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
            <li onClick={() => router.get('/penerima-list')}>Data Penerima</li>
            <li onClick={() => router.get('/donatur-list')}>Data Donatur</li>
          </ul>
        </nav>
      </aside>

      <main className="content-list">
        <header className="header-list">
          <div className="profile-container">
            <AccountCircleOutlinedIcon className="profile-icon" onClick={() => setIsProfileOpen(!isProfileOpen)} />
            {isProfileOpen && (
              <div className="profile-dropdown">
                <p className="profile-name">Meisa Maharti</p>
                <button className="btn logout">Logout</button>
              </div>
            )}
          </div>
        </header>

        <section className="container-list">
          <div className="edit-search-container">
            <h2>Data Penerima</h2>
            <input
              type="text"
              placeholder="Cari Data..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="button-group">
            <button className="btn btn-download">Download</button>
            <button className="btn btn-add" onClick={() => router.get("/penerima-list/tambah")}>Tambah</button>
          </div>
        </section>

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
            {currentData.length > 0 ? (
              currentData.map((item, index) => (
                <tr key={item.id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{item.nik}</td>
                  <td>{item.nama}</td>
                  <td>{item.alamat}</td>
                  <td>{item.kategori}</td>
                  <td>{item.no_telp}</td>
                  <td className="action-buttons">
                    <button className="btn-action edit" onClick={() => router.get(`penerima-list/edit/${item.id}`)}>
                      <EditIcon />
                    </button>
                    <button className="btn-action delete" onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>Tidak ada data penerima</td>
              </tr>
            )}
          </tbody>
        </table>

        <nav className="pagination">
          <button className="btn-page" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Sebelumnya</button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              className={`btn-page ${currentPage === page + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button className="btn-page" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Selanjutnya</button>
        </nav>
      </main>
    </div>
  );
};

export default PenerimaList;
