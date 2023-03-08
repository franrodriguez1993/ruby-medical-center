import React from "react";
import "../../css/Accesories/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex flex-column">
      <img
        src="/assets/img/logo/ruby.png"
        alt="ruby-logo"
        className="navbar-logo"
      />
      <div className="container-fluid d-flex justify-content-end">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="professionals">
                Professionals
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Specialities
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="endocrinology">
                    Endocrinology
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="neurology">
                    Neurology
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="cardiology">
                    Cardiology
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="ophthalmology">
                    Ophthalmology
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="pediatrics">
                    Pediatrics
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="urology">
                    Urology
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="psychiatry">
                    Psychiatry
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="location">
                Location
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
