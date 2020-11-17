import React from "react";

const About = () =>(

<div className="pt-5 pb-5" id="about">
<div className="container">
  <div className="row">
    <div className="col-12 col-md">
      <h2 id="about-heading" className="text-lg-center">ABOUT</h2>
      <p id="about-separator"></p>
    </div>
  </div>

  <div id="about-info">
  <div className="row mt-5 d-flex justify-content-around">
    <div className="col-12 col-md-6">
      <p className="about-content">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>

    <div className="col-12 col-md-6">
    <p className="about-content">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
    </div>
  </div>

  <div className="row mt-5">
    <div className="col-12 col-md d-flex justify-content-md-center">
      <button id="about-btn"><i className="fa fa-download"></i> Free Download!</button> 
    </div>
  </div>
  </div>

</div>
</div>

)


export default About;