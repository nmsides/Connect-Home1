import React, { Component } from "react";

import "./App.css"

class LoginBox extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
           <div id="loginBox">
                <div class="input-group">
                    <input type="text"  placeholder="Username" aria-label="" aria-describedby="basic-addon1"/>
                    <input type="text"  placeholder="Password" aria-label="" aria-describedby="basic-addon1"/>
                </div>
                <button type="button" class="btn btn-secondary">Left</button>
            </div>
        );
    }
}

export default LoginBox;