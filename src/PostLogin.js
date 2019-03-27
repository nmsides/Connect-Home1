import React, { Component } from "react";
import LoginBox from "./LoginBox";
import LoginButton from "./LoginButton"

class PostLogin extends Component{
    constructor(props){
        super(props);
      }
      render() {
          return (
              <div>
                  <div class = "row" id="preLogLogoDiv">
                      <div class = "col-sm-5">
                          <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                      </div>
                      <div class = "col-sm-4">
                          <div id="preInfoText">
                              <p class="text-black-50">Information: "Lorem ipsum dolor sit amcitation ullamco laboris nisi uodo cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                          </div>
                      </div>
                      <div class = "col-sm-3">
                          <h1>Welcome, ________ !</h1>
                      </div>
                  </div>
                  <div class = "row">
                      <div class = "mainFront" id="preLinks">
                        <div class="innerPic">
                          <img src = "./resources/stock1.jpg" class = "frontPagePic"></img>
                          <p>This is where the carousel will go</p>
                        </div>
                        <div class="verticalNav">
                          <ul class="nav flex-column">
                            <li class="nav-item preNavItem">
                              <a class="preLink" href="#">Overview</a>C
                            </li>
                            <li class="nav-item preNavItem">
                              <a class="preLink" href="#">Calendar</a>
                            </li>
                            <li class="nav-item preNavItem">
                              <a class="preLink" href="#">Connect-Home Transitional Care Tools and Resources</a>
                            </li>
                            <li class="nav-item preNavItem">
                              <a class="preLink" href="#">Quality Improvement Tools</a>
                            </li>
                            <li class="nav-item preNavItem">
                              <a class="preLink" href="#">Contact Information</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                  </div>



                  <div class = "row" id="provDiv">

                      <div class = "col-sm-12">

                          <h5>Accredited Providers</h5>
                          <div>
                              <ul class="nav nav-pills nav-justified">
                                  <li class="nav-item" >
                                      <img src = "./resources/Asset 2.svg" class = "provLogo"></img>
                                  </li>
                                  <li class="nav-item" >
                                      <img src = "./resources/Asset 2.svg" class = "provLogo"></img>
                                  </li>
                                  <li class="nav-item" >
                                      <img src = "./resources/Asset 2.svg" class = "provLogo"></img>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>


              </div>
          );
      }
}

export default PostLogin;
