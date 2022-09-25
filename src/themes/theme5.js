import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection5";
import WhyChoose from "../components/PromoSection/WhyChoose";
import AboutSection from "../components/AboutUs/AboutUs5";
import FeatureSection from "../components/Features/Feature2";
import Testimonial from "../components/Testimonial";
import Screenshots from "../components/Screenshots";
import TeamMember from "../components/TeamMember";
import ContactSection from "../components/Contact";
import FooterSection from "../components/Footer";
import Amenities from "../components/Amenities";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <HeroSection />
          <WhyChoose />
          <AboutSection />
          <TeamMember />
          <Testimonial />
          <Amenities />
          <Screenshots />
          <FeatureSection />
          <ContactSection />
        </div>
        <FooterSection />
      </React.Fragment>
    );
  }
}

export default Theme;
