import React from "react";
import logo from "../assets/logo.png";

const Nav: React.FC = () => (
  <nav>
    <div className="page-links">
      <a href="#">Employees</a>
      <a href="#">Organization</a>
    </div>
    <div className="logo-wrap">
      <img src={logo} alt="Pixell River Logo" />
    </div>
  </nav>
);

export default Nav;
