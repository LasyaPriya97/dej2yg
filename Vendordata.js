import React, { Component } from "react";
import { Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { vendorName: "vendordata", vendorId: "1", vendorNumber: "6779" },
        { vendorName: "xyz", vendorId: "1", vendorNumber: "6779" },
        { vendorName: "xyz1", vendorId: "2", vendorNumber: "6777" },
        { vendorName: "xyz2", vendorId: "3", vendorNumber: "6775" }
      ],
      open : false,
      selected:''
    };
  }
  handleOpen = () => {
    this.setState({open:true});
  }
  handleClose = () => {
    this.setState({open:false});
  }
  handleChange = event => {
    this.setState({selected:event.target.value});
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
      <Button color="primary" onClick={this.handleOpen}>vendor data</Button>
      <Dialog open={open} onClose={this.handleClose}>
      <DialogTitle>Select vendor</DialogTitle>
      <DialogContent>
      <InputLabel htmlfor="vendorData-dialog-native">vendorData</InputLabel>
      <Select
      native
      value={this.state.selected}
      onChange={this.handleChange}
      input = {<Input id="vendorData-dialog-native"/>}
      >
        {this.state.data.map(e1 => (
          <option value={e1.vendorName}>{e1.vendorName}</option>
        ))}
      </Select>
      </DialogContent>
      <DialogActions>
      <Button color="primary" onClick={this.handleClose}>cancel</Button>
      <Button color="primary" onClick={this.handleClose}>ok</Button>
      </DialogActions>
      </Dialog>
      </React.Fragment>
    );
  }
}
