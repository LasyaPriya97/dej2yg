import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import RaisedButton from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

const options = ["vendor name", "xyz", "xyz1", "xyz2", "xyz3"];
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


export default function simpleContainer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

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
          <Button color="inherit" className={classes.Toolbarbutton}>
            signout
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
          <ButtonGroup
            variant="contained"
            color="inherit"
            ref={anchorRef}
            aria-label="split button"
          >
            <Button>{options[selectedIndex]}</Button>
            <Button
              color="default"
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              onClick={handleToggle}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={event => handleMenuItemClick(event, index)}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    </div>
  );
}
