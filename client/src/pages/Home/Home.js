import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import FlexWrapper from "../../components/FlexWrapper";
import { Link } from "react-router-dom";
import { UI_BACK_SHOW, UI_BACK_HIDE } from "../../actions/types";
import { connect } from "react-redux";
import uuid from "uuid/v1";

import subPages from "../../utils/subpages";

const styles = theme => ({
  card: {
    maxWidth: 310,
    margin: "1rem",
    minWidth: 310,
    borderRadius: "1.5rem"
  },
  media: {
    height: 175
  }
});

class Home extends Component {
  handleChange = () => {
    this.props.hideBack();
  };

  render() {
    const { classes } = this.props;

    return (
      <div style={{padding: "0 10vw"}}>
        <FlexWrapper
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          flexWrap="wrap"
        >
          {subPages.map((e, i) => {
            return (
              <div key={uuid()}>
                <Card className={classes.card}>
                    <CardActionArea style={{padding: "1rem 0.3rem 0"}}>
                  <Link
                    to={e.path}
                    style={{ textDecoration: "none" }}
                    onClick={() => this.handleChange()}
                  >
                      <CardMedia
                        className={classes.media}
                        image={e.icon}
                        title={e.description}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {e.title}
                        </Typography>
                        <Typography component="p">{e.description}</Typography>
                      </CardContent>
                  </Link>
                    </CardActionArea>
                </Card>
              </div>
            );
          })}
        </FlexWrapper>
      </div>
    );
  }
}

const EMIT = dispatch => ({
  hideBack: () => dispatch({ type: UI_BACK_HIDE })
});

export default connect(
  null,
  EMIT
)(withStyles(styles)(Home));
