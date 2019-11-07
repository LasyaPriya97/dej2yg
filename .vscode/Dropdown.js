import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';

export default class AppContainer extends Component{
   vendor=[
         { vendorname :"xyz",vendorid :1,vendornumber :1234 },
         { vendorname :"xyz1",vendorid :2,vendornumber :56778 },
         { vendorname :"xyz2",vendorid :3,vendornumber :76464 }
         ];
   state={
     value: { vendorname:"xyz",vendorid:1,vendornumber:1234 }
   };
   handleChange = (event) => {
     this.setState({value: event.target.value});
   } 
   render(){
     return(
       <div>
       <Button
                    data={this.vendor}
                    textField="text"
                    dataItemKey="id"
                    value={this.state.value}
                    onChange={this.handleChange}
                >vendordata</Button>

       </div>
     )
   }   

} 