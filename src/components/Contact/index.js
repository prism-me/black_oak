import React, { Component } from "react";

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
                  <form className="enquireform">
                    <div className="form-row">
                      <div className="form-group col-md-6 colspace">
                        <label for="name">First Name*</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="name">Last Name*</label>
                        <input type="text" className="form-control" id="name" />
                      </div>
                      <div className="form-group col-md-6 colspace">
                        <label for="country">Country*</label>
                        <select className="form-control" id="country" required>
                          <option>Dubai</option>
                          <option>Pakistan</option>
                          <option>India</option>
                        </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label for="email">Email*</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                        />
                      </div>
                      <div className="form-group col-md-6 colspace">
                        <label for="phone">Mobile Number*</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <button className="btn enquire-btn">ENQUIRE NOW</button>
                      </div>
                    </div>
                  </form>
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
