import React from "react";
import "./AdminNav.css";

function AdminNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Admin
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link mx-2" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Patient activation
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Doctor activation
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Patients
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Doctors
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#">
                  Files
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link " href="">
                  Assign Doctor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Doctors request
                </a>
              </li>
            </ul>

            <button className="btn btn-primary">Logout</button>
          </div>
        </div>
      </nav>
      <h1>This is Admin</h1>
      <div className="hero-content">
        <p>lorem</p>
      </div>
    </>
  );
}

export default AdminNavbar;
