import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RaisedButton from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({
  root:{
    flexgrow:1,
  },
  button:{
    margin: theme.spacing(1),
    size: "medium"
  }
}));

export default function simpleContainer(){
  const classes=useStyles();
  return (
    <div className={classes.root}>
    <Typography variant="h3" color='textPrimary' align="center"> Choose file to Upload</Typography>
    <Grid container>
    <Grid item xs={12} align="center">
    <RaisedButton
       containerElement='label' // <-- Just add me!
         label='My Label'>
       <input type="file" />
       </RaisedButton>
      
    </Grid>
    </Grid>
    </div>
  )

}