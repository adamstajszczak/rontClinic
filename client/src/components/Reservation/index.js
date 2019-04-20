import React from "react";
import {
  Dialog,
  Slide,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  withStyles,
  Paper
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import Calendar from "./Calendar";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const style = theme => ({
  appBar: {
    background: theme.palette.primary,
    zIndex: 10000,
    position: "relative",
  },
  flex: {
    flex: 1,
  },
  container: {
    minHeight: "90vh",
    padding: "2vh 10vw",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

const Reservation = ({ open, onClose, classes, data }) => {

  if(!data) return <React.Fragment/>
  
  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => onClose(false)}
            aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            Rezerwacja 
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper className={classes.paper}>
        <div className={classes.container}>
          <div style={{width: "100%"}}>
          <h1>Wybierz dogodny termin</h1>
          <Calendar data={data} />
          </div>
        </div> 
      </Paper>
    </Dialog>
  );
};

export default withStyles(style)(Reservation);
