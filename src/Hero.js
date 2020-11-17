import React from "react";

const Hero = ({title="START BOOTSTRAP", description="Graphic Artist - Web Designer - Illustrator"}) =>(

  <div id="hero">
  <div className="p-5 container d-flex justify-content-center align-items-center">
    <div className ="row">
      <div className="col-12">
      <img className="img-fluid" src="/assets/avataaars.svg" alt="user_image" />
      <h2 className="mt-5 text-center">{title}</h2>
      <p id="separator"></p>
      <p className="text-center mt-4 hero-para">{description}</p>
      </div>
    </div>
  </div>
</div>
)

export default Hero;