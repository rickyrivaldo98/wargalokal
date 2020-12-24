import React, { useState } from "react";

const NavbarLanding = () => {
  return (
    <>
      <header className="fixed-top page-header">
        <nav className="navbar navbar-expand-lg  scroll">
          <a className="navbar-brand" href="#">
            Warga Lokal
          </a>
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
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Beranda <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tentang Kami
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Program
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarLanding;
