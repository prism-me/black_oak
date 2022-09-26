import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Amenities extends React.Component {
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
        <section className={"ptb-50 amenitiessection"}>
          <div className="container">
            <div className="row amenitywraper">
              <div className="col-md-4">
                <div className="detailWrape">
                  <p className="titlestyle">
                    Grand 1 to 3.5 bedroom apartments starting from AED 1.22 MN*
                  </p>
                  <div className="row">
                    <div className="col">
                      <h4 className="digitstyle">60%</h4>
                      <p className="titlestyle">During Construction</p>
                    </div>
                    <div className="col">
                      <h4 className="digitstyle">40%</h4>
                      <p className="titlestyle">On Completion</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col divwraper">
                    <div className="text-center">
                      {/* <img
                        src="img/images/pool.png"
                        alt="icon"
                        className="img-fluid"
                      /> */}
                      <LazyLoadImage
                        placeholderSrc="img/images/pool.png"
                        effect="blur"
                        alt="icon"
                        className="img-fluid"
                        src="img/images/pool.png"
                      />
                      <h6 className="title">Pools</h6>
                    </div>
                  </div>
                  <div className="col divwraper">
                    <div className="text-center">
                      {/* <img
                        src="img/images/gym.png"
                        alt="icon"
                        className="img-fluid"
                      /> */}
                      <LazyLoadImage
                        placeholderSrc="img/images/gym.png"
                        effect="blur"
                        alt="icon"
                        className="img-fluid"
                        src="img/images/gym.png"
                      />
                      <h6 className="title">Gym</h6>
                    </div>
                  </div>
                  <div className="col divwraper">
                    <div className="text-center">
                      {/* <img
                        src="img/images/restraunt.png"
                        alt="icon"
                        className="img-fluid"
                      /> */}
                      <LazyLoadImage
                        placeholderSrc="img/images/restraunt.png"
                        effect="blur"
                        alt="icon"
                        className="img-fluid"
                        src="img/images/restraunt.png"
                      />
                      <h6 className="title">Restaurants</h6>
                    </div>
                  </div>
                  <div className="col divwraper">
                    <div className="text-center">
                      {/* <img
                        src="img/images/walk.png"
                        alt="icon"
                        className="img-fluid"
                      /> */}
                      <LazyLoadImage
                        placeholderSrc="img/images/walk.png"
                        effect="blur"
                        alt="icon"
                        className="img-fluid"
                        src="img/images/walk.png"
                      />
                      <h6 className="title">Play Areas</h6>
                    </div>
                  </div>
                  <div className="col divwraper">
                    <div className="text-center">
                      {/* <img
                        src="img/images/cart.png"
                        alt="icon"
                        className="img-fluid"
                      /> */}
                      <LazyLoadImage
                        placeholderSrc="img/images/cart.png"
                        effect="blur"
                        alt="icon"
                        className="img-fluid"
                        src="img/images/cart.png"
                      />
                      <h6 className="title">Retail Outlets</h6>
                    </div>
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

export default Amenities;
