import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center ">
        {/* <Link class="navbar-brand" href="#">
          Navbar
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex justify-content-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Health Topics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}


export default Navbar