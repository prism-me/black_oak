import React from "react";
import ZohoBannerForm from "../ZohoBannerForm/ZohoBannerForm";
class Banner extends React.Component {
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
        <section
          // id="register"
          className="hero-section background-img banner-section"
          style={{
            backgroundImage: "url('img/images/banner.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="ptb-100">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-10 col-lg-10">
                  <div className="hero-content-left text-white text-center mt-5 ptb-100">
                    <h3 className="subtitle">Relish a New Level of Luxury</h3>
                    <h1 className="title">Creek Vista Heights</h1>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="formwraper">
                    <h3 className="lead text-white">
                      Interested to Know More?
                    </h3>
                    <ul>
                      <li>• Choose from 1, 2 & 3 BR Apartments</li>
                      <li>• Enjoy luxury amenities and facilities</li>
                      <li>• Opulent design with high-rise twin-towers</li>
                      <li>• Price starting at only AED 1.22M</li>
                    </ul>
                    {/* <button className="btn registerbtn"> */}
                    <p className="regstertitle">Register Your Interest{">"}</p>
                    {/* </button> */}
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="formwraper">
                    <ZohoBannerForm />
                    {/* <form className="enquireform">
                      <div className="form-row">
                        <div className="form-group col-md-6 colspace">
                          <label for="name">First Name*</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="name">Last Name*</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                        <div className="form-group col-md-6 colspace">
                          <label for="country">Country*</label>
                          <select
                            className="form-control"
                            id="country"
                            required
                          >
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
                          <button className="btn enquire-btn">
                            ENQUIRE NOW
                          </button>
                        </div>
                      </div>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Banner;
