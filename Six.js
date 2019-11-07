import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function simpleApp() {
  return (
    <BrowserRouter>
      <div>
        <Typography variant="body1" align="center">
          Please click to login <br/>
          <span>
            <Link to='/' onClick={()=> window.open()}>here</Link>
          </span>
        </Typography>
      </div>
    </BrowserRouter>
  );
}
