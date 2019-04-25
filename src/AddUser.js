import React, { Component } from "react";
import axios from 'axios';
let proxyurl;
class AddUser extends Component {
  constructor(props) {
    super(props);

      if (process.env.REACT_APP_BACKEND_HOST) {
        proxyurl = process.env.REACT_APP_BACKEND_HOST; }
      else {
        proxyurl = "http://localhost:5000";
      }

      this.handleClick = this.handleClick.bind(this);

      }
      
      handleClick(event) {
        var fN = document.getElementById("firstName").value;
        var email = document.getElementById("email").value;
        var pwd = document.getElementById("pwd").value;
        var goal = document.getElementById("goal").value; 
        var parties = document.getElementById("parties").value;


        this.createUser(fN, email, pwd, [], [], goal, parties);
      }

      createUser(first, user, pass, tools, qi, goal, parties) {
           return axios.post(proxyurl + "/api/admin/newuser", {
              name: first,
              username: user,
              password: pass,
              tools_auth: tools,
              qi_auth: qi, 
              goal: goal, 
              participants: parties
          })
          .then(function (response) {
          console.log(response);
          //console.log("user's tools!: " + response.data.tools_auth);
          //user_tools = response.data.tools_auth;
          window.alert("New User Created!");
          })
          .catch(function (error) {
          console.log(error);
          })
         
      }

  render() {
    return (
      <form>
        <div className="form-group">
            <label>Client Name:</label>
            <input type="text" className="form-control" id="firstName"/>
            <label>Username:</label>
            <input type="email" className="form-control" id="email"/>
            <label>Password:</label>
            <input type="password" className="form-control" id="pwd"/>
            <label>Project Goal:</label>
            <input type="goal" className="form-control" id="goal"/>
            <label>Collaborative Participants:</label>
            <input type="parties" className="form-control" id="parties"/>
        
        </div>
        <button type="submit" onClick = {this.handleClick} className="btn btn-default">Create User</button>
      </form>
    );
  }
}

export default AddUser;
