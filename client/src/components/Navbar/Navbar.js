import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import GoogleAuth from "../GoogleAuth";
import { connect } from "react-redux";
import { UI_BACK_SHOW, UI_BACK_HIDE } from "../../actions/types";
import { FaTimes, FaBars, FaArrowLeft } from "react-icons/fa";
import { IconButton, Portal, Slide } from "@material-ui/core";
import logoBlack from "../../images/logo/RTG_Clinic.png";
import { withRouter } from "react-router-dom";

import logoFull from "images/logo.svg";
import logoFade from "images/logo_fade.png";

import pages from "utils/pages";
import ReactSVG from "react-svg";

import Lgo from "./Logo";

const styles = theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    height: "10vh",
    zIndex: 99,
    position: "absolute",
    left: 0,
    top: 0,
    overflow: "hidden",
    transition: "all 155ms ease, background 0ms ease"
  },
  content: {
    paddingLeft: "10%",
    paddingRight: "10%",
    height: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "all 255ms ease",
  },
  icon: {
    fontSize: "1.5rem"
  },
  logo: {
    height: "8vh",
    transition: "all 255ms ease",
  },
  logoFade: {
    height: "8vh",
    transition: "all 255ms ease",
    fill: "#eee"
  },
  "@media only screen and (max-width: 766px)": {
    content: {
      paddingLeft: "5%",
      paddingRight: "5%"
    },
    logo: {
      height: "6vh"
    }
  }
});

class Navbar extends PureComponent {
  state = {
    showHUD: true
  };

  clickBackArrow = () => {
    let back = "/" + this.props.history.location.pathname.split("/")[1];

    const pathSearch = pages.filter(e => e.path === back);

    if (pathSearch.length <= 0) back = "/";

    this.props.history.push(back);
  };

  renderIcon = () => {
    const { backShown } = this.props;

    const props = {
      className: this.props.classes.icon
    };
    if (this.props.showBackArrow) return <FaArrowLeft {...props} />;
    return backShown ? <FaTimes {...props} /> : <FaBars {...props} />;
  };

  toggleBack = () => {
    if (this.props.backShown) this.props.hideBack();
    else this.props.showBack();
  };

  customStyle = () => {
    let style = {};

    if (this.props.backShown) {
      style = {
        ...style,
        background: "transparent",
        boxShadow: "none"
      };
    } else {
      style = {
        ...style,
        background: "transparent",
        boxShadow: "none"
      };

      /*if (this.props.frontScroll > 5) {
        style = {
          ...style,
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
        };
      } */
    }

    return style;
  };

  render() {
    const logo = this.props.backShown ? <Lgo className={this.props.classes.logoFade} /> : <Lgo className={this.props.classes.logo} />;

    return (
      <Portal>
        <Slide direction="down" in={this.props.backShown || this.props.showNav}>
          <div className={this.props.classes.root} style={this.customStyle()}>
            <div className={this.props.classes.content}>
              {!this.props.showBackArrow ? (
                <IconButton aria-label="Toggle Menu" onClick={this.toggleBack}>
                  {this.renderIcon()}
                </IconButton>
              ) : (
                <IconButton aria-label="Go back" onClick={this.clickBackArrow}>
                  {this.renderIcon()}
                </IconButton>
              )}
              <div>
                {logo}
              </div>

              <div>
                <GoogleAuth alwaysDisplay={this.props.backShown} />
              </div>
            </div>
          </div>
        </Slide>
      </Portal>
    );
  }
}

const READ = state => ({
  backShown: state.ui.backShown,
  showBackArrow: state.ui.showBackArrow,
  showNav: state.ui.showNav
});

const EMIT = dispatch => ({
  showBack: () => dispatch({ type: UI_BACK_SHOW }),
  hideBack: () => dispatch({ type: UI_BACK_HIDE })
});

export default connect(
  READ,
  EMIT
)(withRouter(withStyles(styles)(Navbar)));
