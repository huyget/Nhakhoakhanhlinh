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
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="section-specialty">
        <div className="specialty-content">
          <div className="specialty-header">
            <span>Các chuyên khoa răng hàm mặt</span>
            <button>xem thêm</button>
          </div>
          <div className="specialty-body">
            <Slider {...settings}>
              <div className="img-customize">
                <div className="img-container "></div>
                <div className="specialty-text">Bệnh nha chu</div>
              </div>
              <div className="img-customize">
                <div className="img-container"></div>
                <div className="specialty-text">Bệnh nha chu</div>
              </div>
              <div className="img-customize">
                <div className="img-container"></div>
                <div className="specialty-text">Bệnh nha chu</div>
              </div>
              <div className="img-customize">
                <div className="img-container"></div>
                <div className="specialty-text">Bệnh nha chu</div>
              </div>
              <div className="img-customize">
                <div className="img-container"></div>
                <div className="specialty-text">Bệnh nha chu</div>
              </div>
              <div className="img-customize">
                <div className="img-container"></div>
                <div className="specialty-text">Bệnh nha chu</div>
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
