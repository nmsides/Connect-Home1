import React, { Component } from "react";
import LoginBox from "./LoginBox";
import LoginButton from "./LoginButton"


class PreLogin extends Component{
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
                        <LoginButton />
                    </div>
                </div>
                <div class = "row">
                    <div class = "col-sm-12" id="preLinks">
                        <ul class="nav nav-pills nav-justified" id = "preNav">
                            <li class="nav-item preNavItem" >
                                <a class="preLink" href="ContactUs.html">Contact Us</a>
                            </li>
                            <li class="nav-item preNavItem">
                                <a class="preLink" href="#!">Sponsors</a>
                            </li>
                            <li class="nav-item preNavItem">
                                <a class="preLink" href="#!">Publications</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class = "row">
                    <div class = "col-sm-5">
                        <img src = "./resources/stock1.jpg" class = "leftPrePic"></img>
                    </div>
                    <div class = "col-sm-7">
                        <div class = "rightPicDiv">
                            <div >
                                <div class = "rightPicDivTxt">
                                    <h4 >Lorem Ipsum</h4>
                                    <p >
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class = "row">
                    <div class = "col-sm-7">
                        <div class = "leftPicDiv">
                            <div >
                                <div class = "rightPicDivTxt">
                                    <h4 >Lorem Ipsum</h4>
                                    <p >
                                    Some quick example text to build on the card title
                                    and make up the bulk of the card's content.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "col-sm-5">
                        <img src = "./resources/stock1.jpg" class = "rightPrePic"></img>
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

export default PreLogin;