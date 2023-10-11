import React, { Component } from "react";
import { connect } from "react-redux";
//HomeFooter : ve
class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <p>
          &copy; 2023 Dr.Van Huy{" - "}
          <a target="_blank" href="#">
            Nha Khoa DR.VuongLinh
          </a>
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
