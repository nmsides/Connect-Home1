import React, { Component } from "react";
import axios from 'axios';
let proxyurl;


class Overview extends Component {
  constructor(props) {
    super(props);

      if (process.env.REACT_APP_BACKEND_HOST) {
        proxyurl = process.env.REACT_APP_BACKEND_HOST; }
      else {
        proxyurl = "http://localhost:5000";
      }
      
      this.state = {
      goal: "",
      party: "" 
    }

      this.getUserInfo = this.getUserInfo.bind(this);

      }
    
    
    getUserInfo() { 
        return axios.get(proxyurl + "/api/users")
            .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++){
               if(response.data[i]._id === this.props.user){
                   let a = response.data[i].goal;
                   let b = response.data[i].participants; 
                   this.setState({goal: a, party: b})
                   break;
            }

            }
          })
        
    }
    
    componentDidMount() {
      this.getUserInfo();
    }
    
  render() {
    return (
      <div>
          <h2>Project Goal</h2>
            <p>{this.state.goal}</p>
          <h2>Collaborative Participants</h2>
            <p>{this.state.party}</p>
      </div>
    );
  }
}

export default Overview;
