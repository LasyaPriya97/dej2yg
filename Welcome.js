import React, { Component } from 'react';
import render from 'react-dom';
import  First  from './First';

export default class Welcome extends Component{
  state={step:1}

    nextStep = () =>{
      const { step } =this.state;
      this.setState({
        step:step+1
      });
    }

  render(){
    const { step } = this.state;
    switch(step){
        case 1:
           return(
        <First 
        nextStep={this.nextStep}/>
           );
         case 2:  
         return <h1> Second </h1> ;
         case 3:
         return <h1> Third </h1>;
  }
  return (
    <div> <h1> Hello</h1>
    </div>
  );
  }
}