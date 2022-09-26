import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Features extends React.Component {
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
        <div id="features" className={"feature-section pb-50 featurewrape"}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="section-heading text-center mb-5">
                  <h2 className="title">BlackOak Real Estate</h2>
                  <p className="subtitle">
                    Objectively deliver professional value with diverse
                    web-readiness. Collaboratively transition wireless customer
                    service without goal-oriented catalysts for change.
                    Collaboratively.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7">
                {/* <img
                  src="img/images/about.jpg"
                  alt="about us"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                /> */}
                <LazyLoadImage
                  placeholderSrc="img/images/about.jpg"
                  effect="blur"
                  alt="about us"
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                  src="img/images/about.jpg"
                />
              </div>
              <div className="col-md-5">
                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">01</span>
                  </div>
                  <div className="icon-text">
                    <h5>High Quality Projects</h5>
                    <p className="mb-0">
                      We select only the best projects in the market to work
                      with. We are selective in what we sell and choose to only
                      work with a select number of high quality developers.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">02</span>
                  </div>
                  <div className="icon-text">
                    <h5>Comprehensive Service</h5>
                    <p className="mb-0">
                      We provide a full service brokerage. We can support with
                      the full spectrum of ancillary services such as mortgage
                      advice, relocation assistance, visa, tax and legal.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">03</span>
                  </div>
                  <div className="icon-text">
                    <h5>Investment Expertise</h5>
                    <p className="mb-0">
                      Our team is highly experienced in dealing with retail and
                      institutional clients. We work with a number of
                      institutional clients sourcing assets and projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="pr-4">
                        <span className="numbstyle mr-3">04</span>
                      </div>
                      <div className="icon-text">
                        <h5>Technologically Advanced</h5>
                        <p className="mb-0">
                          We are a tech enabled agency adopting the latest
                          technological trends backed by an AI driven marketing
                          platform.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="pr-4">
                        <span className="numbstyle mr-3">05</span>
                      </div>
                      <div className="icon-text">
                        <h5>Large Investor Network</h5>
                        <p className="mb-0">
                          We have a large private network of international
                          investors. Our investor network gives us both access
                          as well as reach for our real estate projects.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Features;
