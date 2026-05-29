"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";
import SignupModal from "./SignupModal";

function Navbar() {
  const [showSignup, setShowSignup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleClick = () => {
      setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [menuOpen]);
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img
            src="/assets/images/logo.png"
            alt="ZA Automation Logo"
            className="logo-img"
          />

          <h2 className="logo-text">ZA Automation</h2>
        </div>
        <button
          className="menu-btn"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
        >
          ☰
        </button>
        <div
          className={`nav-links ${menuOpen ? "active-menu" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </Link>

          <Link
            href="/services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </Link>

          <Link
            href="/users"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Clients
          </Link>

          <Link
            href="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact
          </Link>
        </div>
        <div className="nav-actions">
          <ThemeToggle />

          <button className="login-btn">Login</button>

          <button className="signup-btn" onClick={() => setShowSignup(true)}>
            Signup
          </button>
        </div>
      </nav>
      <SignupModal
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
      />{" "}
    </>
  );
}

export default Navbar;
