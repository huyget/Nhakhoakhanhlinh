import React, { Component } from "react";

import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import Specialty from "./section/Specialty";
import MedicalFacilities from "./section/MedicalFacilities";
import OutstandingDoctor from "./section/OutstandingDoctor";
import HandBook from "./section/HandBook";
import About from "./section/About";
import "./HomePage.scss";
import HomeFooter from "./HomeFooter";

class HomePage extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <HomeHeader />
        <Specialty settings={settings} />
        <MedicalFacilities settings={settings} />
        <OutstandingDoctor settings={settings} />
        <HandBook />
        <About />
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
