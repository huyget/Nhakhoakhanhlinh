import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./Specialty.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialty from "../../../assets/specialty/112457-co-xuong-khop.jpg";

//specialty :chuyrn mon
class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-content">
          <div className="section-header">
            <span>Các chuyên khoa răng hàm mặt</span>
            <button>xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="img-section-container img-specialty "></div>
                <div className="section-text">Bệnh nha chu</div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-specialty"></div>
                <div className="section-text">Bệnh nha chu</div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-specialty"></div>
                <div className="section-text">Bệnh nha chu</div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-specialty"></div>
                <div className="section-text">Bệnh nha chu</div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-specialty"></div>
                <div className="section-text">Bệnh nha chu</div>
              </div>
              <div className="section-customize">
                <div className="img-section-container img-specialty"></div>
                <div className="section-text">Bệnh nha chu</div>
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
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
