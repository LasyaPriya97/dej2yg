import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RaisedButton from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { Router } from "react-router-dom";
import Six from "./Six";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  Toolbarbutton: {
    marginLeft: "auto"
  },
  button: {
    size: "medium",
    margin: theme.spacing(1)
  },
  link: {
    margin: theme.spacing(1)
  }
}));
const handleClick = () => {
  console.log("props",this.props)
  this.props.history.push("/Six")
};

export default function simpleContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="body1"> Hello,</Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.Toolbarbutton}>
            Arshiya Farzeen Avaran
          </Typography>
          <Button
            color="inherit"
            className={classes.Toolbarbutton}
            onClick={this.handleClick.bind(this)}
          >
            signout
          </Button>
        </Toolbar>
      </Appbar>
      <br />
      <Grid container>
        <Grid item xs={12} align="center">
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            Download Item Templates
          </Button>
          <Button
            variant="contained"
            color="inherit"
            className={classes.button}
          >
            upload
          </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
          >
            Status of Batches
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
