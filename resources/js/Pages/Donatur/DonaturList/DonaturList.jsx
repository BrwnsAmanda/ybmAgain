import { router, usePage } from "@inertiajs/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import "./DonaturList.css";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const DonaturList = () => {
  const { donatur: initialDonatur = [] } = usePage().props;
  const [donatur, setDonatur] = useState(initialDonatur);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Yakin ingin menghapus?',
      text: "Data yang dihapus tidak bisa dikembalikan!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        router.delete(`/donatur-list/${id}`, {
          preserveScroll: true,
          onSuccess: () => {
            Swal.fire({
              title: 'Berhasil!',
              text: 'Data donatur berhasil dihapus.',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false,
              position: 'center'
            });

            // Update state setelah penghapusan
            setDonatur((prevDonatur) => prevDonatur.filter((item) => item.id !== id));
          },
          onError: (errors) => {
            console.error("Gagal menghapus:", errors);
            Swal.fire('Gagal!', 'Terjadi kesalahan saat menghapus data.', 'error');
          }
        });
      }
    });
  };

  const handleDownload = () => {
    Swal.fire({
      title: 'Unduh Data Donatur?',
      text: "File akan disimpan dalam format Excel (.xlsx)",
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ya, unduh',
      cancelButtonText: 'Batal',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        const dataToExport = donatur.map((item, index) => ({
          No: index + 1,
          NIK: item.nik,
          Nama: item.nama,
          Alamat: item.alamat,
          Kategori: item.kategori,
          Jabatan: item.jabatan,
          Telepon: item.no_telp,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data Donatur");

        const excelBuffer = XLSX.write(workbook, {
          bookType: "xlsx",
          type: "array",
        });

        const blob = new Blob([excelBuffer], {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        });

        saveAs(blob, `data_donatur_${new Date().toISOString().split("T")[0]}.xlsx`);
      }
    });
  };


  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  // Filter berdasarkan pencarian
  const filteredData = donatur.filter((item) =>
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
            <h2>Data Donatur</h2>
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
            <button className="btn btn-download" onClick={handleDownload}>Download</button>
            <button className="btn btn-add" onClick={() => router.get("/donatur-list/tambah")}>Tambah</button>
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
              <th>Jabatan</th>
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
                  <td>{item.jabatan}</td>
                  <td>{item.no_telp}</td>
                  <td className="action-buttons">
                    <button className="btn-action edit" onClick={() => router.get(`donatur-list/edit/${item.id}`)}>
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
                <td colSpan="7" style={{ textAlign: "center" }}>Tidak ada data donatur</td>
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

export default DonaturList;
