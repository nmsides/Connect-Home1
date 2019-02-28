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
                    <div class="spacing-div">
                    </div>
                    <input type="text"  placeholder="Username" aria-label="" aria-describedby="basic-addon1"/>
                    <input type="text"  placeholder="Password" aria-label="" aria-describedby="basic-addon1"/>
                </div>
                <button type="button" class="btn btn-secondary">Login</button>
            </div>
        );
    }
}

export default LoginBox;