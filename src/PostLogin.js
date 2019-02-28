import React, { Component } from "react";


class PostLogin extends Component{
    constructor(props){
        super(props);
      }
    render() {
        return (
           <div> 
               <div class = "row" id = "postLogoDiv">
                    <div class = "col-sm-12">
                        <img src="./Resources/Asset1.svg" id = 'postMainLogo'></img>
                    </div>
                </div>
            <div class = "row">
                <div class = "col-sm-12">
                    <div class = "row">
                        <div class = "col-sm-6">
                            <div class = "row">
                                <ul class="nav nav-pills nav-justified" id="postTopNav">
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
                            <div class = "row">
                                <ul class="nav nav-pills nav-justified" id="postTopNav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#!">Tools</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#!">Calendar</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#!">QI Meetings</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class = "col-sm-6">
                            <div class="list-group">
                                <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small>3 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                </a>
                                <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small class="text-muted">Donec id elit non mi porta.</small>
                                </a>
                                <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                    </div>
                                    <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                    <small class="text-muted">Donec id elit non mi porta.</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            

        </div>
        
        );
    }
}

export default PostLogin;