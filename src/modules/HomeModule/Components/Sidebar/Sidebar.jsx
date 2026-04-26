import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaShoppingCart,
  FaBox,
  FaUsers,
  FaUserSecret,
} from "react-icons/fa";
import { BiUser } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "280px", height: "100vh" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/users" className="nav-link active">
            <BiUser className="me-2" />
            User Management
          </Link>
        </li>

        <li>
          <Link to="/projects" className="nav-link link-dark">
            <FaTachometerAlt className="me-2" />
            Projects Management
          </Link>
        </li>

        <li>
          <Link to="/developer-management" className="nav-link link-dark">
            <FaShoppingCart className="me-2" />
            Developers Management
          </Link>
        </li>

        <li>
          <Link to="/products" className="nav-link link-dark">
            <FaBox className="me-2" />
            Website CMS
          </Link>
        </li>

        <li>
          <Link to="/customers" className="nav-link link-dark">
            <FaUsers className="me-2" />
            Live Chat
          </Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}
