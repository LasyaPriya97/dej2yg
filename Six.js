import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RaisedButton from "@material-ui/Button";
import Link from "@material-ui/core/Link";
import Second from "./Second";

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

export default function simpleContainer(){
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="body1"> Hello,</Typography>
            <Typography
              variant="body1"
              align="center"
              className={classes.Toolbarbutton}
            >
              Arshiya Farzeen Avaran
            </Typography>
            <Button color="inherit"  onClick={e => {
            <div>
            <Typography variant="body1">please click <span><Link component="button" variant="body2">here</Link></span>to Login</Typography></div>}}>
              SignOut
            </Button>
          </Toolbar>
        </AppBar>
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


  
 