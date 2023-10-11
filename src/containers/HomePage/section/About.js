import React, { Component } from "react";
import { connect } from "react-redux";
//About : ve
class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-content">
          <div className="section-header header-about">
            <span>Giới thiệu Về Nha Khoa Dr.Vuong Linh</span>
          </div>
          <div className="section-about-content">
            <div className="content-left">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/EEIQ6gl__2Q"
                title="Phục hồi ấn tượng răng bị sâu rộng: Điều trị tủy"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="content-right">
              <span>
                <h3>Nha khoa Dr.VuongLinh</h3> được thành lập nhằm giúp mọi
                người phòng ngừa các bệnh về răng miệng và tạo nen vẻ đẹp của nụ
                cười
              </span>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
