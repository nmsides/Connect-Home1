import React, { Component } from "react";
import LoginBox from "./LoginBox";


class PreLogin extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
            <div>
                <div class = "row" id="preLogLogo">
                    <div class = "col-sm-6">
                        <img src="./Resources/Asset1.svg" id = 'mainLogo'></img>
                    </div>
                    <div class = "col-sm-6">
                        <LoginBox />
                    </div>
                </div>
                <div class = "row">
                    <div class = "col-sm-12" id="preLinks">
                        <ul class="nav nav-pills nav-justified" id = "preNav">
                            <li class="nav-item preNavItem">
                                <a class="nav-link preLink" href="#!">About Mark</a>
                            </li>
                            <li class="nav-item preNavItem" >
                                <a class="nav-link preLink" href="#!">Contact Us</a>
                            </li>
                            <li class="nav-item preNavItem">
                                <a class="nav-link preLink" href="#!">Sponsors</a>
                            </li>
                            <li class="nav-item preNavItem">
                                <a class="nav-link preLink" href="#!">Publications</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class = "row">
                    <div class = "col-sm-3"></div>
                    <div class = "col-sm-6">
                        <p class="text-body">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    </div>
                    <div class = "col-sm-3">
                    </div>
                </div>
            </div>
        );
    }
}

export default PreLogin;