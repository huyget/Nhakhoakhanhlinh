import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//MedicalFacilities : co so y te
class MedicalFacilities extends Component {
  render() {
    return (
      <div className="section-share section-medical-facilities">
        <div className="section-content">
          <div className="section-header">
            <span>Các chi nhánh nha khoa</span>
            <button>xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="img-section-container img-medical-facilities "></div>
                <div className="section-text">Nha khoa thành phố hcm </div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-medical-facilities"></div>
                <div className="section-text">Nha khoa thành phố hcm </div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-medical-facilities"></div>
                <div className="section-text">Nha khoa thành phố hcm </div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-medical-facilities"></div>
                <div className="section-text">Nha khoa thành phố hcm </div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-medical-facilities"></div>
                <div className="section-text">Nha khoa thành phố hcm </div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-medical-facilities"></div>
                <div className="section-text">Nha khoa thành phố hcm </div>
              </div>
            </Slider>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacilities);
