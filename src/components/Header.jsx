import React from "react";
import photo1 from "../Images/photo1.png";
import { FaMailBulk, FaPhoneAlt, FaMapMarker, FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fw-bolder fs-5 mx-auto">
              <li className="nav-item">
                <a className="nav-link text-dark" aria-current="page" href="/">
                  Acceuil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Présentation
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Compétences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Expériences
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="row pt-5">
        <div className="col-md-6 col-sm-8 col-12 mt-5 pt-5">
          <h2 className="text-dark pt-5 fs-1">
            Hello ! je suis HOUSSEYNOU KENDE Dévoleppeur backend senior à
            Volkeno
          </h2>
          <div className="d-flex justify-content-between">
            <p>
              <FaPhoneAlt />
              76-605-8414
            </p>
            <p>
              <FaMailBulk />
              hkend@gmail.com
            </p>
            <p>
              <FaMapMarker />
              Liberté 6 Dakar
            </p>
            <p>
              <FaHome />
              Volkeno
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-4 col-12">
          <img src={photo1} alt="Img 1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
