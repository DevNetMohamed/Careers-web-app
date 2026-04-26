import React from "react";
import Logo from "../../../../assets/images/Logo/axis logo.svg";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className={style.image}>
          <Link className="navbar-brand" to="/">
            <img src={Logo} className={style.logo} alt="logo" />
          </Link>
        </div>

        {/* User Dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
            data-bs-toggle="dropdown"
          >
            <img
              src="https://github.com/mdo.png"
              alt="user"
              width="32"
              height="32"
              className="rounded-circle"
            />
            <span>Admin</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow">
            <li>
              <Link className="dropdown-item" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/settings">
                Settings
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item text-danger" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
