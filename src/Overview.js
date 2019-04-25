import React, { Component } from "react";
import axios from 'axios';
let proxyurl;
let projgoal; 
let party; 

class Overview extends Component {
  constructor(props) {
    super(props);

      if (process.env.REACT_APP_BACKEND_HOST) {
        proxyurl = process.env.REACT_APP_BACKEND_HOST; }
      else {
        proxyurl = "http://localhost:5000";
      }

      this.getUserInfo = this.getUserInfo.bind(this);

      }
    
    
    getUserInfo() { //RN, this.props.user is UNDEFINED. 
        return axios.get(proxyurl + "/api/users")
            .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++){
               if(response.data[i]._id === this.props.user){
                   projgoal = response.data[i].goal;
                   party = response.data[i].participants; 
                   break;
            }

            }
          })
    }
    
    componentDidMount() {
      console.log(this.props.user)
        this.getUserInfo();
    }
    
  render() {
    return (
      <div>
          <h2>Project Goal</h2>
            <p>Project Goal Here</p>
          <h2>Collaborative Participants</h2>
            <ul>
                <li>Participants</li>
                <li>Participants</li>
                <li>Participants</li>
            </ul>
      </div>
    );
  }
}

export default Overview;
