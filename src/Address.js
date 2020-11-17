import React from "react";

const Address = () =>(

  <div id="address" className="pt-5 pb-5">
  <div className="container">
    <div className="row text-lg-center">
      
      <div className="col-12 col-md-4 mb-4">
          <h3 className="address-heading">LOCATION</h3>
          <p className="address-para">2215 John Daniel Drive <br/> Clark, MO 65243</p>
      </div>

      <div className="col-12 col-md-4 mb-5">
          <h3 className="address-heading">AROUND THE WEB</h3>
          <a rel="noopener noreferrer" target="_blank" className="social-link" href="https://startbootstrap.github.io/startbootstrap-freelancer/#!"><i className="social-icon fa fa-facebook"></i></a>
          <a rel="noopener noreferrer" target="_blank" className="social-link" href="https://startbootstrap.github.io/startbootstrap-freelancer/#!"><i className="social-icon fa fa-twitter"></i></a>
          <a rel="noopener noreferrer" target="_blank" className="social-link" href="https://startbootstrap.github.io/startbootstrap-freelancer/#!"><i className="social-icon fa fa-linkedin"></i></a>
          <a rel="noopener noreferrer" target="_blank" className="social-link" href="https://startbootstrap.github.io/startbootstrap-freelancer/#!"><i className="social-icon fa fa-dribbble"></i></a>

      </div>

      <div className="col-12 col-md-4">
          <h3 className="address-heading">ABOUT FREELANCER</h3>
          <p className="address-para">Freelance is a free to use, MIT licensed Bootstrap theme created by <br/> <a id="address-link" rel="noopener noreferrer" target="_blank" href="https://startbootstrap.com/">Start Bootstrap</a>.</p>
      </div>

    </div>
  </div>
  </div>
)

export default Address;