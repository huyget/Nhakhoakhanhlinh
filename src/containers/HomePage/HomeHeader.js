import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/images/logo2-1.png";
import { LANGUAGES } from "../../utils/constant";
import { changeLanguageApp } from "../../store/actions/appActions";
class HomeHeader extends Component {
  changeLanguage = (language) => {
    this.props.changeLanguageReduxapp(language);
    //fire redux event : action
  };
  render() {
    console.log("check props: ", this.props);
    let languagedata = this.props.language;
    console.log("languageDat: ", languagedata);
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="home-header-content">
            <div className="left-content">
              <i className="fas fa-bars header-icon"></i>
              <img src={logo}></img>
            </div>
            <div className="center-content">
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.speciality" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.searchdoctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.health-facility" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.select-room" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.doctor" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.select-doctor" />
                </div>
              </div>
              <div className="child-content">
                <div>
                  <b>
                    <FormattedMessage id="homeheader.fee" />
                  </b>
                </div>
                <div className="sub-title">
                  <FormattedMessage id="homeheader.check-health" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="homeheader.support" />
              </div>
              <div
                className={
                  languagedata === LANGUAGES.VI
                    ? "language-vi active"
                    : "language-vi"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(LANGUAGES.VI);
                  }}
                >
                  VN
                </span>
              </div>
              <div
                className={
                  languagedata === LANGUAGES.EN
                    ? "language-en active"
                    : "language-en"
                }
              >
                <span
                  onClick={() => {
                    this.changeLanguage(LANGUAGES.EN);
                  }}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-header-banner">
          <div></div>
          <div className="content-up">
            <div className="title1">
              <FormattedMessage id="banner.title1" />
            </div>
            <div className="title2">
              <FormattedMessage id="banner.title2" />
            </div>
            <div className="search">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Tim chuyen khoa"></input>
            </div>
          </div>
          <div className="content-down">
            <div className="options">
              <div className="options-child">
                <div className="icon-child">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.text-child1" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa fa-mobile"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.text-child2" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa fa-stethoscope"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.text-child3" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa fa-wheelchair"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.text-child4" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa fa-heartbeat"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.text-child5" />
                </div>
              </div>
              <div className="options-child">
                <div className="icon-child">
                  <i className="fa fa-medkit"></i>
                </div>
                <div className="text-child">
                  <FormattedMessage id="banner.text-child6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageReduxapp: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
