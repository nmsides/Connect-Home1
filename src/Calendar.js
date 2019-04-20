import React, { Component } from "react";
import axios from 'axios';
import './App.css'
let proxyurl;
let calarray=[];

class Calendar extends Component {
 
  constructor(props){
    super(props);

    this.state = {
      cal: [{
        name: "",
       type: "",
       size: "",
       base64: "",
      }]

    }

this.getCal = this.getCal.bind(this);

if (process.env.REACT_APP_BACKEND_HOST) { proxyurl = process.env.REACT_APP_BACKEND_HOST; }
else { proxyurl = "http://localhost:5000"; }
    
    //this.updateUserConfig = this.updateUserConfig.bind(this);

  }
 
  getCal() { 
    return axios.get(proxyurl + '/api/admin/calendar')
        .then(response => {
          
         this.response = response.data
            for(let i = 0; i < response.data.length; i++){
              calarray[i] = {name: response.data[i].name, type: response.data[i].type, size: response.data[i].size , base64: response.data[i].base64}
            console.log("test")

        }
        
        this.setState({cal: calarray})
        console.log(calarray)
    })
}

componentDidMount(){
   
  this.getCal();
  
}

 
  render() {
    return (
      <div>
        <iframe id="califrame" src={this.state.cal[0].base64} title={this.state.cal[0].name} target="_top"></iframe>
      </div>
    );
  }
}

export default Calendar;
