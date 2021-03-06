import React, { Component } from "react";
import axios from 'axios';
import "./App.css"


let allUsers;
let userNameInput;
let successfulLogin;
let thisUser;
let url;



class LoginBox extends Component{
    constructor(props){ //react standard
        super(props);

        if (process.env.REACT_APP_BACKEND_HOST) {
          url = process.env.REACT_APP_BACKEND_HOST;
        } else {
          url = "http://localhost:5000";
        }

        this.state = {
            u: "",
            p: "",
            all: "",
            isLoggedIn: false
        }

        this.checkUserName = this.checkUserName.bind(this); //react must bind this
        this.loadUsers = this.loadUsers.bind(this);
      }

      checkUserName(){
        this.getUserNames();

      }

      componentDidMount() {
        console.log(this.state.isLoggedIn)
        this.loadUsers();
      }

      componentDidUpdate(){
          //console.log('updated');
      }


     loadUsers() {
        return axios.get(url + "/api/users")
            .then(response => {
              this.response = response.data;
              this.setState({all: this.response})
              let allUsers = this.state.all;
              return this.response[0].username});
        }

    getUserNames(){
        
            let userNameInput = document.getElementById("userNameInput").value;
            let passwordInput = document.getElementById("passwordInput").value;
            return axios.get(url + "/api/users")
            .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++){
               if(response.data[i].username === userNameInput){
                   console.log("username in list")
                   if(response.data[i].password === passwordInput){
                       console.log("password correct");
                       let successfulLogin = true;
                       this.setState({isLoggedIn: true})
                       this.props.loginAttempt();
                       thisUser = response.data[i]._id; //Added to then pass to new page
                       break; //listen to the state and then load new page
                   }else{
                       console.log("password incorrect");
                       break;
                   }
               }else{
                   console.log("username not found");
                //    break;
               }
            }

            // store a variable from here and then get it in another page (props?)
            return this.response.data});
        }


// <Component username = {this.state.username} // or this.props.username
    render(){
        return (
            <div id="loginBox">
                 <div className="input-group" id = "logInput">
                     {/* <img src="stock-profile.jpg"/> */}

                     <div><input type="text"  id='userNameInput' placeholder="Username" /></div><br></br>
                     <div><input type="password"  placeholder="Password" id='passwordInput'/></div>
                     <button type="button" className="btn" id="loginBtn" onClick={this.checkUserName}>Login</button>

                     </div>
                     <p className = 'text-black-50' id="loginBoxInfo">Provide your personal username and password provided by Connect-Home to access the client portal. 
                         If you need assistance logging in or have forgotten your username or password, please contact
                          Mark Toles. 
                    </p>
                    {/* <this.successLog/> */}
                 </div>
         );
    }
    }




export default LoginBox;
