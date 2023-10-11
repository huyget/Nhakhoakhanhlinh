import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//HandBook : cẩm nang
class HandBook extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div className="section-share section-handbook">
        <div className="section-content">
          <div className="section-header">
            <span>Cẩm Nang Răng Miệng</span>
            <button>Tất cả bài viết</button>
          </div>
          <div className="section-body">
            <Slider {...settings}>
              <div className="section-customize customize-handbook">
                <div className="img-section-container img-handbook col-6 "></div>
                <div className="section-text col-6 text-handbook">
                  các dấu hiệu cho thấy răng bị tổn thương{" "}
                </div>
              </div>
              <div className="section-customize customize-handbook">
                <div className="img-section-container img-handbook col-6 "></div>
                <div className="section-text col-6 text-handbook">
                  các dấu hiệu cho thấy răng bị tổn thương{" "}
                </div>
              </div>
              <div className="section-customize customize-handbook">
                <div className="img-section-container img-handbook col-6 "></div>
                <div className="section-text col-6 text-handbook">
                  các dấu hiệu cho thấy răng bị tổn thương{" "}
                </div>
              </div>
              <div className="section-customize customize-handbook">
                <div className="img-section-container img-handbook col-6 "></div>
                <div className="section-text col-6 text-handbook">
                  các dấu hiệu cho thấy răng bị tổn thương{" "}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
