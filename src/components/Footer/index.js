import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer-section footersection pt-50">
          <div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="footer-logo-wrape mb-3">
                    <img
                      src="img/images/blacklogo.png"
                      alt="footer logo"
                      width="220"
                      className="img-fluid"
                    />
                  </div>
                  <div className="footer-list-wrap">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/#">About Us</a>
                      </li>
                      <li>
                        <a href="/#">Projects</a>
                      </li>
                      <li>
                        <a href="/#">Contact Us</a>
                      </li>
                      <li>
                        <a href="/#">Register</a>
                      </li>
                      <li>
                        <a href="/#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="hrstyle" />
          <div className="footer-bottom pt-4 pb-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <p className="copyright-text pb-0 mb-0">
                    © 2022 <a href="/#">BlackOak Real Estate</a>. All rights
                    reserved.
                  </p>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="social-list-wrap">
                    <ul className="social-list list-inline list-unstyled">
                      <li className="list-inline-item">
                        <a href="/#" target="_blank" title="Facebook">
                          <span className="ti-facebook"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/#" target="_blank" title="Twitter">
                          <span className="ti-twitter"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/#" target="_blank" title="Instagram">
                          <span className="ti-instagram"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="/#" target="_blank" title="printerst">
                          <span className="ti-pinterest"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
