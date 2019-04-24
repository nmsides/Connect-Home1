import React, { Component } from "react";
import axios from 'axios';
import './App.css'

const base64 = require('base64topdf');
let decodedBase64;
let a;
let proxyurl;
let b;
let toolsArray=[];

class ToolsAndResources extends Component {

  constructor(props){
    super(props);

    this.state = {
      // qi: [{
      //   name: null,
      //  type: null,
      //  size: null,
      //  key: null,
      //  base64: null,
      // }],
      // item: this.props.item

    }

this.getTools = this.getTools.bind(this);
this.log = this.log.bind(this);

if (process.env.REACT_APP_BACKEND_HOST) { proxyurl = process.env.REACT_APP_BACKEND_HOST; }
else { proxyurl = "http://localhost:5000"; }
    
    //this.updateUserConfig = this.updateUserConfig.bind(this);

  }

  log(){
    // this.setState({qi:})
    console.log(this.props.item)
    console.log(this.state.tools)
    
  }

  getTools() { //This returns ALL tools name + keys
    return axios.get(proxyurl + '/api/admin/tools')
        .then(response => {
         this.response = response.data
            for(let i = 0; i < response.data.length; i++){
              toolsArray[i] = {name: response.data[i].name, type: response.data[i].type, size: response.data[i].size , key: response.data[i].key, base64: response.data[i].base64}
        }
        //decodedBase64 = base64.base64Decode(a, b);
        this.setState({tools: toolsArray})
        console.log(toolsArray)
        console.log(this.props.item)
    })
}
  componentDidMount(){
   console.log(this.props.item)
    this.getTools();
    console.log(this.props.item)
  }
  

  render() {
    return (
      <div>
        {this.log()}
        {this.state && this.state.tools &&
        <iframe id="qiiframe" src={this.state.tools[this.props.item].base64} name={this.state.tools[this.props.item].name} target="_top"></iframe>}
        
      </div>
    );
  }
}
export default ToolsAndResources;
