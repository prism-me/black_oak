import React, { Component } from "react";
import ZohoBannerForm from "../ZohoBannerForm/ZohoBannerForm";

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          id="register"
          className="contact-us contactsection ptb-50 "
          style={{
            backgroundImage: "url('img/images/enquirebg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="formwraper">
                  <h3 className="lead text-white">Interested to Know More?</h3>
                  <ul>
                    <li>• Choose from 1, 2 & 3 BR Apartments</li>
                    <li>• Enjoy luxury amenities and facilities</li>
                    <li>• Opulent design with high-rise twin-towers</li>
                    <li>• Price starting at only AED 1.22M</li>
                  </ul>
                  <button className="btn registerbtn">
                    Register Your Interest{">"}
                  </button>
                </div>
              </div>
              <div className="col-md-8">
                <div className="formwraper">
                  <ZohoBannerForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
