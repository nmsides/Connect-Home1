import React, { Component } from 'react';
// import './App.css';
import LoginBox from './LoginBox';
import PostLogin from './PostLogin';
import Admin from './Admin';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class PreLogin extends Component{
    constructor(props){
        super(props);

      }
    render() {
        return (
            <div>
                {/* <div className = "row" id="preLogLogoDiv">
                    <div className = "col-sm-5">
                        <img src="./Resources/Asset 2.svg" id = 'mainLogo'></img>
                    </div>
                    <div className = "col-sm-4">
                        <div id="preInfoText">
                            <p className="text-black-50">Information: "Lorem ipsum dolor sit amcitation ullamco laboris nisi uodo cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className = "col-sm-3">
                        
                    </div>
                 </div> */}
                <div className = "row">
                 
                    <div className = "mainFront" id="preLinks">
                      <div className="innerPic">
                        <img src = "./resources/stock1.jpg" className = "frontPagePic"></img>
                        <p>This is where the carousel will go</p>
                      </div>
                      <div className="verticalNav">
                        <ul className="nav flex-column">
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">Understanding Connect Home</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">Services and Supports</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">News</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">About Us</a>
                          </li>
                          <li className="nav-item preNavItem">
                            <a className="preLink" href="#">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>



                <div className = "row" id="provDiv">

                    <div className = "col-sm-12">

                        <h5>Accredited Providers</h5>
                        <div>
                            <ul className="nav nav-pills nav-justified">
                                <li className="nav-item" >
                                    <img src = "./resources/Asset 2.svg" className = "provLogo"></img>
                                </li>
                                <li className="nav-item" >
                                    <img src = "./resources/Asset 2.svg" className = "provLogo"></img>
                                </li>
                                <li className="nav-item" >
                                    <img src = "./resources/Asset 2.svg" className = "provLogo"></img>
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
