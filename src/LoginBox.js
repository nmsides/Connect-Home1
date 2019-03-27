import React, { Component } from "react";
import axios from 'axios';
import "./App.css"


const proxyurl = "https://cors-anywhere.herokuapp.com/";
let allUsers;
let userNameInput;
let successfulLogin;


//Array.prototype.contains = function(element){
//    return this.indexOf(element) > -1;
//};

class LoginBox extends Component{

    constructor(props){ //react standard
        super(props);

        this.state = {
            u: "",
            p: "",
            all: "",
            isLoggedIn: false
        }

        this.checkUserName = this.checkUserName.bind(this); //react must bind this
      }

      checkUserName(){
        //let userNameInput = document.getElementById("userNameInput").value;
        this.getUserNames();
        
      }

      componentDidMount() {
        console.log(this.state.isLoggedIn)
        this.loadUsers();
      }

      componentDidUpdate(){
          console.log('updated');
      }
      

     loadUsers() {
        return axios.get(proxyurl + "https://connect-home.herokuapp.com/api/users/")
            .then(response => {
              this.response = response.data;
              this.setState({all: this.response})
              let allUsers = this.state.all;
              //console.log(allUsers)
              return this.response[0].username});
        }

    getUserNames(){
            let userNameInput = document.getElementById("userNameInput").value;
            let passwordInput = document.getElementById("passwordInput").value;
            return axios.get(proxyurl + "https://connect-home.herokuapp.com/api/users/")
            .then(response => {
            this.response = response.data;
            for(let i = 0; i < response.data.length; i++){
               if(response.data[i].username == userNameInput){
                   console.log("username in list")
                   if(response.data[i].password == passwordInput){
                       console.log("password correct");
                       let successfulLogin = true;
                       this.setState({isLoggedIn: true})
                       break; //listen to the state and then load new page 
                   }else{
                       console.log("password incorrect");
                       break;
                   }
               }else{
                   console.log("username not found");
                //    break;
               }
                //console.log(response.data)
                console.log(this.state.all[i].password)
            }
           
            // store a variable from here and then get it in another page (props?)
            return this.response.data});
        }


    render(){
        return (
            <div id="loginBox">
                 <div className="input-group" id = "logInput">
                     {/* <img src="stock-profile.jpg"/> */}
                     
                     <input type="text"  id='userNameInput' placeholder="Email" />
                     <input type="text"  placeholder="Password" id='passwordInput'/>
                     <button type="button" className="btn" id="loginBtn" onClick={this.checkUserName}>Login</button>
 
                     </div>
                    {/* <this.successLog/> */}
                 </div>
         );
    }
    }

   
    

export default LoginBox;