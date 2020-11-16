import React from "react";

const Hero = ({title="START BOOTSTRAP", description="Graphic Artist - Web Designer - Illustrator"}) =>(

  <div id="hero">
  <div className="p-5 container d-flex justify-content-center align-items-center">
    <div className ="row">
      <div className="col-12">
      <img className="img-fluid" src="/assets/avataaars.svg" alt="user_image" />
      <h2 className="mt-5">{title}</h2>
      <p id="separator"></p>
      <p className="text-center mt-4">{description}</p>
      </div>
    </div>
  </div>
</div>
)

export default Hero;