import React, { Component } from "react";

import "./App.css"

class LoginButton extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            
           <div>
                <button id="loginBtn" >Partner Login</button>
            </div>
        );
    }
}

export default LoginButton;