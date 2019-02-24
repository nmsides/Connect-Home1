import React, { Component } from "react";


class PreLogin extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <a class="nav-link active" href="#!">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#!">Longer nav link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#!">Link</a>
                </li>
            </ul>
        );
    }
}

export default PreLogin;