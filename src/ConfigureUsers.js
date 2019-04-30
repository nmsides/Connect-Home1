import React, { Component } from "react";
import axios from 'axios';
let proxyurl;
let usersArray = [];
let toolsArray = []; 
let qiArray = [];

class ConfigureUsers extends Component {
  constructor(props) {
    super(props);
    if (process.env.REACT_APP_BACKEND_HOST) {
      proxyurl = process.env.REACT_APP_BACKEND_HOST; }
    else {
      proxyurl = "http://localhost:5000";
    }


    this.getTools = this.getTools.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.getCheckedBoxes = this.getCheckedBoxes.bind(this);
    this.updateArrays = this.updateArrays.bind(this);
    this.getQI = this.getQI.bind(this);

    this.state = {
            users: [{id: "",
                    username: "",
                    password: ""
          }], 
              tools: [{name: ""
          }], 
                qi: [{name: ""
          }]
            }
  }

  componentDidMount() {
    this.getTools();
    this.getUsers();
    this.getQI();
  }
    createUser(first, user, pass, tools, qi) {
         return axios.post(proxyurl + "/api/admin/newuser", {
            name: first,
            username: user,
            password: pass,
            tools_auth: tools,
            qi_auth: qi
        })
        .then(function (response) {
        console.log(response);

        })
        .catch(function (error) {
        console.log(error);
        })
    }

    handleClick(event) {
      var fN = document.getElementById("firstName").value;
      var email = document.getElementById("email").value;
      var pwd = document.getElementById("pwd").value;

      this.createUser(fN, email, pwd, [], []);
      document.getElementById("button1").text("newText");
    }

    getTools() {
        return axios.get(proxyurl + "/api/admin/tools")
        .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++) {
                toolsArray[i] = {name: response.data[i].name};
                
            }
            this.setState({tools: toolsArray});
        });
        
      }

      updateArrays(id, tools, qis) {
                return axios.put(proxyurl + '/api/admin/user', {
                    _id: id,
                    tools_auth: tools,
                    qi_auth: qis
                })
                .then(function(response) {
                    console.log(response);
                })
            }
          
    getQI() {
        return axios.get(proxyurl + "/api/admin/qi")
        .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++) {
                qiArray[i] = {name: response.data[i].name};
                
            }
            this.setState({qi: qiArray});
        });
        
      }

    getUsers() {
        return axios.get(proxyurl + "/api/users")
        .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++) {
                usersArray[i] = {id: response.data[i]._id, username: response.data[i].username, password: response.data[i].password};
                
            }
            this.setState({users: usersArray});
        });
        
      }
      

      // Pass the checkbox name to the function
      getCheckedBoxes(chkboxName) {
            var checkboxes = document.getElementsByName(chkboxName);
            var checkBoxesChecked = [];
            for (var i=0; i<checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                  checkBoxesChecked.push(checkboxes[i]);
              }
            }
            return checkBoxesChecked.length > 0 ? checkBoxesChecked : null;
    }

    handleClick(event) {
      var checkboxes = document.getElementsByName("tool");
            var checkBoxesChecked = [];

            for (var i=0; i<checkboxes.length; i++) {
              if (checkboxes[i].checked) {
                  checkBoxesChecked.push(checkboxes[i].id);
              }
            }
            console.log(checkBoxesChecked);

        var radioButton = document.getElementsByName("radioButton");
        var myUser = "";
        var userNamePrint = "";
        for (var i=0; i<radioButton.length; i++) {
          if (radioButton[i].checked) {
              myUser = radioButton[i].id;
              userNamePrint = radioButton[i].username;

          }
        }
        console.log(myUser);
        

        var qiTools = document.getElementsByName("qiButton");
        var qiToolsChecked = [];
        for (var i=0; i<qiTools.length; i++) {
          if (qiTools[i].checked) {
              qiToolsChecked.push(qiTools[i].id);
          }
        }

        return axios.put(proxyurl + '/api/admin/user', {
                      _id: myUser,
                      tools_auth: checkBoxesChecked,
                      qi_auth: qiToolsChecked
                  })
                  .then(function(response) {
                      alert("Submitted changes for user");

                  })

        

    }


    
  render() {
    return(
        
      <div id="toolsContainer">
        <h3>Select User</h3>
        <ul>
          {this.state.users.map(item=>(
            <div>
                     <input type="radio" name="radioButton" id={item.id}/>
                     <label>{item.username + " (pw: " + item.password + ")"}</label>
                 </div>
          )
          )}
          </ul>
        <h3>Select Connect-Home Tools/Resources for user</h3>
        <ul>
          {this.state.tools.map(item=> (
            <div>
               <input type="checkbox" name="tool" id={item.name}/>
               <label>{item.name}</label>
            </div>
          )
        )}
        </ul>
        
        <h3>Select QI Tools for user</h3>
        <ul>
          {this.state.qi.map(item=>(
            <div>
                     <input type="checkbox" name="qiButton" id={item.name}/>
                     <label>{item.name}</label>
                 </div>
          )
          )}
          </ul>
          <button id = "toolsButton" type="button" onClick={this.handleClick}>Update User Docs</button>

      </div>
    );
  }
}

export default ConfigureUsers;

