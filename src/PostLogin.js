import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Overview from "./Overview";

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
                    <Nav fill variant="tabs" defaultActiveKey="/home">
                      <Nav.Item>
                        <Nav.Link exact to="/">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link to="/LoginBox">Calendar</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link to="link-1">Tools/Resources</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link to="link-1">QI Tools</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link to="link-1">Contact Information</Nav.Link>
                      </Nav.Item>
                  </Nav>
                  
                    <div className = 'col-sm-12'>
                       <Route exact path="/" component={Overview}/>
                       <Route path="/LoginBox" component={Overview}/>
                       <Route path="/Understand" component={Overview}/>
                       <Route path="/Services" component={Overview}/>
                       <Route path="/News" component={Overview}/>
                       <Route path="/About" component={Overview}/>
                       <Route path="/contact" component={Overview}/>
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
