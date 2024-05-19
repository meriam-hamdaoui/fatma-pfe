import React from "react";
import "./navbar.css";
import trendy from "../../assets/img/trendy-logo.jpg";
import { Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  return (
    <section className="navbar d-flex flex-row justify-content-between">
      <div className="nav-brand d-flex flex-row align-items-baseline">
        <div className="nav-logo">
          <img src={trendy} alt="trendy-logo" width={50} height={50} />
        </div>
        <div className="nav-trendy p-2">
          <h4 className="">Trendy Agency</h4>
        </div>
      </div>
      {/* <div className="nav-items"> */}
      <Nav className="nav-items d-flex flex-row">
        <Link smooth to="#home" className="nav-link">
          Acceuil
        </Link>
        <Link smooth to="#about" className="nav-link">
          Qui Somme-Nous?
        </Link>
        <Link smooth to="#services" className="nav-link">
          Nos Services
        </Link>
        <Link smooth to="#whyUs" className="nav-link">
          Pourquoi Nous?
        </Link>
        <Link smooth to="#packs" className="nav-link">
          Nos Packs
        </Link>
        <Link smooth to="#footer" className="nav-link">
          Contactez-nous
        </Link>
      </Nav>
      {/* </div> */}
    </section>
  );
};

export default NavBar;
