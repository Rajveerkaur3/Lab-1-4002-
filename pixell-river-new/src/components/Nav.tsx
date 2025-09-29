import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav: React.FC = () => (
  <nav aria-label="Main navigation">
    <div className="page-links">
      <Link to="/employees">Employees</Link>
      <Link to="/organization">Organization</Link>
    </div>
    <div className="logo-wrap">
      <Link to="/">
        <img src={logo} alt="Pixell River Logo" />
      </Link>
    </div>
  </nav>
);

export default Nav;
