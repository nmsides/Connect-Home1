import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import "./App.css"
import LoginBox from './LoginBox';

class LoginButton extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            
           <div>
                <button id="loginBtn" ><NavLink exact to="/LoginBox">Login</NavLink></button>
                <div>
                    <Route exact path="/LoginBox" component={LoginBox}/>
                </div>
            </div>
            
        );
    }
}

export default LoginButton;