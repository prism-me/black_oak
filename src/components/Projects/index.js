import React from "react";
import _data from "../../data";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsSlider: {},
    };
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
    this.setState({
      projectsSlider: _data.projectsSlider,
    });
  }

  render() {
    return (
      <React.Fragment>
        <section
          id="projects"
          className="team-member-section projectsection ptb-50"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="text-center mb-5">
                  <h2 className="heading">Project Offerings</h2>
                </div>
              </div>
            </div>
            <div className="owl-carousel owl-theme project-carousel arrow-indicator">
              {(this.state.projectsSlider.projects || []).map(
                (member, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="single-team-member position-relative">
                        <div className="team-image">
                          {/* <img
                            src={member.image}
                            alt="project"
                            className="img-fluid"
                          /> */}
                          <LazyLoadImage
                            placeholderSrc={member.image}
                            effect="blur"
                            alt="project"
                            className="img-fluid"
                            src={member.image}
                          />
                        </div>
                        <div className="team-info text-white d-flex flex-column align-items-start justify-content-end p-3">
                          <h5 className="mb-5">{member.name}</h5>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Projects;
