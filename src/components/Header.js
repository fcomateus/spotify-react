import React from "react";
import logo from "./imagens/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container container-sm|md|lg|xl ">
        <Link to="/">
          <img className="img-fluid" id="headerlogo" src={logo} alt="logo" />
        </Link>

        <ul className="navbar-nav">

          <li className="nav-item">
            <Link to="/" className="nav-link" style={{ textDecoration: "none"}}>
              Home
            </Link>
          </li>

          <li className="nav-item">

            <Link to="/faq" className="nav-link" style={{ textDecoration: "none"}}>
              FAQ
            </Link>

          </li>

          <li className="nav-item">
            <Link to="/cadastro" className="nav-link" style={{ textDecoration: "none"}}>
                Cadastro
            </Link>
          </li>

          <li>
            <Link to="/playlists" className="nav-link" style={{ textDecoration: "none"}}>
                Playlists
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
