import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  UI_BACK_SHOW,
  UI_BACK_HIDE,
  UI_SHOW_BACK_ARROW,
  UI_SHOW_NAV
} from "../../actions/types";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    background: "#fbfbfb",
    zIndex: 5,
    transition: "all .244s ease",
    willChange: "transform",
    perspective: 1000,
    backfaceVisibility: "hidden"
  },
  content: {
    paddingTop: "15vh",
    position: "relative"
  }
});

class FrontCard extends Component {
  rootRef = undefined;

  componentDidUpdate(prevProps) {
    if (
      prevProps.backShown !== this.props.backShown &&
      this.props.backShown === true
    ) {
      //this.rootRef.scrollTo(0, 0);
    }

    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.toggleBackArrow();
    }
  }

  toggleBackArrow = () => {
    if ((this.props.location.pathname.match(/\//g) || []).length > 1)
      this.props.toggleBackArrow(true);
    else this.props.toggleBackArrow(false);
  };

  componentDidMount() {
    this.toggleBackArrow();

    this.rootRef.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    this.rootRef.removeEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    if(this.rootRef.scrollTop <= 50 && !this.props.showNav)
      this.props.toggleNav(true);
    else if(this.rootRef.scrollTop > 50 && this.props.showNav)
      this.props.toggleNav(false);
  }

  render() {
    const { backShown, classes } = this.props;

    let styleRoot = {};
    if (backShown) {
      styleRoot = {
        ...styleRoot,
        transform: "translate3d(240px, 10%, 0)",
        transformStyle: "preserve-3d",
        borderTopLeftRadius: "20px",
        overflowX: "hidden",
        boxShadow:
          "rgba(0, 0, 0, 0.07) -1px -1px 20px, rgba(0, 0, 0, 0.12) -1px -1px 5px"
      };
    } else {
      styleRoot = {
        ...styleRoot,
        transform: "none",
        transformStyle: "preserve-3d",
        borderTopLeftRadius: "0",
        overflowX: "auto",
        boxShadow: "0"
      };
    }

    return (
        <div
          className={classes.root}
          style={styleRoot}
          ref={r => {
            this.rootRef = r;
          }}
        >
          <div className={classes.content}>{this.props.children}</div>
        </div>
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
  hideBack: () => dispatch({ type: UI_BACK_HIDE }),
  toggleBackArrow: payload => dispatch({ type: UI_SHOW_BACK_ARROW, payload }),
  toggleNav: payload => dispatch({type: UI_SHOW_NAV, payload})
});

export default withRouter(
  connect(
    READ,
    EMIT
  )(withStyles(styles)(FrontCard))
);
