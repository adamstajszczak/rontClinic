import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { UI_BACK_HIDE } from "../../actions/types";

const styles = theme => {
  return {
    root: {
      height: "100%",
      zIndex: 2,
      position: "absolute",
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "200px",
      transition: "opacity .155s ease"
    },
    item: {
      cursor: "pointer",
      left: "0",
      width: "175px",
      maxHeight: "70px",
      height: "45px",
      lineHeight: "50px",
      margin: "10px 0",
      padding: "10px 20px 10px 40px",
      background: "rgba(" + theme.palette.primary.rgb + ", .3)",
      textAlign: "right",
      borderRadius: "0 100px 100px 0",
      transition: "all .355s ease",
      "&:hover": {
        background: "rgba(" + theme.palette.primary.rgb + ", .5)"
      }
    },
    icon: {
      fontSize: "33px",
      color: "rgba(21, 21, 21, .6)",
      top: "50%",
      transform: "translateY(-50%)",
      position: "relative"
    },
    title: { display: "inline-block", float: "left", fontWeight: "bold" }
  };
};

class Sidebar extends Component {
  handleChange = path => {
    this.props.history.push(path);
    this.props.hideBack();
  };

  mapPages = () => {
    if (!this.props.pages || this.props.pages <= 0) return <React.Fragment />;

    return this.props.pages.map((e, i) => {
      const Icon = e.icon;
      return (
        <div
          key={`sidebar_action_${i}`}
          className={this.props.classes.item}
          style={
            e.path !== this.props.location.pathname
              ? {
                  background: "rgba(21, 21, 21, .03)"
                }
              : {}
          }
          onClick={() => this.handleChange(e.path)}
        >
          <div className={this.props.classes.title}>{e.title}</div>
          <Icon className={this.props.classes.icon} />
        </div>
      );
    });
  };

  render() {
    const { classes, backShown } = this.props;

    return <div className={classes.root} style={backShown ? {opacity: 1} : {opacity: 0}}>{this.mapPages()}</div>;
  }
}

const READ = state => ({
  backShown: state.ui.backShown
});

const EMIT = dispatch => ({
  hideBack: () => dispatch({ type: UI_BACK_HIDE })
});

export default connect(
  READ,
  EMIT
)(withRouter(withStyles(styles)(Sidebar)));
