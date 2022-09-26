import React, { useState } from "react";

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
import { tabsData } from "../data/tabsdata";

const Theme = () => {
  const [tabData, setTabData] = useState(tabsData);
  const [activeTabData, setActiveTabData] = useState(tabsData[0]);

  const onChangeTab = (tabtext) => {
    tabsData.forEach((item) => {
      if (item.tab === tabtext) {
        setActiveTabData(item);
      }
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <Banner />
        <WhyChoose />
        <AboutSection />
        <Projects />
        <FloorPlan data={activeTabData} onChangeTab={onChangeTab} />
        <Amenities />
        {/* <ShobaProject /> */}
        <FeatureSection />
        <ContactSection />
      </div>
      <FooterSection />
    </React.Fragment>
  );
};

export default Theme;
