/* eslint-disable */
import React from "react";
import "./styles.css";

const Navbar = ({logo ="START BOOTSTRAP",navLink1="PORTFOLIO",navLink2="ABOUT",navLink3="CONTACT"}) =>(
  <div id="navigation" className ="container-fluid">
   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="#">{logo}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#portfolio">{navLink1} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">{navLink2}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">{navLink3}</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
)

export default Navbar;