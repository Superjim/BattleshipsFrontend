import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const NavBar: React.FC = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const { name } = useAuth();

  const handleToggle = () => {
    setNavExpanded(!navExpanded);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${navExpanded ? "show" : ""}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="https://jim-battleships.netlify.app/">
          Battleships
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={navExpanded}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${navExpanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link disabled" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#!">
                My Games
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                aria-disabled="true"
                href="#!"
                style={{ fontWeight: "bold", color: "black" }}
              >
                {name}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
