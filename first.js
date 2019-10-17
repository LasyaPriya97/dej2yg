import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
   Toolbarbutton:{
    marginLeft: 'auto',
  },
  button:{
    size:'medium',
    margin :theme.spacing(1),
  }
  
}));


export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar position="static">
    <Toolbar>
    <Button color="inherit" className={classes.Toolbarbutton}>Signout</Button>
    </Toolbar>
    </AppBar>
       <Typography variant="h3"> Hello,
        </Typography> 
        <br/>
        <Typography variant="h4" align='center'> Arshiya Farzeen Avaran
        </Typography>
        <br/>
        <Grid container>
        <Grid item xs={12} align="center"> 
        <Button variant="contained"  color="default" className={classes.button}  onClick={window.location.assign('./second.js')}>Download Item Templates</Button>
        <Button variant="contained"  color="default" className={classes.button}>upload</Button> 
        <Button variant="contained"  color="default" className={classes.button}>Status of Batches</Button>
        </Grid>
        </Grid>
        </div>
    );
}
