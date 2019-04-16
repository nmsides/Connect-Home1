import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Overview from "./Overview";
import ContactInformation from "./ContactInformation";
import ToolsAndResources from "./ToolsAndResources"
import QITools from "./QITools"
import Calendar from "./Calendar"
import HomeCarousel from "./HomeCarousel"

class PostLogin extends Component{
    constructor(props){
        super(props);
      }

      componentWillMount(){
        console.log("loaded post login");
        console.log(this.props.user);
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
                      <div className = "col-sm-3">
                          <h1>Welcome, {this.props.name} !</h1>
                      </div>
                  </div>
                  <HashRouter>
                     <div className = 'row'>
                         <div className = 'col-sm-5 preLinks'>
                           <ul className="verticalNav nav flex-column">
                             <li><NavLink className="nav-item preNavItem preLink" exact to="/">Home</NavLink></li>
                             <li><NavLink className="nav-item preNavItem preLink" to="/Overview">Overview</NavLink></li>
                             <li><NavLink className="nav-item preNavItem preLink" to="/Calendar">Calendar</NavLink></li>
                             <li><NavLink className="nav-item preNavItem preLink" to="/ToolsAndResources">Tools and Resources</NavLink></li>
                             <li><NavLink className="nav-item preNavItem preLink" to="/QITools">QI Tools</NavLink></li>
                             <li><NavLink className="nav-item preNavItem preLink" to="/ContactInformation">Contact Information</NavLink></li>

                           </ul>
                         </div>

                         <div className = 'col-sm-12'>
                            <Route exact path="/" component={Overview}/>
                            <Route path="/Overview" component={Overview}/>
                            <Route path="/Calendar" component={Calendar}/>
                            <Route path="/ToolsAndResources" component={ToolsAndResources}/>
                            <Route path="/QITools" component={QITools}/>
                            <Route path="/ContactInformation" component={ContactInformation}/>

                          </div>
                     </div>

                     </HashRouter>

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
