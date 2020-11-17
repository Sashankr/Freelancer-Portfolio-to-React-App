import React from "react";

const Contact = () => (

  <div id="contact" className="pt-5 pb-5 container">
    <div className="row">
      <div className="col-12 col-md">
        <h2 className="text-lg-center">CONTACT ME</h2>
        <p className="separator3"></p>
      </div>
    </div>

    <div id="contact-info">
      <div className="row">
        <div className="col-12 col-md">
          <form>
            <input autoComplete="none" className="form-input" type="text" id="name" placeholder="Name" />
            <input autoComplete="none" className="form-input" type="email" id="email" placeholder="Email Address" />
            <input autoComplete="none" className="form-input" type="tel" id="phone" placeholder="Phone Number" />
            <textarea autoComplete="none" rows="5" style={{resize : "none"}} placeholder="Message"></textarea>

            <button className="d-flex justify-content-start" type="submit" id="contact-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>


)

export default Contact;