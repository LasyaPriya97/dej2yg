import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Select } from "@material-ui/core";

export default class AppComponent extends Component {
  vendor = [
    { name: "xyz", id: 1, number: 12344 },
    { name: "xyz1", id: 2, number: 45678 },
    { name: "xyz2", id: 3, number: 23456 }
  ];
  state = { 
    value: { name: "xyz", id: 1, number: 12344 }
      };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  render() {
    return (
      <div>
          <Select>
            
            </Select>
          
      </div>
    );
  }
}
