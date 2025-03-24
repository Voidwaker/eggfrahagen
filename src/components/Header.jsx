import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#hjem">EggFraHangen</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hjem">Hjem</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#om">Om Produktet</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
