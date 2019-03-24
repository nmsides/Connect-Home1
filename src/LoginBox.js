import React, { Component } from "react";
import axios from 'axios';
import "./App.css"


const proxyurl = "https://cors-anywhere.herokuapp.com/";
var u;

const state = {
    u: "",
    p: ""
}

class LoginBox extends Component{
    constructor(props){
        super(props);
        //  this.handleClick = this.handleClick.bind(this);
        this.checkUserName = this.checkUserName.bind(this);
      }

      checkUserName(){
        // if(document.getElementById('1').placeholder == username){
        //     console.log("true")
        // }
        console.log(this.getNameById());
        console.log(this.state.u);
        if(this.state.u == "jspw") console.log("true");
      }

      componentDidMount() {
        //   this.checkUserName();
        // axios.get(proxyurl + "https://connect-home.herokuapp.com/api/users/")
        // .then(json => this.getName());
        this.getNameById();
      }

     getName = async () => {
       let u = axios.get(proxyurl + "https://connect-home.herokuapp.com/api/users/")
        .then(json => json.data[0].credentials.username);
        return u;
     }

     getNameById() {
        return axios.get(proxyurl + "https://connect-home.herokuapp.com/api/users/")
            .then(response => {
              this.response = response.data;
              this.setState({u: this.response[0].password})
              return this.response[0].username});
        }

    render(){
        return (
            
            <div id="loginBox">
                 <div className="input-group" id = "logInput">
                     {/* <img src="stock-profile.jpg"/> */}
                     
                     <input type="text"  id='1' placeholder="Email" aria-label="" aria-describedby="basic-addon1"/>
                     <input type="text"  placeholder="Password" aria-label="" aria-describedby="basic-addon1"/>
                     <button type="button" className="btn" id="loginBtn" onClick={this.checkUserName}>Login</button>
 
                     </div>
 
                 </div>
                 
             
         
         );
    }
    }
   
  
     
    

   
    

export default LoginBox;