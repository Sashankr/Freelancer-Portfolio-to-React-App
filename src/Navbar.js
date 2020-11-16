/* eslint-disable */
import React from "react";
import "./styles.css";

const Navbar = ({logo ="START BOOTSTRAP",navLink1="PORTFOLIO",navLink2="ABOUT",navLink3="CONTACT"}) =>(
  <div id="navigation" className ="container-fluid">
   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a className="navbar-brand" href="#">{logo}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-md-end" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">{navLink1}<span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">{navLink2}</a>
      <a className="nav-item nav-link" href="#">{navLink3}</a>
    </div>
  </div>
</nav>
  </div>
)

export default Navbar;