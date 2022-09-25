import React from "react";
import _data from "../../data";

export default class ShobaProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherProjects: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      otherProjects: _data.otherprojects,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="screenshots"
          className="screenshots-section shobaproject ptb-50"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="text-center mb-5">
                  <h2 className="heading">Other Projects by Sobha</h2>
                </div>
              </div>
            </div>
            <div className="owl-carousel owl-theme other-project-carousel arrow-indicator">
              {(this.state.otherProjects.projects || []).map((x, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={x.image}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{x.name}</h5>
                        <p className="card-text mb-0">{x.price}</p>
                        <p className="card-text">{x.category}</p>
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
