import React, { Component } from "react";



export default class AppComponent extends Component {
  constructor(){
    super();
     this.state={ data : [
       {"vendorname":"vendordata","vendorid":"1","vendornumber":"6779"},
       {"vendorname":"xyz","vendorid":"1","vendornumber":"6779"},
       {"vendorname":"xyz1","vendorid":"2","vendornumber":"6777" },
       {"vendorname":"xyz2","vendorid":"3","vendornumber":"6775"}
     ]};    
      
  }   
  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(json=>this.setState({data:json}));
  }
  
    
 render() {
    return (
      <div className="drop-down">
        <select>
        {this.state.data.map(e1 => (
            <option  value={e1.value}>{e1.vendorname}</option>
          ))}
          </select>
      </div>
    );
  }
}
