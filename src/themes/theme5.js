import React, { Component } from "react";

import Header from "../components/Header/header";
import Banner from "../components/Banner";
import WhyChoose from "../components/WhyChoose";
import AboutSection from "../components/AboutUs";
import Projects from "../components/Projects";
import FloorPlan from "../components/FloorPlan";
import Amenities from "../components/Amenities";
import ShobaProject from "../components/ShobaProject";
import FeatureSection from "../components/Features";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Banner />
          <WhyChoose />
          <AboutSection />
          <Projects />
          <FloorPlan />
          <Amenities />
          <ShobaProject />
          <FeatureSection />
          <ContactSection />
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
