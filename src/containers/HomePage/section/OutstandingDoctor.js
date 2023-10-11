import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
//import "./OutstandingDoctor.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//OutstandingDoctor : bac si nổi bật
class OutstandingDoctor extends Component {
  render() {
    return (
      <div className="section-share section-Outstanding-Doctor">
        <div className="section-content">
          <div className="section-header">
            <span>Bác sĩ nổi bật</span>
            <button>xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="outstanding">
                <div className="section-customize customize-outstanding">
                  <div className="img-section-container img-Outstanding-Doctor "></div>
                  <div className="section-text">
                    <h3>Thạc sĩ bác sĩ vương khánh linh</h3>
                    <span>chuyên khoa răng hàm mặt</span>
                  </div>
                </div>
              </div>
              <div className="outstanding">
                <div className="section-customize customize-outstanding">
                  <div className="img-section-container img-Outstanding-Doctor "></div>
                  <div className="section-text">
                    <h3>Thạc sĩ bác sĩ vương khánh linh</h3>
                    <span>chuyên khoa răng hàm mặt</span>
                  </div>
                </div>
              </div>
              <div className="outstanding">
                <div className="section-customize customize-outstanding">
                  <div className="img-section-container img-Outstanding-Doctor "></div>
                  <div className="section-text">
                    <h3>Thạc sĩ bác sĩ vương khánh linh</h3>
                    <span>chuyên khoa răng hàm mặt</span>
                  </div>
                </div>
              </div>
              <div className="outstanding">
                <div className="section-customize customize-outstanding">
                  <div className="img-section-container img-Outstanding-Doctor "></div>
                  <div className="section-text">
                    <h3>Thạc sĩ bác sĩ vương khánh linh</h3>
                    <span>chuyên khoa răng hàm mặt</span>
                  </div>
                </div>
              </div>
              <div className="outstanding">
                <div className="section-customize customize-outstanding">
                  <div className="img-section-container img-Outstanding-Doctor "></div>
                  <div className="section-text">
                    <h3>Thạc sĩ bác sĩ vương khánh linh</h3>
                    <span>chuyên khoa răng hàm mặt</span>
                  </div>
                </div>
              </div>
              <div className="outstanding">
                <div className="section-customize customize-outstanding">
                  <div className="img-section-container img-Outstanding-Doctor "></div>
                  <div className="section-text">
                    <h3>Thạc sĩ bác sĩ vương khánh linh</h3>
                    <span>chuyên khoa răng hàm mặt</span>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
