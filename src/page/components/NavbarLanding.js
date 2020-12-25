import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Container,
  Row,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  Input,
} from "reactstrap";

const NavbarLanding = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [scrolling, setScrolling] = useState(false);
  const onScroll = () => {
    if (window.scrollY >= 72) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <>
      {/* <header className="fixed-top page-header">
        <nav className="navbar navbar-expand-lg scroll">
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
      </header> */}
      <body
        className={scrolling ? "position-relative scroll" : "position-relative"}
      >
        <header className="fixed-top page-header">
          <Navbar className="scroll" id="navbar" dark expand="lg">
            <NavbarBrand className="ml-3">
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                WargaLokal
              </NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="ml-lg-5" navbar>
                <NavItem>
                  <NavLink
                    to="/tentang"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Beranda
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/artikel"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Tentang Kami
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/pemesanan"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Program
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/galeri"
                    activeClassName="active"
                    className="nav-link p-2"
                  >
                    Kontak
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </body>
    </>
  );
};

export default NavbarLanding;
