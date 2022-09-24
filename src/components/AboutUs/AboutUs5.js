import React from "react";

class About extends React.Component {
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
    const images = [
      {
        img: "img/images/whychoose.png",
      },
      {
        img: "img/images/whychoose.png",
      },
      {
        img: "img/images/whychoose.png",
      },
      {
        img: "img/images/whychoose.png",
      },
      {
        img: "img/images/whychoose.png",
      },
      {
        img: "img/images/whychoose.png",
      },
    ];
    return (
      <React.Fragment>
        <section id="about" className="about-us pb-50 aboutus">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="owl-carousel owl-theme whychoose-slider arrow-indicator">
                  {(images || []).map((x, i) => {
                    return (
                      <div className="item" key={i}>
                        <img src={x.img} alt="about us" className="img-fluid" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-md-6 detailwrape">
                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">01</span>
                  </div>
                  <div className="icon-text">
                    <h5>Live on Cloud Nine</h5>
                    <p className="mb-0">
                      Two exquisite towers close to vibrant Downtown Dubai with
                      high-end finishes and a unique charm that is truly
                      unparalleled.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">02</span>
                  </div>
                  <div className="icon-text">
                    <h5>The Height of Sheer Classe</h5>
                    <p className="mb-0">
                      Bespoke residences feature full-height windows to maximize
                      all-encompassing views.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">03</span>
                  </div>
                  <div className="icon-text">
                    <h5>Beat The Sun as You Take a Dip</h5>
                    <p className="mb-0">
                      Take a plunge in a state-of-the art swimming pool or work
                      on those tan lines by the poolside, the choice is yours.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">04</span>
                  </div>
                  <div className="icon-text">
                    <h5>Ideal Spaces to Socialise</h5>
                    <p className="mb-0">
                      Be your best self, courtesy of a fully equipped gym that
                      promises exceptional facilities, designed to relieve the
                      stresses of the day, every day.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-4">
                  <div className="pr-4">
                    <span className="numbstyle mr-3">05</span>
                  </div>
                  <div className="icon-text">
                    <h5>Hop a Little, Jump a Little</h5>
                    <p className="mb-0">
                      Specially carved out areas for the little ones in the
                      family to play to their hearts’ content. Uninterrupted.
                    </p>
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

export default About;
