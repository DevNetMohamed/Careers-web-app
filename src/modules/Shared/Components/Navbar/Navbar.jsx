import React from "react";
import logo from "../../../../assets/images/Logo/Button container.png";
import styles from "./NavbarStyles";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav" style={styles.links}>
              
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Find jobs</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex={-1}>
                  Contact
                </a>
              </li>

            </ul>
          </div>

          <div style={styles.nav_button}>
            <button className="btn text-success">Register</button>
            <button className="btn btn-success">Sign Up</button>
          </div>

        </div>
      </nav>
    </div>
  );
}