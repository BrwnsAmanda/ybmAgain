import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import "./about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>
            <span className="blue-bold">Yayasan Baitul Maal</span>
            <span className="orange-bold"> BRILiaN </span>
          </h1>
          <p>
            Baitul Maal BRILiaN (YBM BRILiaN) merupakan LAZNAS berdasarkan Keputusan Menteri Agama Republik Indonesia No. 458 Tahun 2024,
            yang mengelola Zakat, Infak, Sedekah, dan Dana Sosial Keagamaan Lainnya melalui 5 pilar program yaitu pendidikan, ekonomi, kesehatan, dakwah,
            dan sosial kemanusiaan.
          </p>
        </div>
        <div className="about-page-image">
          <img src="/image.jpg" alt="YBM BRILiaN" />
        </div>
      </div>

      {/* Visi & Misi Section */}
      <div className="vision-mission-container">
        <div className="bunder-image">
          <img src="/bunder.png" alt="Mission Decoration" />
        </div>
        <div className="vision-mission-text">
          <div className="vision">
            <h2 className="orange-bold">Visi</h2>
            <p>
              Terwujudnya masyarakat berdaya melalui pengelolaan filantropi Islam yang adaptif, inspiratif, dan berkarakter.
            </p>
          </div>
          <div className="mission">
            <h2 className="blue-bold">Misi</h2>
            <ul>
              <li>Transformasi organisasi dengan SDM dan sistem unggul, agile, inovatif, serta berbasis teknologi.</li>
              <li>Layanan prima dalam intermediasi muzaki dan mustahik melalui filantropi Islam di BRI dan masyarakat.</li>
              <li>Pemberdayaan berdampak untuk kemandirian dan partisipasi masyarakat.</li>
              <li>Meningkatkan kesejahteraan dan mencerdaskan bangsa melalui peradaban zakat.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src="/ybmlogo.jpg" alt="YBM BRILiaN Logo" className="footer-logo" />
            <div className="footer-text">
              <h2>
                <span className="blue-bold">YBM</span>
                <span className="orange-bold"> BRILiaN </span>
                <span className="orange-bold"> RO Makassar </span>
              </h2>
              <p>
                Yayasan Baitul Maal BRILiaN (YBM BRILiaN) merupakan LAZNAS berdasarkan Keputusan Menteri Agama Republik Indonesia No. 458 Tahun 2024,
                yang mengelola Zakat, Infak, Sedekah, dan Dana Sosial Keagamaan Lainnya melalui 5 pilar program yaitu pendidikan, ekonomi, kesehatan, dakwah,
                dan sosial kemanusiaan.
              </p>
            </div>
          </div>

          {/* Footer Right */}
          <div className="footer-right">
            <h3>Contact Us</h3>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="customercare@ybmbrilian.id">
              customercare@ybmbrilian.id
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagram} />{" "}
              <a href="https://www.instagram.com/ybmbrilian_regionalmakassar?igsh=MTU4cjM5em1uNGN0dQ==" target="_blank" rel="noopener noreferrer">
                ybmbrilianmakassar
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faFacebook} />{" "}
              <a href="https://www.facebook.com/ybmbri.makassar.9/" target="_blank" rel="noopener noreferrer">
                Ybm Brilian Makassar
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faBuilding} /> Jl. Slamet Riyadi, No. 5 Kantor BRI Lt 2, Kota Makassar
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <h5>Copyright © {new Date().getFullYear()} YBM BRILiaN RO Makassar. All Rights Reserved</h5>
        </div>
      </footer>
    </>
  );
};

export default About;
