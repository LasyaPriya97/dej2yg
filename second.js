import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import RaisedButton from '@material-ui/core/Button';
import Button from  '@material-ui/core/Button';


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
    <Typography variant="h3" color='inherit' align="center"> Choose file to Upload</Typography>
    <Box p={3} bgcolo="background.paper">
    </Box>
    <Grid container>
    <Grid item xs={12} align="center">
    <RaisedButton
       containerElement='label' // <-- Just add me!
         label='My Label'>
       <input type="file" accept=".csv"/>
      </RaisedButton>
      <br/>
       (please upload .csv file)
      <br/>
       <Button variant="contained" color="primary" className={classes.button}>Upload</Button>
      </Grid>
    </Grid>
    
    </div>
  )

}