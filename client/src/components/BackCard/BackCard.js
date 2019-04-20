import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100vw",
    maxWidth: "100%",
    height: "100vh",
    maxHeight: "100%",
    background: "#e3e3e3",
    zIndex: 1,
    overflow: "hidden",
    position: "relative"
  }
});

class BackCard extends PureComponent {
  render() {
    return <div className={this.props.classes.root}>{this.props.children}</div>;
  }
}

export default withStyles(styles)(BackCard);
