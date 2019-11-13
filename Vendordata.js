import React, { Component } from "react";
import { Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';

export default class AppComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { vendorName: "vendordata", vendorid: "1", vendornumber: "6779" },
        { vendorName: "xyz", vendorid: "1", vendornumber: "6779" },
        { vendorName: "xyz1", vendorid: "2", vendornumber: "6777" },
        { vendorName: "xyz2", vendorid: "3", vendornumber: "6775" }
      ],
      open:false,
      selected:''
    };
  }
  handleOpen = event => {
    this.setState({open:true});
  }
  handleClose = event => {
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
    return (
      <React.Fragment>
      <Button color="primary" variant="outlined" onClick={this.handleOpen}>vendor list</Button>
      <Dialog open={open} onClose={this.handleClose} onOpen={this.handleOpen}>
      <DialogTitle id="VendorData-native-select">Select vendor</DialogTitle>
      <DialogContent>
      <InputLabel html for="vendorData-native-select">vendorData</InputLabel>
      <Select
      native
      value={this.state.selected}
      onChange={this.handleChange}>
        {this.state.data.map(e1 => (
          <option value={e1.vendorName}>{e1.vendorName}</option>
        ))}
      </Select>
      <dialogContent>
      </Dialog>
      </React.Fragment>
    );
  }
}
