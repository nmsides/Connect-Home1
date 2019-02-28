import React, { Component } from "react";

import "./App.css"

class LoginBox extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            
           <div id="loginBox">
                <div class="input-group" id = "logInput">
                    {/* <img src="stock-profile.jpg"/> */}
                    
                    <input type="text"  placeholder="Email" aria-label="" aria-describedby="basic-addon1"/>
                    <input type="text"  placeholder="Password" aria-label="" aria-describedby="basic-addon1"/>
                    <button type="button" class="btn" id="loginBtn">Login</button>
                </div>
                
            </div>
        );
    }
}

export default LoginBox;