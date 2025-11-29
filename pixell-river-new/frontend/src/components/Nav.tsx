import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react";

const Nav: React.FC = () => (
  <nav aria-label="Main navigation" className="nav-bar">
    {/* Navigation links */}
    <div className="page-links">
      <Link to="/employees">Employees</Link>
      <Link to="/organization">Organization</Link>
    </div>

    {/* Logo */}
    <div className="logo-wrap">
      <Link to="/">
        <img src={logo} alt="Pixell River Logo" />
      </Link>
    </div>

    {/* Auth buttons */}
    <div className="auth-buttons">
      <SignedOut>
        <SignInButton>Sign In</SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>Sign Out</SignOutButton>
      </SignedIn>
    </div>
  </nav>
);

export default Nav;
