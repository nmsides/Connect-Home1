import React, { Component } from "react";
import axios from 'axios';
let proxyurl;

class ConfigureUsers extends Component {
  constructor(props) {
    super(props);
    if (process.env.REACT_APP_BACKEND_HOST) {
      proxyurl = process.env.REACT_APP_BACKEND_HOST; }
    else {
      proxyurl = "http://localhost:5000";
    }

    this.handleClick = this.handleClick.bind(this);

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

    handleClick(event) {
      var fN = document.getElementById("firstName").value;
      var lN = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var pwd = document.getElementById("pwd").value;

      this.createUser(fN, lN, email, pwd, [], []);
      document.getElementById("button1").text("newText");
    }


  render() {
    return(
      <div className = 'row'>

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

        <div className = 'col-sm-7'>
            <div class="custom-control custom-checkbox">
              <h3>Tools</h3>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
            </div>
            <div class="custom-control custom-checkbox">
              <h3>QI Tools</h3>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
              <div>
                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Check this custom checkbox</label>
              </div>
            </div>
          </div>
          <div className = 'col-sm-5'>

            <h3>Find User to Configure</h3>
            <div class="radio">
              <label><input type="radio" id="button1" name="optradio"/>Option 1</label>
            </div>
            <div class="radio">
              <label><input type="radio" name="optradio"/>Option 2</label>
            </div>
            <div class="radio disabled">
              <label><input type="radio" name="optradio"/>Option 3</label>
            </div>

          </div>
      </div>


    )
  }




}

export default ConfigureUsers;
