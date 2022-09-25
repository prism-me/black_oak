import React, { useState } from "react";

const FloorPlan = ({ data, onChangeTab }) => {
  let propertyData = data.data.floorplan;
  const [activePropertyData, setPropertyData] = useState(propertyData[0]);

  const onChangePropertyTab = (tabtext) => {
    propertyData.forEach((item) => {
      if (item.PropertyTab === tabtext) {
        setPropertyData(item);
      }
    });
  };

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
          <div className="topdiv mb-5">
            <div>
              <button
                className={`btn btnstyle mr-3 ${
                  data.tab === "tab1" && "active"
                }`}
                onClick={() => onChangeTab("tab1")}
              >
                TOWER A UNIT PLANS
              </button>
              <button
                className={`btn btnstyle ${data.tab === "tab2" && "active"}`}
                onClick={() => onChangeTab("tab2")}
              >
                TOWER B UNIT PLANS
              </button>
            </div>
            <h2 className="toptitle">Apartment Floorplans</h2>
          </div>
          {data.tab === "tab2" ? (
            <div className="btnwrape mb-5">
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "1bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("1bed")}
              >
                1 Bedroom &nbsp;&nbsp;/
              </button>
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "2bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("2bed")}
              >
                2 Bedroom &nbsp;&nbsp;/
              </button>
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "2.5bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("2.5bed")}
              >
                2.5 Bedroom &nbsp;&nbsp;/
              </button>
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "3bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("3bed")}
              >
                3 Bedroom &nbsp;&nbsp;/
              </button>
              <button
                className={`btn bedbtnstyle ${
                  activePropertyData.PropertyTab === "3.5bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("3.5bed")}
              >
                3.5 Bedroom
              </button>
            </div>
          ) : (
            <div className="btnwrape mb-5">
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "1bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("1bed")}
              >
                1 Bedroom &nbsp;&nbsp;/
              </button>
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "1.5bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("1.5bed")}
              >
                1.5 Bedroom &nbsp;&nbsp;/
              </button>
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "2bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("2bed")}
              >
                2 Bedroom &nbsp;&nbsp;/
              </button>
              <button
                className={`btn bedbtnstyle mr-3 ${
                  activePropertyData.PropertyTab === "2.5bed" && "active"
                }`}
                onClick={() => onChangePropertyTab("2.5bed")}
              >
                2.5 Bedroom
              </button>
            </div>
          )}

          <div className="owl-carousel owl-theme client-testimonial arrow-indicator">
            {activePropertyData.data.slider.map((x, i) => (
              <div className="item" key={i}>
                <div className="row">
                  <div className="col-md-6">
                    <img src={x.img} alt="about us" className="img-fluid" />
                  </div>
                  <div className="col-md-6">
                    <div className="detail-wrap mb-3">
                      <h5 className="heading mb-4">{x.title}</h5>
                      <ul className="liststyle">
                        {x.content.map((c, ind) => (
                          <li key={ind}>{c}</li>
                        ))}
                      </ul>
                      <div className="featureswraper mt-4">
                        <p className="featuresheading">{x.subtitle}</p>
                        <div className="row ">
                          {x.features.map((a, index) => (
                            <div className="col" key={index}>
                              <div className="text-center">
                                <img
                                  src={a.img}
                                  alt="icon"
                                  className="img-fluid"
                                />
                                <h6 className="title">{a.name}</h6>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FloorPlan;
