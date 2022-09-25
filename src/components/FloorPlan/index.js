import React, { Component } from "react";
import _data from "../../data";

class FloorPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorPlan: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      floorPlan: _data.floorPlan,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          className={"testimonial-section floorplansection ptb-50 "}
          style={{
            backgroundImage: "url('img/images/floorplanbg.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="owl-carousel owl-theme client-testimonial arrow-indicator">
              {(this.state.floorPlan.comments || []).map((comment, _index) => {
                return (
                  <div className="item" key={comment.name}>
                    <div className="topdiv mb-5">
                      <div>
                        <button className="btn btnstyle mr-3 active">
                          TOWER A UNIT PLANS
                        </button>
                        <button className="btn btnstyle">
                          TOWER B UNIT PLANS
                        </button>
                      </div>
                      <h2 className="toptitle">Apartment Floorplans</h2>
                    </div>
                    <div className="btnwrape mb-5">
                      <button className="btn bedbtnstyle mr-3 active">
                        1 Bedroom &nbsp;&nbsp;/
                      </button>
                      <button className="btn bedbtnstyle mr-3">
                        1.5 Bedroom &nbsp;&nbsp;/
                      </button>
                      <button className="btn bedbtnstyle mr-3">
                        2 Bedroom &nbsp;&nbsp;/
                      </button>
                      <button className="btn bedbtnstyle">2.5 Bedroom</button>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="img/images/floorplan.png"
                          alt="about us"
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-md-6">
                        <div className="detail-wrap mb-3">
                          <h5 className="heading mb-4">
                            2 BEDROOM APARTMENT TYPE A (with balcony)
                          </h5>
                          <ul className="liststyle">
                            <li>TOTAL SALEABLE AREA</li>
                            <li>SUITE = 893.94 SQ.FT.</li>
                            <li>BALCONY = 56.73 SQ.FT.</li>
                            <li>TOTAL = 950.67 SQ.FT.</li>
                          </ul>
                          <div className="featureswraper mt-4">
                            <p className="featuresheading">
                              Apartment Features
                            </p>
                            <div className="row ">
                              <div className="col">
                                <div className="text-center">
                                  <img
                                    src="img/images/icon1.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                  <h6 className="title">Landmark views</h6>
                                </div>
                              </div>
                              <div className="col">
                                <div className="text-center">
                                  <img
                                    src="img/images/icon2.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                  <h6 className="title">Covered car parking</h6>
                                </div>
                              </div>
                              <div className="col">
                                <div className="text-center">
                                  <img
                                    src="img/images/icon3.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                  <h6 className="title">
                                    Fully fitted kitchens
                                  </h6>
                                </div>
                              </div>
                              <div className="col">
                                <div className="text-center">
                                  <img
                                    src="img/images/icon4.png"
                                    alt="icon"
                                    className="img-fluid"
                                  />
                                  <h6 className="title">
                                    Bedroom wardrobe in all units
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FloorPlan;
