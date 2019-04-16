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
        var lN = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var pwd = document.getElementById("pwd").value;


        this.createUser(fN, lN, email, pwd, [], []);
      }

      createUser(first, last, user, pass, tools, qi) {
           return axios.post(proxyurl + "/api/admin/newuser", {
              name_first: first,
              name_last: last,
              username: user,
              password: pass,
              tools_auth: tools,
              qi_auth: qi
          })
          .then(function (response) {
          console.log(response);
          //console.log("user's tools!: " + response.data.tools_auth);
          //user_tools = response.data.tools_auth;

          })
          .catch(function (error) {
          console.log(error);
          })
      }

  render() {
    return (
      <form>
        <div className="form-group">
            <label>First Name:</label>
            <input type="text" className="form-control" id="firstName"/>
            <label>Last Name:</label>
            <input type="text" className="form-control" id="lastName"/>
            <label>User Name:</label>
            <input type="email" className="form-control" id="email"/>
            <label>Password:</label>
            <input type="password" className="form-control" id="pwd"/>
        </div>
        <button type="submit" onClick = {this.handleClick} className="btn btn-default">Submit</button>
      </form>
    );
  }
}

export default AddUser;