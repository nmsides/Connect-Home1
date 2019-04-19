import React, { Component } from "react";
import axios from 'axios';
import './App.css'
const base64 = require('base64topdf');
let decodedBase64;
let a;
let proxyurl;
let b;
let qiarray=[];

class QITools extends Component {

  constructor(props){
    super(props);

    this.state = {
      qi: [{
        name: "",
       type: "",
       size: "",
       key: "",
       base64: "",
      }]

    }

this.getTools = this.getTools.bind(this);

if (process.env.REACT_APP_BACKEND_HOST) { proxyurl = process.env.REACT_APP_BACKEND_HOST; }
else { proxyurl = "http://localhost:5000"; }
    
    //this.updateUserConfig = this.updateUserConfig.bind(this);

  }

  getTools() { //This returns ALL tools name + keys
    return axios.get(proxyurl + '/api/admin/qi')
        .then(response => {
          // a = response.data[0].base64;
          // b = response.data[0].name;
          // console.log(response.data)
          //console.log(b)
         this.response = response.data
            for(let i = 0; i < response.data.length -1; i++){
              qiarray[i] = {name: response.data[i].name, type: response.data[i].type, size: response.data[i].size , key: response.data[i].key, base64: response.data[i].base64}
            console.log(qiarray)

        }
        //decodedBase64 = base64.base64Decode(a, b);
        this.setState({qi: qiarray})
        console.log(qiarray)
    })
}
  componentDidMount(){
   
    this.getTools();
    // console.log(this.b);
    // console.log(qiarray[0].base64)
    
   // decodedBase64 = base64.base64Decode(this.a, this.b);
  }
  

  render() {
    return (
      <div>
        <iframe id="qiiframe" src={this.state.qi[0].base64} title="pdf" target="_top"></iframe>
        <a href={this.state.qi[0].base64} target = "_blank">Link</a>
        <h1>QI Tools Go Here{this.props.username}</h1>
      </div>
    );
  }
}
export default QITools;
