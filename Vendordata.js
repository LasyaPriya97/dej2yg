import React, { Component } from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from 'prop-types';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});

export default class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {vendorName:"vendor",vendorId:1,vendorNumber:"6677"},
        {vendorName:"xyz",vendorId:2,vendorNumber:"5544"},
        {vendorName:"xyz1",vendorId:3,vendorNumber:"2233"},
        {vendorName:"xyz2",vendorId:4,vendorNumber:"1122"}
      ],
      open: false,
      selected: ""
    };
  }

  handleIsOpen = () => {
    this.setState({ open: true });
  };
  handleIsClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ selected: event.target.value });
  };
  /*componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }*/
  render() {
    const  classes   = this.props; 
     return (
      <React.Fragment>
       <Button color='primary' onclick={this.handleIsOpen}>VendorData</Button>
        <Dialog  open={open} onClose={this.handleIsClose}>
          <DialogTitle>Select vendor</DialogTitle>
          <DialogContent>
          <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel>vendorData</InputLabel>
            <Select
              native
              value={this.state.selected}
              onChange={this.handleChange}
              input={<Input id="vendorData-dialog-native" />}
            >
              {this.state.data.map(e1 => (
                <option value={e1.vendorName}>{e1.vendorName}</option>
              ))}
            </Select>
            </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.handleIsClose}>
              cancel
            </Button>
            <Button color="primary" onClick={this.handleIsClose}>
              ok
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
/*AppComponent.propTypes = {
  classes:PropTypes.object.isRequired,
};*/
