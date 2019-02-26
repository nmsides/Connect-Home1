import React, { Component } from "react";


class PreLogin extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div>
                <div class = "row">
                    <div class = "col-sm-12">
                        <img src="./Resources/Asset1.svg" id = 'mainLogo'></img>
                    </div>
                </div>
                <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Sponsors</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Publications</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PreLogin;