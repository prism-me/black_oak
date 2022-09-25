import React from "react";

class WhyChoose extends React.Component {
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
        <section className={"promo-section ptb-50 whychoose"}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 d-flex justify-content-start align-items-center">
                <h2 className="heading">Why Choose Creek Vista Heights</h2>
              </div>
              <div className="col-lg-6 col-md-6">
                <p className="detail">
                  Live an inspired life amid contemporary sophistication within
                  the Sobha Hartland community
                </p>
                <a href="#register" className="btn enquire-btn page-scroll">
                  ENQUIRE NOW
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default WhyChoose;
